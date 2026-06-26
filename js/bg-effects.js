(function () {
  'use strict';

  var canvas = document.getElementById('particles');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var w, h;
  var particles = [];
  var COUNT = 60;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 2 + 0.8;
      this.alpha = Math.random() * 0.5 + 0.15;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212, 168, 83, ' + this.alpha + ')';
      ctx.fill();
    }
  }

  for (var i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          var alpha = (1 - dist / 140) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(212, 168, 83, ' + alpha + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(function (p) { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();

  window.addEventListener('resize', function () {
    particles.forEach(function (p) { p.reset(); });
  });

  var glow = document.getElementById('cursorGlow');
  if (glow) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }
})();
