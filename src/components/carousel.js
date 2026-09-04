export function initHomeCarousel() {
  const container = document.getElementById('featured-carousel-container');
  if (!container) return;

  const slidesData = [
    {
      sku: '11-16T',
      title: 'Water-Proof 11 Series • Sealed IP67 Outdoor Enclosure',
      typedPhrase: 'Outdoor Telemetry & Solar',
      image: '/images/hero/hero_enclosure_waterproof_1788528155266.jpg',
      link: '/products/11-series/index.html'
    },
    {
      sku: '15-4',
      title: 'Plastic Cabinet 15 Series • Modular Benchtop Cabinet',
      typedPhrase: 'Laboratory & Test Instruments',
      image: '/images/hero/hero_enclosure_cabinet_1788528178694.jpg',
      link: '/products/15-series/index.html'
    },
    {
      sku: '18-12',
      title: 'Desk-Top 18 Series • Ergonomic Angled Console',
      typedPhrase: 'Desktop Operator Consoles',
      image: '/images/hero/hero_enclosure_desktop_1788528204896.jpg',
      link: '/products/18-series/index.html'
    },
    {
      sku: '23-4',
      title: 'DIN-Rail 23 Series • Snap-On Automation Module',
      typedPhrase: '35mm DIN-Rail Electrical Panels',
      image: '/images/hero/hero_enclosure_dinrail_1788528228808.jpg',
      link: '/products/23-series/index.html'
    },
    {
      sku: '21-20D',
      title: 'Hand-Held 21 Series • Portable Diagnostic Casing',
      typedPhrase: 'Handheld Field Diagnostics',
      image: '/images/hero/hero_enclosure_handheld_1788528254056.jpg',
      link: '/products/21-series/index.html'
    }
  ];

  // Random initial selection
  let activeIndex = Math.floor(Math.random() * slidesData.length);
  const slideDuration = 6000;
  let isPaused = false;
  let typingTimeout = null;

  // Minimalist Full-Width Layout
  container.innerHTML = `
    <div class="relative w-full bg-[#080d15] text-white py-8 md:py-12 overflow-hidden border-b border-cad-blue/20">
      <!-- Ambient subtle background glow -->
      <div class="absolute inset-0 bg-radial from-slate-900/50 via-[#080d15] to-[#080d15] pointer-events-none"></div>

      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-6 md:gap-8">
        
        <!-- Single-Line Animated Typography Header -->
        <div class="text-center">
          <div class="inline-flex items-center gap-2 mb-2 text-[11px] font-technical-data tracking-widest text-safety-orange uppercase font-bold">
            <span class="w-2 h-2 rounded-full bg-safety-orange animate-ping"></span>
            <span>PRECISION INDUSTRIAL ENCLOSURES</span>
          </div>
          
          <h1 class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2 flex-wrap">
            <span class="text-gray-200">Engineered for</span>
            <span class="text-safety-orange underline decoration-safety-orange/40 font-black inline-flex items-center">
              <span id="animated-typed-text">${slidesData[activeIndex].typedPhrase}</span>
              <span id="typewriter-cursor" class="inline-block w-1 h-5 md:h-8 bg-safety-orange ml-1 animate-pulse"></span>
            </span>
          </h1>
        </div>

        <!-- Landscape Image Showcase Stage -->
        <div class="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[560px] bg-black/80 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
          
          <!-- Background Void Image with Smooth Crossfade -->
          <img id="hero-landscape-img" src="${slidesData[activeIndex].image}" alt="${slidesData[activeIndex].title}" class="w-full h-full object-cover transition-all duration-700 ease-out" />
          
          <!-- Subtle Gradient Vignette Overlays for Infinite Void Feel -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>

          <!-- Bottom Floating Info & Action Overlay (Flex container prevents any element collision) -->
          <div class="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 flex items-center justify-between gap-2 pointer-events-none">
            <!-- Sleek Minimal Floating Title Badge -->
            <div class="bg-black/75 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/15 flex items-center gap-2 shadow-lg min-w-0 flex-1 max-w-[62%] sm:max-w-none pointer-events-auto">
              <span class="w-2 h-2 rounded-full bg-safety-orange flex-shrink-0"></span>
              <span id="hero-product-title" class="text-white text-[11px] sm:text-sm font-technical-data font-semibold truncate">
                ${slidesData[activeIndex].title}
              </span>
            </div>

            <!-- Direct Minimal Action Buttons -->
            <div class="flex items-center gap-2 flex-shrink-0 pointer-events-auto">
              <a id="hero-product-link" href="${slidesData[activeIndex].link}" class="bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-[11px] sm:text-xs px-3.5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg transition-all font-bold flex items-center gap-1 active:scale-95 whitespace-nowrap">
                <span>EXPLORE SERIES</span>
                <span class="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
              </a>
              <a href="/catalog.html" class="hidden sm:inline-flex bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-caps text-xs px-4 py-3 rounded-xl transition-colors font-semibold whitespace-nowrap">
                CATALOG
              </a>
            </div>
          </div>

          <!-- Minimal Floating Navigation Arrows -->
          <button id="hero-prev-btn" aria-label="Previous Slide" class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-safety-orange text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow">
            <span class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button id="hero-next-btn" aria-label="Next Slide" class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-safety-orange text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow">
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

        </div>

        <!-- Minimalist Indicator Bar -->
        <div class="flex items-center justify-between gap-4 px-2">
          <!-- Slide dots -->
          <div class="flex items-center gap-2" id="hero-dots">
            ${slidesData.map((_, idx) => `
              <button data-index="${idx}" aria-label="Slide ${idx + 1}" class="hero-dot w-8 sm:w-12 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-safety-orange' : 'bg-white/20 hover:bg-white/40'}"></button>
            `).join('')}
          </div>

          <!-- Progress & Play/Pause -->
          <div class="flex items-center gap-3 text-xs font-technical-data text-gray-400">
            <span id="hero-slide-num" class="text-white font-bold">0${activeIndex + 1}</span> / 0${slidesData.length}
            <button id="hero-pause-btn" class="text-gray-400 hover:text-white transition-colors ml-1 p-1">
              <span id="hero-pause-icon" class="material-symbols-outlined text-base">pause</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  const heroImg = document.getElementById('hero-landscape-img');
  const heroTitle = document.getElementById('hero-product-title');
  const heroLink = document.getElementById('hero-product-link');
  const typedTextEl = document.getElementById('animated-typed-text');
  const slideNumEl = document.getElementById('hero-slide-num');
  const dots = container.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const pauseBtn = document.getElementById('hero-pause-btn');
  const pauseIcon = document.getElementById('hero-pause-icon');

  function typeWriterEffect(targetText) {
    if (!typedTextEl) return;
    clearTimeout(typingTimeout);

    const currentText = typedTextEl.textContent;
    let charIndex = currentText.length;

    function erase() {
      if (charIndex > 0) {
        typedTextEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingTimeout = setTimeout(erase, 15);
      } else {
        typeNew();
      }
    }

    let newCharIndex = 0;
    function typeNew() {
      if (newCharIndex <= targetText.length) {
        typedTextEl.textContent = targetText.substring(0, newCharIndex);
        newCharIndex++;
        typingTimeout = setTimeout(typeNew, 30);
      }
    }

    erase();
  }

  function renderSlide(index) {
    activeIndex = index;
    const s = slidesData[index];

    // Animate image transition
    if (heroImg) {
      heroImg.style.opacity = '0.4';
      heroImg.style.transform = 'scale(0.99)';
      setTimeout(() => {
        heroImg.src = s.image;
        heroImg.alt = s.title;
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';
      }, 150);
    }

    if (heroTitle) heroTitle.textContent = s.title;
    if (heroLink) heroLink.href = s.link;
    if (slideNumEl) slideNumEl.textContent = `0${index + 1}`;

    typeWriterEffect(s.typedPhrase);

    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.className = 'hero-dot w-8 sm:w-12 h-1.5 rounded-full transition-all duration-300 bg-safety-orange';
      } else {
        dot.className = 'hero-dot w-8 sm:w-12 h-1.5 rounded-full transition-all duration-300 bg-white/20 hover:bg-white/40';
      }
    });

    resetTimer();
  }

  let timer = null;

  function resetTimer() {
    if (timer) clearInterval(timer);
    if (!isPaused) {
      timer = setInterval(() => {
        const nextIdx = (activeIndex + 1) % slidesData.length;
        renderSlide(nextIdx);
      }, slideDuration);
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (activeIndex + 1) % slidesData.length;
      renderSlide(nextIdx);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevIdx = (activeIndex - 1 + slidesData.length) % slidesData.length;
      renderSlide(prevIdx);
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (pauseIcon) pauseIcon.textContent = isPaused ? 'play_arrow' : 'pause';
      resetTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        renderSlide(idx);
      }
    });
  });

  // Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = container.querySelector('.aspect-\\[16\\/9\\]') || container;

  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      renderSlide((activeIndex + 1) % slidesData.length);
    }
    if (touchEndX > touchStartX + 50) {
      renderSlide((activeIndex - 1 + slidesData.length) % slidesData.length);
    }
  }, { passive: true });

  resetTimer();
}
