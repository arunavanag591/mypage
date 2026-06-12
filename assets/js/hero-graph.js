/* Hero motif — a slow cell-neighborhood graph that responds to the cursor.
   Soft blue "cells" (nodes) connected by thin "spatial edges" when close,
   echoing the cell-neighborhood / spatial-network modeling in the bio above.
   A minority of cells carry a second "channel" tint (a nod to multiplex
   imaging). Moving the cursor brightens nearby cells and links them to it,
   like probing a tissue. Subtle by design: low alpha, slow drift, capped node
   count, paused when the tab is hidden, single static frame under
   prefers-reduced-motion. */
(function () {
  var canvas = document.getElementById("hero-graph");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var band = canvas.parentNode;
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0;
  var H = 0;
  var nodes = [];
  var nodeCount = 0;
  var linkDist = 120;
  var raf = null;
  var rect = null;

  var pointer = { x: 0, y: 0, active: false };
  var POINTER_R = 150;

  var PRIMARY = "0, 113, 227";
  var ACCENT = "20, 165, 205";

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function initNodes() {
    nodes = [];
    for (var i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        r: rand(1.4, 3.2),
        accent: Math.random() < 0.3
      });
    }
  }

  function resize() {
    rect = canvas.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    if (W === 0 || H === 0) return;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    // Density scales with area, capped for legibility and performance.
    nodeCount = Math.max(26, Math.min(70, Math.round((W * H) / 14000)));
    linkDist = Math.max(90, Math.min(150, W / 8));
    initNodes();
  }

  function step() {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = W + 20;
      else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      else if (n.y > H + 20) n.y = -20;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Spatial edges between nearby cells.
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i];
        var b = nodes[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDist) {
          var alpha = (1 - d / linkDist) * 0.14;
          ctx.strokeStyle = "rgba(" + PRIMARY + ", " + alpha.toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Cells, brightened near the cursor; links drawn from cursor to neighbors.
    for (var k = 0; k < nodes.length; k++) {
      var c = nodes[k];
      var hue = c.accent ? ACCENT : PRIMARY;
      var glow = 0;

      if (pointer.active) {
        var pdx = c.x - pointer.x;
        var pdy = c.y - pointer.y;
        var pd = Math.sqrt(pdx * pdx + pdy * pdy);
        if (pd < POINTER_R) {
          glow = 1 - pd / POINTER_R;
          ctx.strokeStyle = "rgba(" + hue + ", " + (glow * 0.22).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(" + hue + ", " + (0.26 + glow * 0.4).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r + glow * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    step();
    draw();
    raf = window.requestAnimationFrame(loop);
  }

  function start() {
    if (!raf && W > 0 && H > 0) loop();
  }

  function stop() {
    if (raf) {
      window.cancelAnimationFrame(raf);
      raf = null;
    }
  }

  resize();
  draw();

  if (!reduceMotion) {
    start();

    band.addEventListener("pointermove", function (e) {
      if (!rect) return;
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    });
    band.addEventListener("pointerleave", function () {
      pointer.active = false;
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    window.addEventListener(
      "scroll",
      function () {
        rect = canvas.getBoundingClientRect();
      },
      { passive: true }
    );
  }

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      var wasRunning = raf !== null;
      stop();
      resize();
      draw();
      if (!reduceMotion && wasRunning) start();
    }, 200);
  });
})();
