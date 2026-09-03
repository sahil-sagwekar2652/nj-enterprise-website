export function initHomeCarousel() {
  const container = document.getElementById('featured-carousel-container');
  if (!container) return;

  const slidesData = [
    {
      sku: '11-16T',
      name: '11-16T Clear Cover Industrial Cabinet',
      tagline: 'Visual Inspection & Diagnostics',
      category: 'CLEAR COVER / IP67',
      description: 'Engineered with high-grade transparent polycarbonate lid for real-time monitoring of PCB indicators, digital meters, and relays in demanding industrial environments.',
      dimensions: '250 x 190 x 99 mm',
      material: 'Polycarbonate (PC) Lid / ABS Base',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-16T%20Size%20250%20x%20190%20x%2099mm.JPG',
      link: '/products/11-series/product-11-16t.html',
      badges: ['Transparent Lid', 'IP67 Ingress Rated', 'UV Stabilized']
    },
    {
      sku: '11-27',
      name: '11-27 Extra Large Instrumentation Cabinet',
      tagline: 'Maximum Capacity Automation Housing',
      category: 'HEAVY-DUTY AUTOMATION',
      description: 'Generous 318x238mm footprint tailored for complex control panels, industrial PLCs, and high-density terminal blocks with robust internal mounting bosses.',
      dimensions: '318 x 238 x 101 mm',
      material: 'Impact-Resistant Polycarbonate / ABS',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-27%20Size%20318%20x%20238%20x%20101mm.JPG',
      link: '/products/11-series/product-11-27.html',
      badges: ['Heavy-Duty Volume', 'PLC Automation Ready', 'Impact Resistant']
    },
    {
      sku: '11-14',
      name: '11-14 Flanged Wall-Mount Enclosure',
      tagline: 'External Mounting Architecture',
      category: 'WALL-MOUNT / FLANGED',
      description: 'Equipped with integrated external mounting flanges, enabling rapid surface installation without breaking the sealed internal gasket environment.',
      dimensions: '211 x 160 x 71 mm',
      material: 'High-Grade Polycarbonate',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-14%20(F10-1)%20Size%20211%20x%20160%20x%2071mm.JPG',
      link: '/products/11-series/product-11-14.html',
      badges: ['External Flanges', 'Rapid Surface Mount', 'IP67 Waterproof']
    },
    {
      sku: '11-4T',
      name: '11-4T Micro Clear Cover Sensor Unit',
      tagline: 'Compact Distributed IoT Enclosure',
      category: 'MICRO / IOT TELEMETRY',
      description: 'Ultra-compact 100x68mm enclosure designed for environmental sensor nodes, wireless telemetry transmitters, and compact monitoring circuits.',
      dimensions: '100 x 68 x 50 mm',
      material: 'Polycarbonate Clear Cover / ABS Base',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-4T%20%20(F4)%20Size%20100%20x%2068%20x%2050mm.JPG',
      link: '/products/11-series/product-11-4t.html',
      badges: ['Compact 100x68mm', 'Clear Window', 'Probe Ready']
    },
    {
      sku: '11-19T',
      name: '11-19T Deep-Profile Modular Enclosure',
      tagline: 'Deep Depth Power Control Housing',
      category: 'EXTRA-DEEP PROFILE',
      description: 'Features a substantial 155mm depth to house layered PCB stacks, power transformers, motor starters, and deep industrial switches.',
      dimensions: '250 x 360 x 155 mm',
      material: 'Transparent Polycarbonate / ABS',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-19%20T%20(2536)%20Size%20250%20x%20360%20x%20155mm.JPG',
      link: '/products/11-series/product-11-19t.html',
      badges: ['155mm Extra Depth', 'Multi-Layer PCB Stacks', 'Industrial Sealing']
    },
    {
      sku: '11-23',
      name: '11-23 High Capacity Junction Enclosure',
      tagline: 'Robust Industrial Junction Housing',
      category: 'SOLID COVER / DISTRIBUTION',
      description: 'Durable solid gray opaque enclosure engineered for harsh electrical distribution, cable junctions, and outdoor solar/utility installations.',
      dimensions: '295 x 255 x 111 mm',
      material: 'Solid Polycarbonate (RAL 7035)',
      rating: 'IP67 / NEMA 4X',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-23%20Size%20295%20x%20255%20x%20111mm.JPG',
      link: '/products/11-series/product-11-23.html',
      badges: ['Solid Gray RAL 7035', 'Solar & Utility Ready', 'Corrosion Proof']
    }
  ];

  let activeIndex = 0;
  let autoPlayInterval = null;
  const slideDuration = 5500; // 5.5 seconds per slide
  let isPaused = false;

  // Render Skeleton Markup
  container.innerHTML = `
    <div class="relative bg-deep-navy text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-700/50 overflow-hidden technical-grid">
      <!-- Decorative Backdrop Glow -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-safety-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Carousel Top Bar: Title & Category Tabs -->
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-safety-orange animate-ping"></span>
            <span class="font-label-caps text-safety-orange uppercase tracking-wider text-xs">FEATURED PRODUCT SPOTLIGHT</span>
          </div>
          <h2 class="font-headline-lg text-headline-lg text-white">Precision Enclosures in Motion</h2>
        </div>

        <!-- SKU Selector Tabs -->
        <div class="flex flex-wrap items-center gap-2" id="carousel-tabs">
          ${slidesData.map((s, idx) => `
            <button data-index="${idx}" class="carousel-tab-btn px-3.5 py-1.5 rounded-full text-xs font-technical-data transition-all duration-200 border ${idx === 0 ? 'bg-safety-orange text-white border-safety-orange font-bold shadow-md' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'}">
              ${s.sku}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Main Active Slide Display -->
      <div id="carousel-slide-viewport" class="relative z-10 py-8 md:py-12 min-h-[460px] flex items-center transition-all duration-500">
        <!-- Content will be injected dynamically -->
      </div>

      <!-- Carousel Bottom Bar: Progress Ticker, Navigation Arrows & Thumbnails Strip -->
      <div class="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <!-- Progress Bar & Indicator -->
        <div class="flex items-center gap-4 w-full sm:w-auto">
          <div class="text-xs font-technical-data text-gray-400">
            <span id="carousel-current-index" class="text-white font-bold text-sm">01</span> / 0${slidesData.length}
          </div>
          <div class="w-36 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
            <div id="carousel-progress-bar" class="h-full bg-safety-orange transition-all duration-100 ease-linear" style="width: 0%;"></div>
          </div>
        </div>

        <!-- Thumbnail Filmstrip Strip -->
        <div class="hidden lg:flex items-center gap-3" id="carousel-filmstrip">
          ${slidesData.map((s, idx) => `
            <button data-index="${idx}" title="${s.name}" class="filmstrip-thumb-btn w-12 h-12 rounded-lg p-1 border transition-all duration-200 ${idx === 0 ? 'border-safety-orange bg-white scale-110 shadow-lg' : 'border-white/20 bg-white/80 opacity-60 hover:opacity-100 hover:bg-white'}">
              <img src="${s.image}" alt="${s.sku}" class="w-full h-full object-contain mix-blend-multiply" />
            </button>
          `).join('')}
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center gap-3">
          <button id="carousel-prev-btn" aria-label="Previous Slide" class="w-11 h-11 rounded-full bg-white/10 hover:bg-safety-orange hover:text-white border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 text-white">
            <span class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button id="carousel-pause-btn" aria-label="Pause Auto-play" class="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200 text-white">
            <span id="carousel-pause-icon" class="material-symbols-outlined text-lg">pause</span>
          </button>
          <button id="carousel-next-btn" aria-label="Next Slide" class="w-11 h-11 rounded-full bg-white/10 hover:bg-safety-orange hover:text-white border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 text-white">
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const viewport = document.getElementById('carousel-slide-viewport');
  const progressBar = document.getElementById('carousel-progress-bar');
  const currentIndexEl = document.getElementById('carousel-current-index');
  const tabButtons = container.querySelectorAll('.carousel-tab-btn');
  const thumbButtons = container.querySelectorAll('.filmstrip-thumb-btn');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const pauseBtn = document.getElementById('carousel-pause-btn');
  const pauseIcon = document.getElementById('carousel-pause-icon');

  function renderSlide(index, direction = 'fade') {
    const s = slidesData[index];
    activeIndex = index;

    // Update index label & tabs & filmstrip
    currentIndexEl.textContent = `0${index + 1}`;
    tabButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.className = 'carousel-tab-btn px-3.5 py-1.5 rounded-full text-xs font-technical-data transition-all duration-200 border bg-safety-orange text-white border-safety-orange font-bold shadow-md scale-105';
      } else {
        btn.className = 'carousel-tab-btn px-3.5 py-1.5 rounded-full text-xs font-technical-data transition-all duration-200 border bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white';
      }
    });

    thumbButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.className = 'filmstrip-thumb-btn w-12 h-12 rounded-lg p-1 border transition-all duration-200 border-safety-orange bg-white scale-110 shadow-lg';
      } else {
        btn.className = 'filmstrip-thumb-btn w-12 h-12 rounded-lg p-1 border transition-all duration-200 border-white/20 bg-white/80 opacity-60 hover:opacity-100 hover:bg-white';
      }
    });

    // Animate Slide Content Out & In
    viewport.style.opacity = '0';
    viewport.style.transform = direction === 'next' ? 'translateX(20px)' : (direction === 'prev' ? 'translateX(-20px)' : 'scale(0.98)');

    setTimeout(() => {
      viewport.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <!-- Left Column: Specs & Overview -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="bg-white/10 text-safety-orange border border-safety-orange/40 font-label-caps text-label-caps px-3 py-1 rounded-full">
                ${s.category}
              </span>
              <span class="bg-white/5 text-gray-300 border border-white/10 font-label-caps text-label-caps px-3 py-1 rounded-full">
                SKU: ${s.sku}
              </span>
            </div>

            <div>
              <h3 class="font-headline-xl text-[28px] sm:text-[34px] md:text-headline-xl text-white font-extrabold leading-tight">
                ${s.name}
              </h3>
              <p class="text-safety-orange font-technical-data text-sm mt-1 font-semibold tracking-wide">
                — ${s.tagline}
              </p>
            </div>

            <p class="text-gray-300 font-body-md text-sm sm:text-base leading-relaxed max-w-2xl">
              ${s.description}
            </p>

            <!-- Technical Summary Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 border border-white/10 rounded-xl p-4 font-technical-data">
              <div>
                <span class="text-[11px] text-gray-400 block uppercase">Dimensions</span>
                <span class="text-white text-xs sm:text-sm font-semibold block mt-0.5">${s.dimensions}</span>
              </div>
              <div>
                <span class="text-[11px] text-gray-400 block uppercase">Material</span>
                <span class="text-white text-xs sm:text-sm font-semibold block mt-0.5">${s.material}</span>
              </div>
              <div>
                <span class="text-[11px] text-gray-400 block uppercase">Certifications</span>
                <span class="text-white text-xs sm:text-sm font-semibold block mt-0.5">${s.rating}</span>
              </div>
              <div>
                <span class="text-[11px] text-gray-400 block uppercase">Operating Temp</span>
                <span class="text-white text-xs sm:text-sm font-semibold block mt-0.5">${s.temp}</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="${s.link}" class="bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-label-caps px-6 py-3.5 rounded-lg flex items-center gap-2 shadow-lg shadow-safety-orange/20 transition-all duration-200 active:scale-95">
                <span>VIEW COMPLETE SPECS</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a href="${s.link}#rfq-form" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-caps text-label-caps px-5 py-3.5 rounded-lg flex items-center gap-2 transition-colors">
                <span class="material-symbols-outlined text-sm">request_quote</span>
                <span>REQUEST RFQ</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive 3D Product Stage -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md aspect-square rounded-2xl bg-white p-8 flex items-center justify-center shadow-2xl group overflow-hidden border-2 border-white/20">
              <!-- Background subtle technical concentric rings -->
              <div class="absolute inset-0 bg-radial from-slate-100 to-slate-200/60 opacity-80"></div>
              
              <!-- Floating Feature Badges -->
              <div class="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                ${s.badges.map(b => `
                  <span class="bg-deep-navy/90 backdrop-blur-sm text-white text-[10px] font-technical-data px-2.5 py-1 rounded-full shadow border border-white/20">
                    ✓ ${b}
                  </span>
                `).join('')}
              </div>

              <!-- Main Interactive Product Image -->
              <img src="${s.image}" alt="${s.name}" class="relative z-10 w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 drop-shadow-xl" />

              <a href="${s.link}" class="absolute bottom-4 right-4 z-20 bg-deep-navy hover:bg-safety-orange text-white text-xs font-label-caps px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 transition-colors">
                <span>ZOOM SKU</span>
                <span class="material-symbols-outlined text-xs">fullscreen</span>
              </a>
            </div>
          </div>
        </div>
      `;

      viewport.style.opacity = '1';
      viewport.style.transform = 'none';
      resetProgressBar();
    }, 200);
  }

  let progressStartTime = Date.now();
  let progressAnimation = null;

  function updateProgress() {
    if (isPaused) return;
    const elapsed = Date.now() - progressStartTime;
    const pct = Math.min((elapsed / slideDuration) * 100, 100);
    progressBar.style.width = `${pct}%`;

    if (elapsed >= slideDuration) {
      goToNext();
    } else {
      progressAnimation = requestAnimationFrame(updateProgress);
    }
  }

  function resetProgressBar() {
    cancelAnimationFrame(progressAnimation);
    progressBar.style.width = '0%';
    progressStartTime = Date.now();
    if (!isPaused) {
      progressAnimation = requestAnimationFrame(updateProgress);
    }
  }

  function goToNext() {
    const nextIndex = (activeIndex + 1) % slidesData.length;
    renderSlide(nextIndex, 'next');
  }

  function goToPrev() {
    const prevIndex = (activeIndex - 1 + slidesData.length) % slidesData.length;
    renderSlide(prevIndex, 'prev');
  }

  // Event Listeners
  nextBtn.addEventListener('click', () => {
    goToNext();
  });

  prevBtn.addEventListener('click', () => {
    goToPrev();
  });

  pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseIcon.textContent = isPaused ? 'play_arrow' : 'pause';
    if (!isPaused) {
      progressStartTime = Date.now() - (parseFloat(progressBar.style.width) / 100) * slideDuration;
      progressAnimation = requestAnimationFrame(updateProgress);
    } else {
      cancelAnimationFrame(progressAnimation);
    }
  });

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        renderSlide(idx, idx > activeIndex ? 'next' : 'prev');
      }
    });
  });

  thumbButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        renderSlide(idx, idx > activeIndex ? 'next' : 'prev');
      }
    });
  });

  // Pause on hover
  container.addEventListener('mouseenter', () => {
    if (!isPaused) {
      cancelAnimationFrame(progressAnimation);
    }
  });

  container.addEventListener('mouseleave', () => {
    if (!isPaused) {
      progressStartTime = Date.now() - (parseFloat(progressBar.style.width) / 100) * slideDuration;
      progressAnimation = requestAnimationFrame(updateProgress);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrev();
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      goToNext(); // Swiped left
    }
    if (touchEndX > touchStartX + 50) {
      goToPrev(); // Swiped right
    }
  }, { passive: true });

  // Initial render
  renderSlide(0);
}
