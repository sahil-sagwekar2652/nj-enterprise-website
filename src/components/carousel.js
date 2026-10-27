export function initHomeCarousel() {
  const container = document.getElementById('featured-carousel-container');
  if (!container) return;

  const slidesData = [
    {
      id: 'slide-1',
      division: 'Pipes & Fittings',
      family: 'Electrofusion Fittings',
      typedPhrase: 'HDPE Pipes &\nFittings',
      badge: 'PE100 • SDR11',
      name: 'Electrofusion Coupler',
      spec: 'Range: 20mm to 630mm • PN16 Water & Gas',
      standards: 'IS 8360 / ISO 4427',
      image: '/images/fittings/electrofusion/coupler.png',
      imageAlt: 'PlastoGuard Electrofusion Coupler Range 20mm to 630mm',
      link: '/pipes-and-fittings/electrofusion/index.html',
      ctaText: 'Explore Range',
      isFitting: true
    },
    {
      id: 'slide-2',
      division: 'Precision Enclosures',
      family: 'Indian Series',
      typedPhrase: 'Precision Electronic Enclosures',
      badge: 'ABS / PC • IP65',
      name: 'NJ-48-01 DIN Instrument Case',
      spec: 'Flame-Retardant ABS • Panel Meters & Controls',
      standards: 'DIN 43700 Standard',
      image: '/images/hero/hero_indian_series.jpg',
      imageAlt: 'PlastoGuard Indian Series NJ-48-01 DIN Instrument Case',
      link: '/products/indian-series/product-nj-48-01.html',
      ctaText: 'View Details',
      isFitting: false
    },
    {
      id: 'slide-3',
      division: 'Pipes & Fittings',
      family: 'Butt Fusion Fittings',
      typedPhrase: 'HDPE Pipes &\nFittings',
      badge: 'Long Spigot • PN16',
      name: 'Long Spigot 90° Bend',
      spec: 'Range: 63mm to 630mm • SDR11 / SDR17',
      standards: 'Virgin PE100 Resin',
      image: '/images/fittings/butt-fusion/long-bend.png',
      imageAlt: 'PlastoGuard Butt Fusion 90 Degree Long Spigot Bend',
      link: '/pipes-and-fittings/butt-fusion/index.html',
      ctaText: 'Explore Range',
      isFitting: true
    },
    {
      id: 'slide-4',
      division: 'Precision Enclosures',
      family: '11 Series',
      typedPhrase: 'Precision Electronic Enclosures',
      badge: 'NEMA 4X • IP65',
      name: '11-16T Sealed Enclosure',
      spec: 'Continuous Silicone Gasket • Outdoor Telemetry & Solar',
      standards: 'UV Stabilized Virgin PC',
      image: '/images/hero/hero_11_series.jpg',
      imageAlt: 'PlastoGuard 11 Series Weatherproof Enclosure',
      link: '/products/11-series/index.html',
      ctaText: 'View Details',
      isFitting: false
    },
    {
      id: 'slide-5',
      division: 'Pipes & Fittings',
      family: 'Flanges & Backing Rings',
      typedPhrase: 'HDPE Pipes &\nFittings',
      badge: 'DIN & ANSI • PN16',
      name: 'Steel-Reinforced PP Flange',
      spec: 'Range: 20mm to 1600mm • Class 150#',
      standards: 'Encapsulated Steel Core',
      image: '/images/fittings/flanges/steel-reinforced.png',
      imageAlt: 'PlastoGuard Steel Reinforced Polypropylene Flange Adapter',
      link: '/pipes-and-fittings/flanges/index.html',
      ctaText: 'Explore Range',
      isFitting: true
    },
    {
      id: 'slide-6',
      division: 'Precision Enclosures',
      family: '18 Series',
      typedPhrase: 'Precision Electronic Enclosures',
      badge: 'Sloped • Dual Bezel',
      name: '18-4 Ergonomic Sloped Console',
      spec: 'Ergonomic Desk Console • HMI & Machine Controls',
      standards: 'Flame Retardant ABS',
      image: '/images/hero/hero_18_series.jpg',
      imageAlt: 'PlastoGuard 18 Series Ergonomic Desktop Console',
      link: '/products/18-series/product-18-4.html',
      ctaText: 'View Details',
      isFitting: false
    },
    {
      id: 'slide-7',
      division: 'Pipes & Fittings',
      family: 'Fabricated Fittings',
      typedPhrase: 'HDPE Pipes &\nFittings',
      badge: 'Segmented • IS 8360',
      name: 'Segmented Branch Tee',
      spec: 'Range: 110mm to 630mm (Custom to 1600mm)',
      standards: 'IS 8360 Part 1-3 Certified',
      image: '/images/fittings/fabricated/fabricated-tees.png',
      imageAlt: 'PlastoGuard Segmented Fabricated HDPE Equal and Reducing Tee',
      link: '/pipes-and-fittings/fabricated/index.html',
      ctaText: 'Explore Range',
      isFitting: true
    },
    {
      id: 'slide-8',
      division: 'Precision Enclosures',
      family: '23 Series',
      typedPhrase: 'Precision Electronic Enclosures',
      badge: '35mm DIN • UL94-V0',
      name: '23-119 DIN-Rail Module',
      spec: 'Ventilated Electrical Cabinet Housing',
      standards: 'Self-Extinguishing Polycarbonate',
      image: '/images/hero/hero_23_series.jpg',
      imageAlt: 'PlastoGuard 23 Series Modular DIN-Rail Housing',
      link: '/products/23-series/product-23-119.html',
      ctaText: 'View Details',
      isFitting: false
    }
  ];

  let activeIndex = 0;
  const slideDuration = 5500;
  let isPaused = false;
  let timer = null;

  // Preload all slide images
  slidesData.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
  });

  container.innerHTML = `
    <style>
      .coverflow-slide {
        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease;
        will-change: transform, opacity;
      }
      .coverflow-center {
        z-index: 30;
        opacity: 1;
        cursor: default;
        filter: brightness(1);
        box-shadow: 0 25px 50px -12px rgba(2, 6, 23, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.16);
      }
      .coverflow-flank {
        z-index: 10;
        opacity: 0.65;
        cursor: pointer;
        filter: brightness(0.75);
      }
      .coverflow-flank:hover {
        opacity: 0.95;
        filter: brightness(0.95);
      }
      .coverflow-hidden {
        z-index: 0;
        opacity: 0;
        pointer-events: none;
      }
    </style>

    <div class="relative w-full bg-[#080d15] text-white py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-cad-blue/20">
      <!-- Subtle ambient radial grid backdrop -->
      <div class="absolute inset-0 bg-radial from-slate-900/60 via-[#080d15] to-[#080d15] pointer-events-none"></div>

      <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- 2-Column Split Hero Layout: Left (Text & Value Prop & CTAs) | Right (Open 3D Slideshow) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          <!-- LEFT COLUMN: Brand Narrative, Value Prop, Dual CTAs & Specs (5 cols on lg) -->
          <div class="lg:col-span-5 flex flex-col justify-center text-left relative z-20 pointer-events-auto">
            <div class="inline-flex items-center gap-2 mb-3 sm:mb-4 text-xs font-technical-data tracking-widest text-safety-orange uppercase font-bold w-fit">
              <span class="w-2 h-2 rounded-full bg-safety-orange animate-ping"></span>
              <span>PlastoGuard Industries</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              <span class="block text-slate-100">Engineered for</span>
              <span class="block text-safety-orange font-black mt-1 min-h-[2.4em] leading-[1.15]">
                <span id="animated-typed-text" class="whitespace-pre-line underline decoration-safety-orange/40">${slidesData[activeIndex].typedPhrase}</span>
                <span id="typewriter-cursor" class="inline-block w-1.5 h-[0.85em] bg-safety-orange ml-1.5 align-baseline animate-pulse no-underline"></span>
              </span>
            </h1>

            <p class="text-sm sm:text-base text-slate-300 font-body-md leading-relaxed mt-4 sm:mt-5 max-w-xl">
              PlastoGuard manufactures heavy-duty certified PE100 piping systems alongside IP65/IP67 precision electronic enclosures for India's most critical industrial infrastructure, telemetry, and automation nodes.
            </p>

            <!-- Dual Primary CTAs (Pipes & Fittings + Enclosures) -->
            <div class="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
              <a href="/pipes-and-fittings/index.html" class="inline-flex items-center gap-2 bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-xl shadow-safety-orange/20 transition-all font-bold active:scale-95 whitespace-nowrap">
                <span>PIPES & FITTINGS</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a href="/catalog.html" class="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white border border-cad-blue/40 font-label-caps text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all font-bold backdrop-blur-md whitespace-nowrap">
                <span>ENCLOSURE SERIES</span>
                <svg class="w-4 h-4 text-safety-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <!-- Custom RFQ Quick Link -->
            <div class="mt-4">
              <a href="/custom-rfq.html" class="inline-flex items-center gap-2 text-xs font-technical-data font-semibold text-slate-400 hover:text-safety-orange transition-colors">
                <svg class="w-3.5 h-3.5 text-safety-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Custom Cutouts, Silk-Screening & Fast Project RFQ →</span>
              </a>
            </div>

            <!-- Spec Metric Bar (3 Engineering Pillars) -->
            <div class="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-slate-400 font-technical-data text-xs">
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">PN6 – PN16</span>
                <span class="text-slate-400 text-xs">PE100 SDR11/17</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">IP65 / IP67</span>
                <span class="text-slate-400 text-xs">Weatherproof PC/ABS</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-bold font-headline-md text-base sm:text-lg">100% Direct</span>
                <span class="text-slate-400 text-xs">OEM Custom Tooling</span>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Open 3D Peeking Slideshow (7 cols on lg) -->
          <div class="lg:col-span-7 flex flex-col justify-center w-full min-w-0">
            
            <!-- Top Minimal Hairline Rule for Slideshow (Matching reference mock) -->
            <div class="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-technical-data text-slate-400 mb-4 sm:mb-6">
              <div class="flex items-center gap-2.5">
                <span class="text-xs sm:text-sm font-bold tracking-wider text-white uppercase font-headline-md">
                  Featured Manufacturing Range
                </span>
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span class="hidden sm:inline-block text-xs text-slate-400 truncate">
                  Pipes & Enclosures
                </span>
              </div>

              <div class="flex items-center gap-2 font-technical-data text-xs sm:text-sm flex-shrink-0">
                <span id="coverflow-num" class="text-safety-orange font-bold text-base">01</span>
                <span class="text-slate-500">/</span>
                <span class="text-slate-400 font-semibold">08</span>
              </div>
            </div>

            <!-- Open 3D Peeking Carousel Stage -->
            <div class="relative w-full h-[390px] sm:h-[440px] md:h-[460px] lg:h-[480px] xl:h-[500px] flex items-center justify-center overflow-visible" id="coverflow-stage">
              
              <!-- Floating Chevrons (Translucent circles matching reference mock) -->
              <button
                type="button"
                id="coverflow-prev-btn"
                aria-label="Previous product"
                class="absolute left-1 sm:left-3 md:left-[calc(50%-205px)] lg:left-[calc(50%-195px)] xl:left-[calc(50%-210px)] top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-safety-orange text-white border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                id="coverflow-next-btn"
                aria-label="Next product"
                class="absolute right-1 sm:right-3 md:right-[calc(50%-205px)] lg:right-[calc(50%-195px)] xl:right-[calc(50%-210px)] top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-safety-orange text-white border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <!-- The Slide Cards Array -->
              ${slidesData.map((s, idx) => `
                <div
                  class="coverflow-slide absolute top-1/2 left-1/2 w-[82vw] sm:w-[320px] md:w-[350px] lg:w-[360px] xl:w-[380px] h-[360px] sm:h-[400px] md:h-[430px] lg:h-[450px] xl:h-[470px] rounded-3xl overflow-hidden group select-none ${
                    idx === 0 ? 'coverflow-center' : 'coverflow-hidden'
                  }"
                  data-index="${idx}">
                  
                  <!-- Card Background Visual -->
                  <div class="relative w-full h-full overflow-hidden ${s.isFitting ? 'bg-gradient-to-b from-white to-slate-100' : 'bg-slate-950'}">
                    <img
                      src="${s.image}"
                      alt="${s.imageAlt}"
                      fetchpriority="${idx === 0 ? 'high' : 'low'}"
                      loading="${idx < 3 ? 'eager' : 'lazy'}"
                      decoding="async"
                      class="w-full h-full ${s.isFitting ? 'object-contain p-6 sm:p-8 filter drop-shadow-xl' : 'object-cover object-center filter drop-shadow-2xl'} transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <!-- Vignette Gradient Scrim for crisp typographic legibility -->
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none"></div>

                    <!-- Floating Top Pill on Card -->
                    <div class="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none">
                      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-technical-data font-bold backdrop-blur-md border ${
                        s.isFitting
                          ? 'bg-slate-950/80 text-safety-orange border-safety-orange/40'
                          : 'bg-slate-950/80 text-cyan-400 border-cyan-400/40'
                      }">
                        <span class="w-1.5 h-1.5 rounded-full ${s.isFitting ? 'bg-safety-orange' : 'bg-cyan-400'}"></span>
                        <span>${s.division}</span>
                      </span>
                    </div>

                    <!-- Floating Top Right Badge -->
                    <div class="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 pointer-events-none">
                      <span class="inline-flex items-center text-xs font-technical-data font-semibold bg-black/60 text-slate-200 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-md">
                        ${s.badge}
                      </span>
                    </div>

                    <!-- Lower Card Content Strip -->
                    <div class="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 flex flex-col justify-end text-left pointer-events-auto">
                      <span class="text-xs font-technical-data font-bold tracking-wider text-slate-400 uppercase">
                        ${s.family}
                      </span>

                      <h3 class="font-headline-lg text-lg sm:text-xl md:text-2xl font-extrabold text-white mt-1 leading-tight tracking-tight drop-shadow-md">
                        ${s.name}
                      </h3>

                      <p class="text-xs text-slate-300 font-technical-data mt-1 line-clamp-1 drop-shadow-sm">
                        ${s.spec}
                      </p>

                      <div class="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between">
                        <a
                          href="${s.link}"
                          class="inline-flex items-center gap-2 bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-xs px-4 py-2 rounded-xl font-bold shadow-lg shadow-safety-orange/20 transition-all active:scale-95 whitespace-nowrap">
                          <span>${s.ctaText}</span>
                          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>

                        <span class="text-xs text-slate-400 font-technical-data hidden sm:inline">
                          ${s.standards}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              `).join('')}

            </div>

            <!-- Minimal Pagination Capsule Indicators (Matching reference mock) -->
            <div class="flex items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-6" id="coverflow-dots">
              ${slidesData.map((_, idx) => `
                <button
                  type="button"
                  class="coverflow-dot h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === 0 ? 'w-8 bg-safety-orange' : 'w-2 bg-white/25 hover:bg-white/50'
                  }"
                  data-index="${idx}"
                  aria-label="Jump to slide ${idx + 1}"></button>
              `).join('')}
            </div>

          </div>

        </div>

      </div>
    </div>
  `;

  const stage = document.getElementById('coverflow-stage');
  const slideEls = container.querySelectorAll('.coverflow-slide');
  const dotEls = container.querySelectorAll('.coverflow-dot');
  const numEl = document.getElementById('coverflow-num');
  const prevBtn = document.getElementById('coverflow-prev-btn');
  const nextBtn = document.getElementById('coverflow-next-btn');
  const typedTextEl = document.getElementById('animated-typed-text');
  let typingTimeout = null;

  function typeWriterEffect(targetText) {
    if (!typedTextEl) return;
    clearTimeout(typingTimeout);

    const currentText = typedTextEl.textContent;
    if (currentText === targetText) return;

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

  function getStepOffset() {
    const width = window.innerWidth;
    if (width >= 1280) return 250;
    if (width >= 1024) return 215;
    if (width >= 768) return 195;
    return width * 0.52;
  }

  function updateCoverflow(newIndex) {
    activeIndex = (newIndex + slidesData.length) % slidesData.length;
    const step = getStepOffset();
    const total = slidesData.length;
    const half = Math.floor(total / 2);

    slideEls.forEach((el, idx) => {
      let offset = idx - activeIndex;
      while (offset > half) offset -= total;
      while (offset < -half) offset += total;

      el.classList.remove('coverflow-center', 'coverflow-flank', 'coverflow-hidden');

      if (offset === 0) {
        // Active Center Slide
        el.classList.add('coverflow-center');
        el.style.transform = 'translate(-50%, -50%) scale(1)';
        el.style.zIndex = '30';
        el.setAttribute('aria-hidden', 'false');
      } else if (offset === -1) {
        // Left Flanking Peeking Slide (Sits under/behind Left Text Column)
        el.classList.add('coverflow-flank');
        el.style.transform = `translate(calc(-50% - ${step}px), -50%) scale(0.86)`;
        el.style.zIndex = '10';
        el.setAttribute('aria-hidden', 'true');
      } else if (offset === 1) {
        // Right Flanking Peeking Slide
        el.classList.add('coverflow-flank');
        el.style.transform = `translate(calc(-50% + ${step}px), -50%) scale(0.86)`;
        el.style.zIndex = '10';
        el.setAttribute('aria-hidden', 'true');
      } else {
        // Hidden Slide
        el.classList.add('coverflow-hidden');
        const sign = Math.sign(offset) || 1;
        el.style.transform = `translate(calc(-50% + ${sign * (step * 1.5)}px), -50%) scale(0.7)`;
        el.style.zIndex = '0';
        el.setAttribute('aria-hidden', 'true');
      }
    });

    // Update Numerical Counter
    if (numEl) {
      numEl.textContent = `0${activeIndex + 1}`;
    }

    // Update Pagination Dots
    dotEls.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.className = 'coverflow-dot h-1.5 rounded-full transition-all duration-300 cursor-pointer w-8 bg-safety-orange';
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.className = 'coverflow-dot h-1.5 rounded-full transition-all duration-300 cursor-pointer w-2 bg-white/25 hover:bg-white/50';
        dot.setAttribute('aria-current', 'false');
      }
    });

    // Update Typewriter Headline (one for pipes & fittings, one for enclosures)
    if (typedTextEl && slidesData[activeIndex]) {
      typeWriterEffect(slidesData[activeIndex].typedPhrase);
    }
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    if (!isPaused) {
      timer = setInterval(() => {
        updateCoverflow(activeIndex + 1);
      }, slideDuration);
    }
  }

  // Next / Prev Button Clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCoverflow(activeIndex + 1);
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCoverflow(activeIndex - 1);
      resetTimer();
    });
  }

  // Card click triggers (Clicking flanking card moves it into center)
  slideEls.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      const idx = parseInt(card.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        e.preventDefault();
        updateCoverflow(idx);
        resetTimer();
      }
    });
  });

  // Dot clicks
  dotEls.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      updateCoverflow(idx);
      resetTimer();
    });
  });

  // Touch swipe support
  if (stage) {
    let touchStartX = 0;
    let touchEndX = 0;

    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) {
        updateCoverflow(activeIndex + 1);
        resetTimer();
      } else if (touchEndX > touchStartX + 40) {
        updateCoverflow(activeIndex - 1);
        resetTimer();
      }
    }, { passive: true });

    // Pause on hover
    stage.addEventListener('mouseenter', () => {
      isPaused = true;
      if (timer) clearInterval(timer);
    });
    stage.addEventListener('mouseleave', () => {
      isPaused = false;
      resetTimer();
    });
  }

  // Recalculate on window resize
  window.addEventListener('resize', () => {
    updateCoverflow(activeIndex);
  });

  // Initial trigger
  updateCoverflow(0);
  resetTimer();
}
