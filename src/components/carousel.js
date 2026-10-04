export function initHomeCarousel() {
  const container = document.getElementById('featured-carousel-container');
  if (!container) return;

  const slidesData = [
    {
      sku: '11-16T',
      name: '11 Series',
      tagline: 'IP65 Weatherproof',
      title: '11 Series Plastic Enclosures • Sealed IP65 Weatherproof Casing',
      typedPhrase: 'Outdoor Telemetry & Solar',
      image: '/images/hero/hero_11_series.jpg',
      link: '/products/11-series/index.html'
    },
    {
      sku: '15-4',
      name: '15 Series',
      tagline: 'Modular Cabinet',
      title: '15 Series Plastic Enclosures • Modular Benchtop Cabinet',
      typedPhrase: 'Laboratory & Test Instruments',
      image: '/images/hero/hero_15_series.jpg',
      link: '/products/15-series/index.html'
    },
    {
      sku: '18-12',
      name: '18 Series',
      tagline: 'Desktop Console',
      title: '18 Series Plastic Enclosures • Ergonomic Sloped Console',
      typedPhrase: 'Desktop Operator Consoles',
      image: '/images/hero/hero_18_series.jpg',
      link: '/products/18-series/index.html'
    },
    {
      sku: '23-4',
      name: '23 Series',
      tagline: 'DIN-Rail Module',
      title: '23 Series Plastic Enclosures • Snap-On DIN-Rail Module',
      typedPhrase: '35mm DIN-Rail Electrical Panels',
      image: '/images/hero/hero_23_series.jpg',
      link: '/products/23-series/index.html'
    },
    {
      sku: '21-20D',
      name: '21 Series',
      tagline: 'Handheld Casing',
      title: '21 Series Plastic Enclosures • Portable Handheld Casing',
      typedPhrase: 'Handheld Field Diagnostics',
      image: '/images/hero/hero_21_series.jpg',
      link: '/products/21-series/index.html'
    }
  ];

  // Random initial selection
  let activeIndex = Math.floor(Math.random() * slidesData.length);
  const slideDuration = 6000;
  let isPaused = false;
  let typingTimeout = null;

  // Split-Screen Layout: Left (Big Typewriter Text & Brand Value) / Right (Slideshow & Peeking Deck)
  container.innerHTML = `
    <style>
      .deck-card {
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
      }
      .deck-card-inactive {
        transform: translateY(0);
        opacity: 0.7;
        background-color: rgba(13, 21, 34, 0.85);
        border-color: rgba(255, 255, 255, 0.1);
      }
      .deck-card-inactive:hover {
        transform: translateY(-4px);
        opacity: 0.95;
        border-color: rgba(249, 115, 22, 0.5);
        background-color: rgba(25, 36, 54, 0.9);
      }
      .deck-card-active {
        transform: translateY(-8px) scale(1.02);
        opacity: 1;
        background-color: #0f172a;
        border-color: #F97316;
        box-shadow: 0 16px 32px -8px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.6);
      }
    </style>

    <div class="relative w-full bg-[#080d15] text-white py-10 lg:py-16 overflow-hidden border-b border-cad-blue/20">
      <!-- Ambient subtle background glow -->
      <div class="absolute inset-0 bg-radial from-slate-900/50 via-[#080d15] to-[#080d15] pointer-events-none"></div>

      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- 2-Column Split Hero Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          <!-- LEFT COLUMN: Large Animated Headline & Value Prop (5 cols on lg) -->
          <div class="lg:col-span-5 flex flex-col justify-center text-left">
            
            <div class="inline-flex items-center gap-2 mb-3 sm:mb-4 text-xs font-technical-data tracking-widest text-safety-orange uppercase font-bold w-fit">
              <span class="w-2 h-2 rounded-full bg-safety-orange animate-ping"></span>
              <span>PlastoGuard Industries</span>
            </div>

            <!-- Greatly Increased Typography Size with 2-line reserved space to prevent layout shifts -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              <span class="block text-gray-200">Engineered for</span>
              <span class="block text-safety-orange font-black mt-1 min-h-[2.4em] leading-[1.15]">
                <span id="animated-typed-text" class="underline decoration-safety-orange/40">${slidesData[activeIndex].typedPhrase}</span>
                <span id="typewriter-cursor" class="inline-block w-1.5 h-[0.9em] bg-safety-orange ml-1 align-baseline animate-pulse no-underline"></span>
              </span>
            </h1>

            <p class="text-sm sm:text-base md:text-lg text-slate-300 font-body-md leading-relaxed mt-4 sm:mt-6 max-w-xl">
              Precision injection-molded plastic enclosures engineered for demanding instrumentation, electrical distribution, and automation controls across India.
            </p>

            <!-- Primary CTAs on Left -->
            <div class="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
              <a id="hero-main-cta" href="${slidesData[activeIndex].link}" class="bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-xl shadow-safety-orange/20 transition-all font-bold flex items-center gap-2 active:scale-95 whitespace-nowrap">
                <span>EXPLORE SERIES</span>
                <span class="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
              </a>
              <a href="/catalog.html" class="bg-slate-800/80 hover:bg-slate-700 text-white border border-white/20 font-label-caps text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-colors font-semibold backdrop-blur-md whitespace-nowrap">
                FULL CATALOG
              </a>
            </div>

            <!-- Key Industrial Specifications / Badges -->
            <div class="grid grid-cols-3 gap-3 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 text-slate-400 font-technical-data text-[11px] sm:text-xs">
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">IP65</span>
                <span>Weatherproof</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">PC / ABS</span>
                <span>Virgin Polymers</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">100% Direct</span>
                <span>OEM Tooling</span>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Slideshow Stage & Peeking Sliding Card Deck (7 cols on lg) -->
          <div class="lg:col-span-7 flex flex-col gap-4 sm:gap-5 w-full">
            
            <!-- Product Showcase Stage -->
            <div id="hero-showcase-stage" class="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[460px] xl:h-[480px] bg-black/90 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              
              <!-- Background Void Image with Smooth Crossfade -->
              <img id="hero-landscape-img" src="${slidesData[activeIndex].image}" alt="${slidesData[activeIndex].title}" class="w-full h-full object-cover object-center transition-all duration-700 ease-out" />
              
              <!-- Subtle Gradient Vignette Overlays for Infinite Void Feel -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>

              <!-- Top Left Floating Badge -->
              <div class="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-auto">
                <div class="bg-black/75 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-2 shadow-md">
                  <span class="w-2 h-2 rounded-full bg-safety-orange"></span>
                  <span id="hero-badge-text" class="text-white text-[11px] sm:text-xs font-technical-data font-bold tracking-wider uppercase">
                    ${slidesData[activeIndex].name} • Model: ${slidesData[activeIndex].sku}
                  </span>
                </div>
              </div>

              <!-- Bottom Floating Action Button inside Stage -->
              <div class="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-20 flex items-center gap-2 pointer-events-auto">
                <a id="hero-product-link" href="${slidesData[activeIndex].link}" class="bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-xl transition-all font-bold flex items-center gap-1.5 active:scale-95 whitespace-nowrap">
                  <span>VIEW DETAILS</span>
                  <span class="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
                </a>
              </div>

              <!-- Minimal Floating Navigation Arrows -->
              <button id="hero-prev-btn" aria-label="Previous Slide" class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-safety-orange text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow">
                <span class="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <button id="hero-next-btn" aria-label="Next Slide" class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-safety-orange text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow">
                <span class="material-symbols-outlined text-lg">arrow_forward</span>
              </button>

            </div>

            <!-- Revealing Product Card Deck Peeking From Below -->
            <div class="flex flex-col gap-2">
              <div class="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar snap-x scroll-smooth pt-2.5 pb-2 px-1" id="hero-deck">
                ${slidesData.map((s, idx) => `
                  <button type="button" class="deck-card flex flex-col p-2 sm:p-2.5 rounded-xl text-left border backdrop-blur-md cursor-pointer group focus:outline-none flex-1 min-w-[135px] sm:min-w-0 snap-center ${idx === activeIndex ? 'deck-card-active' : 'deck-card-inactive'}" data-index="${idx}" aria-label="Select ${s.name}">
                    <div class="flex items-center gap-2 mb-1.5">
                      <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-black/60 border border-white/10 shrink-0">
                        <img src="${s.image}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <span class="text-[10px] font-technical-data font-bold text-safety-orange tracking-wider uppercase block truncate">${s.name}</span>
                        <span class="text-[11px] font-semibold text-white truncate block leading-tight">${s.tagline}</span>
                      </div>
                    </div>
                    <!-- Progress bar fill line -->
                    <div class="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-auto">
                      <div class="deck-progress-fill h-full bg-safety-orange rounded-full" style="width: 0%;"></div>
                    </div>
                  </button>
                `).join('')}
              </div>

              <!-- Deck Status & Play/Pause Controls Bar -->
              <div class="flex items-center justify-between gap-4 px-1 pt-1 text-xs font-technical-data text-gray-400">
                <span class="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-gray-400">
                  <span class="material-symbols-outlined text-sm text-safety-orange">touch_app</span>
                  <span>Click card to reveal series</span>
                </span>

                <div class="flex items-center gap-3 ml-auto">
                  <span id="hero-slide-num" class="text-white font-bold">0${activeIndex + 1}</span> / 0${slidesData.length}
                  <button id="hero-pause-btn" aria-label="Pause Carousel" class="text-gray-400 hover:text-white transition-colors p-1">
                    <span id="hero-pause-icon" class="material-symbols-outlined text-base">pause</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  `;

  const heroImg = document.getElementById('hero-landscape-img');
  const heroBadge = document.getElementById('hero-badge-text');
  const heroLink = document.getElementById('hero-product-link');
  const heroMainCta = document.getElementById('hero-main-cta');
  const typedTextEl = document.getElementById('animated-typed-text');
  const slideNumEl = document.getElementById('hero-slide-num');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const pauseBtn = document.getElementById('hero-pause-btn');
  const pauseIcon = document.getElementById('hero-pause-icon');
  const deckContainer = document.getElementById('hero-deck');

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

  function updateDeck(index) {
    if (!deckContainer) return;
    const cards = deckContainer.querySelectorAll('.deck-card');
    cards.forEach((card, idx) => {
      const progressBar = card.querySelector('.deck-progress-fill');
      if (idx === index) {
        card.classList.add('deck-card-active');
        card.classList.remove('deck-card-inactive');
        card.setAttribute('aria-selected', 'true');

        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          void progressBar.offsetWidth;
          if (!isPaused) {
            progressBar.style.transition = `width ${slideDuration}ms linear`;
            progressBar.style.width = '100%';
          }
        }

        if (deckContainer && window.innerWidth < 640 && deckContainer.scrollWidth > deckContainer.clientWidth) {
          const cardRect = card.getBoundingClientRect();
          const containerRect = deckContainer.getBoundingClientRect();
          const cardLeftInContainer = cardRect.left - containerRect.left + deckContainer.scrollLeft;
          const targetScrollLeft = cardLeftInContainer - (deckContainer.clientWidth / 2) + (card.offsetWidth / 2);
          deckContainer.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: 'smooth'
          });
        }
      } else {
        card.classList.remove('deck-card-active');
        card.classList.add('deck-card-inactive');
        card.setAttribute('aria-selected', 'false');

        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
        }
      }
    });
  }

  function renderSlide(index) {
    activeIndex = index;
    const s = slidesData[index];

    // Animate image transition
    if (heroImg) {
      heroImg.style.opacity = '0.35';
      heroImg.style.transform = 'scale(0.99)';
      setTimeout(() => {
        heroImg.src = s.image;
        heroImg.alt = s.title;
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';
      }, 150);
    }

    if (heroBadge) heroBadge.textContent = `${s.name} • Model: ${s.sku}`;
    if (heroLink) heroLink.href = s.link;
    if (heroMainCta) heroMainCta.href = s.link;
    if (slideNumEl) slideNumEl.textContent = `0${index + 1}`;

    typeWriterEffect(s.typedPhrase);
    updateDeck(index);
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
      const activeCard = deckContainer ? deckContainer.querySelector('.deck-card-active') : null;
      const progressBar = activeCard ? activeCard.querySelector('.deck-progress-fill') : null;

      if (isPaused) {
        if (progressBar) {
          const currentWidth = window.getComputedStyle(progressBar).width;
          progressBar.style.transition = 'none';
          progressBar.style.width = currentWidth;
        }
      } else {
        if (progressBar) {
          progressBar.style.transition = `width ${slideDuration}ms linear`;
          progressBar.style.width = '100%';
        }
      }
      resetTimer();
    });
  }

  // Card click events in deck
  if (deckContainer) {
    const cards = deckContainer.querySelectorAll('.deck-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        if (idx !== activeIndex) {
          renderSlide(idx);
        }
      });
    });
  }

  // Touch Swipe on showcase stage
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = document.getElementById('hero-showcase-stage') || container;

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

  // Initial trigger for deck animation
  updateDeck(activeIndex);
  resetTimer();
}
