var galleryImages = [];

function discoverGalleryImages() {
  return new Promise(function (resolve) {
    var found = [];
    var index = 1;
    var maxAttempts = 50;

    function tryLoad(i) {
      if (i > maxAttempts) {
        resolve(found);
        return;
      }

      var src = 'images/photo' + i + '.jpg';
      var img = new Image();

      img.onload = function () {
        found.push(src);
        tryLoad(i + 1);
      };

      img.onerror = function () {
        resolve(found);
      };

      img.src = src;
    }

    tryLoad(1);
  });
}

var currentIndex = 0;
var touchStartX = 0;
var touchStartTime = 0;
var touchCurrentX = 0;
var isDragging = false;
var trackBaseTransform = 0;

function renderGallery() {
  var track = document.getElementById('galleryTrack');
  var dotsContainer = document.getElementById('galleryDots');
  var viewport = document.getElementById('galleryViewport');

  if (!track) return;

  if (galleryImages.length === 0) {
    track.innerHTML = '<div class="gallery-slide active"><div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">Завантаження галереї...</div></div>';
    discoverGalleryImages().then(function (images) {
      galleryImages = images;
      buildGallery(track, dotsContainer);
    });
    return;
  }

  buildGallery(track, dotsContainer);
}

function buildGallery(track, dotsContainer) {
  if (galleryImages.length === 0) {
    track.innerHTML = '<div class="gallery-slide active"><div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">Немає фото в папці images/</div></div>';
    return;
  }

  track.innerHTML = galleryImages.map(function (src, i) {
    return '<div class="gallery-slide' + (i === 0 ? ' active' : '') + '" data-index="' + i + '">' +
      '<img src="' + src + '" alt="Crêpes Haus ' + (i + 1) + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '" onerror="this.style.display=\'none\'">' +
    '</div>';
  }).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = galleryImages.map(function (_, i) {
      return '<button class="gallery-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
    }).join('');

    var dots = dotsContainer.querySelectorAll('.gallery-dot');
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(parseInt(dot.getAttribute('data-index'), 10));
      });
    });
  }

  updateGallery();
}

function updateGallery(instant) {
  var track = document.getElementById('galleryTrack');
  if (!track) return;

  track.style.transition = instant ? 'none' : '';

  var slides = track.querySelectorAll('.gallery-slide');
  slides.forEach(function (slide, i) {
    if (i === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  track.style.transform = 'translate3d(' + (-currentIndex * 100) + '%, 0, 0)';

  var dots = document.querySelectorAll('.gallery-dot');
  dots.forEach(function (dot, i) {
    if (i === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  if (galleryImages.length === 0) return;
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateGallery();
}

function prevSlide() {
  if (galleryImages.length === 0) return;
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGallery();
}

function goToSlide(index) {
  if (galleryImages.length === 0) return;
  currentIndex = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
  updateGallery();
}

function getEventX(e) {
  if (e.touches && e.touches.length > 0) return e.touches[0].clientX;
  if (e.changedTouches && e.changedTouches.length > 0) return e.changedTouches[0].clientX;
  return e.clientX;
}

function handleDragStart(e) {
  var viewport = document.getElementById('galleryViewport');
  if (!viewport) return;
  if (!viewport.contains(e.target)) return;

  var track = document.getElementById('galleryTrack');
  if (!track) return;

  touchStartX = getEventX(e);
  touchStartTime = Date.now();
  touchCurrentX = touchStartX;
  isDragging = true;
  trackBaseTransform = currentIndex * -100;
  track.classList.add('dragging');
}

function handleDragMove(e) {
  if (!isDragging) return;
  touchCurrentX = getEventX(e);
  var diff = (touchCurrentX - touchStartX) / window.innerWidth * 100;
  var track = document.getElementById('galleryTrack');
  if (track) {
    track.style.transform = 'translate3d(' + (trackBaseTransform + diff) + '%, 0, 0)';
  }
}

function handleDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  var track = document.getElementById('galleryTrack');
  if (track) {
    track.classList.remove('dragging');
  }

  var diff = touchCurrentX - touchStartX;
  var duration = Date.now() - touchStartTime;
  var velocity = Math.abs(diff) / (duration || 1);
  var movedPercent = Math.abs(diff) / window.innerWidth * 100;

  if (velocity > 0.4 || movedPercent > 8) {
    if (diff > 0) prevSlide();
    else nextSlide();
  } else {
    goToSlide(currentIndex);
  }
}

function handleKeyDown(e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
}

var galleryViewport = document.getElementById('galleryViewport');
if (galleryViewport) {
  galleryViewport.addEventListener('mousedown', handleDragStart);
  galleryViewport.addEventListener('touchstart', handleDragStart, { passive: true });
}

document.addEventListener('mousemove', handleDragMove);
document.addEventListener('touchmove', handleDragMove, { passive: true });
document.addEventListener('mouseup', handleDragEnd);
document.addEventListener('touchend', handleDragEnd);
document.addEventListener('touchcancel', handleDragEnd);
document.addEventListener('keydown', handleKeyDown);

renderGallery();
