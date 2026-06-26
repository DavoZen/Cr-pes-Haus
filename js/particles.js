// ============================================================
// PARTICLES — легкий canvas particle system для живих фонів
// ============================================================
(function () {
  'use strict';

  var canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var width, height;
  var particles = [];
  var mouseX = -1000;
  var mouseY = -1000;
  var animationId;

  var PALETTES = [
    [212, 168, 83],
    [245, 176, 65],
    [232, 122, 61],
    [240, 216, 157],
  ];

  function rgba(r, g, b, a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  function resize() {
    width = window.innerWidth;
    height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    canvas.width = width;
    canvas.height = height;
  }

  function createParticle() {
    var color = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    var size = 1.2 + Math.random() * 3.5;
    var speedY = -(0.1 + Math.random() * 0.35);
    var speedX = (Math.random() - 0.5) * 0.4;
    var isSparkle = Math.random() > 0.7;

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: size,
      baseSize: size,
      speedY: speedY,
      speedX: speedX,
      opacity: 0.15 + Math.random() * 0.55,
      baseOpacity: 0.15 + Math.random() * 0.55,
      color: color,
      twinkleSpeed: 0.005 + Math.random() * 0.02,
      twinkleOffset: Math.random() * Math.PI * 2,
      isSparkle: isSparkle,
      sparklePulse: Math.random() * Math.PI * 2,
      veerX: 0,
      veerY: 0,
    };
  }

  function init() {
    resize();
    particles = [];
    var area = width * height;
    var count = Math.min(80, Math.max(25, Math.floor(area / 20000)));
    for (var i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      var twinkle = Math.sin(Date.now() * 0.001 * p.twinkleSpeed * 60 + p.twinkleOffset);
      p.size = p.baseSize + twinkle * 0.8;
      p.opacity = p.baseOpacity + twinkle * 0.15;

      if (p.isSparkle) {
        p.sparklePulse += 0.03;
        var pulse = Math.max(0, Math.sin(p.sparklePulse));
        p.size += pulse * 1.5;
        p.opacity += pulse * 0.2;
      }

      var dx = p.x - mouseX;
      var dy = p.y - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var maxDist = 150;
      if (dist < maxDist && dist > 0) {
        var force = (maxDist - dist) / maxDist * 0.3;
        p.veerX += (dx / dist) * force * 0.05;
        p.veerY += (dy / dist) * force * 0.05;
      }

      p.veerX *= 0.98;
      p.veerY *= 0.98;

      p.x += p.speedX + p.veerX;
      p.y += p.speedY + p.veerY;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      p.opacity = Math.max(0.08, Math.min(0.75, p.opacity));

      var glowSize = p.size * 4;
      var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
      gradient.addColorStop(0, rgba(p.color[0], p.color[1], p.color[2], p.opacity * 0.7));
      gradient.addColorStop(0.4, rgba(p.color[0], p.color[1], p.color[2], p.opacity * 0.2));
      gradient.addColorStop(1, rgba(p.color[0], p.color[1], p.color[2], 0));

      ctx.beginPath();
      ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = rgba(p.color[0], p.color[1], p.color[2], Math.min(p.opacity * 1.3, 1));
      ctx.fill();
    }

    var maxConnDist = 110;
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx2 = particles[i].x - particles[j].x;
        var dy2 = particles[i].y - particles[j].y;
        var dist2 = dx2 * dx2 + dy2 * dy2;
        if (dist2 < maxConnDist * maxConnDist) {
          var d = Math.sqrt(dist2);
          var alpha = (1 - d / maxConnDist) * 0.07;
          ctx.beginPath();
          ctx.strokeStyle = rgba(245, 176, 65, alpha);
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', function () {
    resize();
  });

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    init();
    animate();

    window.addEventListener('load', function () {
      setTimeout(function () {
        resize();
      }, 200);
    });

    window.addEventListener('orientationchange', function () {
      setTimeout(function () {
        resize();
      }, 300);
    });
  }
})();
