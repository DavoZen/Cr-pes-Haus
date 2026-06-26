// Aurora Borealis — soft flowing light, mouse parallax, device orientation
(function () {
  'use strict';

  var canvas = document.getElementById('aurora-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0, h = 0;
  var mouseX = 0.5, mouseY = 0.5;
  var targetMouseX = 0.5, targetMouseY = 0.5;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  var BLOBS = [
    { cx: 0.25, cy: 0.30, r: 0.45, color: [232, 122, 61],  speed: 0.00018, phase: 0 },
    { cx: 0.72, cy: 0.22, r: 0.38, color: [212, 168, 83],  speed: 0.00022, phase: 1.4 },
    { cx: 0.55, cy: 0.72, r: 0.42, color: [245, 176, 65],  speed: 0.00015, phase: 2.8 },
    { cx: 0.18, cy: 0.68, r: 0.35, color: [240, 216, 157], speed: 0.00020, phase: 4.1 },
    { cx: 0.85, cy: 0.55, r: 0.32, color: [232, 122, 61],  speed: 0.00025, phase: 5.5 }
  ];

  function resize() {
    w = window.innerWidth;
    h = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawBlob(b, t) {
    var ox = Math.sin(t * b.speed * 1000 + b.phase) * 0.06;
    var oy = Math.cos(t * b.speed * 700 + b.phase * 1.3) * 0.05;
    var mx = (mouseX - 0.5) * 0.08;
    var my = (mouseY - 0.5) * 0.06;
    var x = (b.cx + ox + mx) * w;
    var y = (b.cy + oy + my) * h;
    var r = b.r * Math.max(w, h);
    var g = ctx.createRadialGradient(x, y, 0, x, y, r);
    var c = b.color;
    g.addColorStop(0,   'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0.55)');
    g.addColorStop(0.4, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0.22)');
    g.addColorStop(1,   'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(t) {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < BLOBS.length; i++) {
      drawBlob(BLOBS[i], t / 1000);
    }
    ctx.globalCompositeOperation = 'source-over';
    if (!prefersReducedMotion) requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', function (e) {
    targetMouseX = e.clientX / window.innerWidth;
    targetMouseY = e.clientY / window.innerHeight;
  });

  window.addEventListener('touchmove', function (e) {
    if (e.touches.length) {
      targetMouseX = e.touches[0].clientX / window.innerWidth;
      targetMouseY = e.touches[0].clientY / window.innerHeight;
    }
  }, { passive: true });

  if (isMobile && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (e) {
      if (e.gamma == null || e.beta == null) return;
      targetMouseX = Math.max(0, Math.min(1, 0.5 + e.gamma / 60));
      targetMouseY = Math.max(0, Math.min(1, 0.5 + (e.beta - 45) / 60));
    });
  }

  function loop() {
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;
    if (!prefersReducedMotion) requestAnimationFrame(loop);
  }

  if (!prefersReducedMotion) {
    resize();
    requestAnimationFrame(animate);
    requestAnimationFrame(loop);
    window.addEventListener('load', function () { setTimeout(resize, 200); });
    window.addEventListener('orientationchange', function () { setTimeout(resize, 300); });
  } else {
    resize();
    animate(0);
  }
})();
