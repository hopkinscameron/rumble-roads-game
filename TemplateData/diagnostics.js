(function () {
  var logLimit = 400;
  var frameLimit = 300;
  var slowFrameMs = 33;
  var tapsToOpen = 5;
  var tapWindowMs = 3000;
  var tapMinSide = 44;
  var refreshMs = 500;

  var state = window.rumbleDiagnostics = { open: false, unity: "", stamp: "", marks: [] };
  var lines = state.lines = [];

  var frames = [];
  var lastFrame = 0;
  var taps = [];
  var stamp, panel, readout, log, copy, shownLines = -1;

  function seconds() {
    return (performance.now() / 1000).toFixed(2) + "s";
  }

  function describe(value) {
    if (typeof value == "string") {
      return value;
    }

    try {
      return value instanceof Error ? value.message : JSON.stringify(value);
    } catch (error) {
      return String(value);
    }
  }

  function add(kind, values) {
    var text = Array.prototype.map.call(values, describe).join(" ").replace(/\s+$/, "");
    lines.push(seconds() + " " + kind + " " + text);
    if (lines.length > logLimit) {
      lines.splice(0, lines.length - logLimit);
    }
  }

  ["log", "info", "warn", "error"].forEach(function (kind) {
    var original = console[kind];
    console[kind] = function () {
      add(kind, arguments);
      return original.apply(console, arguments);
    };
  });

  ["AudioContext", "webkitAudioContext"].forEach(function (name) {
    var Original = window[name];
    if (!Original) {
      return;
    }

    var Watched = function () {
      var context = new (Function.prototype.bind.apply(Original, [null].concat(Array.prototype.slice.call(arguments))))();
      state.audio = context;
      add("info", ["audio context " + context.state]);
      if (context.addEventListener) {
        context.addEventListener("statechange", function () {
          add("info", ["audio context " + context.state]);
        });
      }

      return context;
    };
    Watched.prototype = Original.prototype;
    window[name] = Watched;
  });

  window.addEventListener("error", function (event) {
    add("error", [event.message + " @ " + (event.filename || "?") + ":" + (event.lineno || 0)]);
  });

  window.addEventListener("unhandledrejection", function (event) {
    add("error", ["unhandled rejection: " + describe(event.reason)]);
  });

  state.mark = function (name) {
    state.marks.push(name + " " + seconds());
    add("mark", [name]);
  };

  function tick(now) {
    if (lastFrame > 0) {
      frames.push(now - lastFrame);
      if (frames.length > frameLimit) {
        frames.shift();
      }
    }

    lastFrame = now;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  document.addEventListener("visibilitychange", function () {
    lastFrame = 0;
    add("page", [document.visibilityState]);
  });

  function frameLine() {
    if (frames.length == 0) {
      return "Browser no frames yet";
    }

    var sorted = frames.slice().sort(function (a, b) { return a - b; });
    var total = 0;
    var slow = 0;
    frames.forEach(function (frame) {
      total += frame;
      if (frame > slowFrameMs) {
        slow++;
      }
    });
    var average = total / frames.length;
    var worstShare = Math.max(1, Math.ceil(frames.length * 0.01));
    var worstTotal = 0;
    for (var i = sorted.length - worstShare; i < sorted.length; i++) {
      worstTotal += sorted[i];
    }

    return "Browser fps " + (1000 / average).toFixed(1) + "  avg " + average.toFixed(1) + " ms  worst " + sorted[sorted.length - 1].toFixed(1) +
      " ms  slowest 1% " + (worstTotal / worstShare).toFixed(1) + " ms  >" + slowFrameMs + " ms " + slow + "/" + frames.length;
  }

  function insets() {
    var probe = document.getElementById("rumble-diagnostics-probe");
    if (!probe) {
      probe = document.createElement("div");
      probe.id = "rumble-diagnostics-probe";
      document.body.appendChild(probe);
    }

    var style = window.getComputedStyle(probe);
    return [style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft].map(function (value) { return parseFloat(value) || 0; }).join(",");
  }

  function deviceLines() {
    var root = document.documentElement;
    var view = window.visualViewport;
    var canvas = document.getElementById("unity-canvas");
    var box = canvas ? canvas.getBoundingClientRect() : null;
    var orientation = screen.orientation && screen.orientation.type ? screen.orientation.type : (window.orientation !== undefined ? "angle " + window.orientation : "?");
    var standalone = window.navigator.standalone === true || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
    return [
      "agent " + navigator.userAgent,
      "standalone " + standalone + "  orientation " + orientation + "  dpr " + (window.devicePixelRatio || 1) + "  cores " + (navigator.hardwareConcurrency || "?"),
      "screen " + screen.width + "x" + screen.height + "  avail " + screen.availWidth + "x" + screen.availHeight,
      "inner " + window.innerWidth + "x" + window.innerHeight + "  client " + root.clientWidth + "x" + root.clientHeight +
        (view ? "  visual " + Math.round(view.width) + "x" + Math.round(view.height) + " at " + Math.round(view.offsetLeft) + "," + Math.round(view.offsetTop) + " scale " + view.scale.toFixed(2) : ""),
      "canvas css " + (box ? Math.round(box.width) + "x" + Math.round(box.height) + " at " + Math.round(box.left) + "," + Math.round(box.top) : "?") +
        "  pixels " + (canvas ? canvas.width + "x" + canvas.height : "?") + "  safe insets t,r,b,l " + insets()
    ];
  }

  function report() {
    return [
      "Rumble Roads " + (state.stamp || "?") + "  at " + new Date().toISOString() + "  up " + seconds(),
      frameLine(),
      state.unity || "Unity (no report yet)",
      "",
      deviceLines().join("\n"),
      "",
      "Load " + (state.marks.join("  ") || "?"),
      audioLine()
    ].join("\n");
  }

  function audioLine() {
    var context = state.audio;
    return context ? "Audio " + context.state + "  " + context.sampleRate + " Hz" : "Audio no context yet";
  }

  function refresh() {
    if (!state.open) {
      return;
    }

    readout.textContent = report();
    if (shownLines != lines.length || lines.length == logLimit) {
      var atBottom = log.scrollTop + log.clientHeight >= log.scrollHeight - 8;
      log.textContent = lines.join("\n");
      shownLines = lines.length;
      if (atBottom) {
        log.scrollTop = log.scrollHeight;
      }
    }
  }

  function setOpen(open) {
    state.open = open;
    panel.style.display = open ? "flex" : "none";
    shownLines = -1;
    refresh();
  }

  function copyText(text) {
    var done = function () {
      copy.textContent = "Copied!";
      setTimeout(function () { copy.textContent = "Copy"; }, 1500);
    };
    var fallback = function () {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.className = "rumble-diagnostics-copy";
      document.body.appendChild(area);
      area.select();
      area.setSelectionRange(0, text.length);
      try {
        document.execCommand("copy");
        done();
      } catch (error) {
        copy.textContent = "Copy failed";
      }
      document.body.removeChild(area);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function button(label, onPress) {
    var element = document.createElement("button");
    element.textContent = label;
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      onPress();
    });
    return element;
  }

  function onTap(event) {
    if (panel.contains(event.target)) {
      return;
    }

    var box = stamp.getBoundingClientRect();
    var inside = event.clientX <= box.left + Math.max(box.width, tapMinSide) && event.clientY <= box.top + Math.max(box.height, tapMinSide);
    if (!inside) {
      return;
    }

    var now = performance.now();
    taps = taps.filter(function (time) { return now - time < tapWindowMs; });
    taps.push(now);
    if (taps.length >= tapsToOpen) {
      taps = [];
      setOpen(!state.open);
    }
  }

  function build() {
    stamp = document.createElement("div");
    stamp.id = "rumble-stamp";
    document.body.appendChild(stamp);

    panel = document.createElement("div");
    panel.id = "rumble-diagnostics";
    var bar = document.createElement("div");
    bar.className = "rumble-diagnostics-bar";
    copy = button("Copy", function () { copyText(report() + "\n\nLog\n" + lines.join("\n")); });
    bar.appendChild(copy);
    bar.appendChild(button("Clear log", function () { lines.length = 0; shownLines = -1; refresh(); }));
    bar.appendChild(button("Reset fps", function () { frames.length = 0; }));
    bar.appendChild(button("Close", function () { setOpen(false); }));
    readout = document.createElement("pre");
    readout.className = "rumble-diagnostics-readout";
    log = document.createElement("pre");
    log.className = "rumble-diagnostics-log";
    panel.appendChild(bar);
    panel.appendChild(readout);
    panel.appendChild(log);
    document.body.appendChild(panel);

    window.addEventListener("pointerdown", onTap, { capture: true, passive: true });
    setInterval(refresh, refreshMs);

    fetch("StreamingAssets/build-stamp.txt", { cache: "no-store" })
      .then(function (response) { return response.ok ? response.text() : ""; })
      .catch(function () { return ""; })
      .then(function (text) {
        state.stamp = text.trim() || window.rumbleVersion || "";
        stamp.textContent = state.stamp;
      });
  }

  if (document.body) {
    build();
  } else {
    document.addEventListener("DOMContentLoaded", build);
  }
})();
