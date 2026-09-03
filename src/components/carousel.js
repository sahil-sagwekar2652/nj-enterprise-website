export function initHomeCarousel() {
  const container = document.getElementById('featured-carousel-container');
  if (!container) return;

  const slidesData = [
    {
      sku: '11-16T',
      seriesCode: '11',
      seriesName: 'Water-Proof 11 Series',
      name: '11-16T Clear Cover Industrial Cabinet',
      tagline: 'Visual Inspection & Ingress Protection',
      category: 'IP67 / NEMA 4X WATERPROOF',
      typedText: 'Extreme Weather & Monsoons',
      description: 'Engineered with transparent high-impact polycarbonate lid and continuous silicone sealing gasket. Perfect for outdoor solar inverters, pump controllers, and industrial telemetry requiring real-time visual inspection.',
      dimensions: '250 x 190 x 99 mm',
      material: 'Polycarbonate (PC) Lid / ABS Base',
      rating: 'IP67 Weatherproof',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-16T%20Size%20250%20x%20190%20x%2099mm.JPG',
      link: '/products/11-series/product-11-16t.html',
      badges: ['Transparent PC Lid', 'IP67 Waterproof', 'UV Stabilized']
    },
    {
      sku: '15-4',
      seriesCode: '15',
      seriesName: 'Plastic Cabinet 15 Series',
      name: '15-4 Sloped-Front Benchtop Instrument Cabinet',
      tagline: 'Precision Workbench & Laboratory Housings',
      category: 'BENCHTOP & INSTRUMENT CABINET',
      typedText: 'Laboratory & Test Benches',
      description: 'Features an ergonomic angled front display deck and rear ventilation louvers. Designed for clear operator viewing of multimeters, laboratory signal generators, battery test monitors, and bench power supplies.',
      dimensions: '164 x 120 x 69 mm',
      material: 'Rugged Impact-Resistant ABS',
      rating: 'Vented Benchtop',
      temp: '-20°C to +70°C',
      image: '/images/enhanced/15-4(B5)%20164x120x69.jpg',
      link: '/products/15-series/product-15-4.html',
      badges: ['Sloped Front Deck', 'Cooling Louvers', 'PCB Guide Slots']
    },
    {
      sku: '18-12',
      seriesCode: '18',
      seriesName: 'Desk-Top Enclosure 18 Series',
      name: '18-12 Large Sloped-Front Operator Console',
      tagline: 'Operator Display & Terminal Console',
      category: 'DESKTOP CONSOLE & CONTROLLER',
      typedText: 'Desktop Control Consoles',
      description: 'Expansive slanted console casing designed for operator touchpoints, weighing scale terminals, queuing token displays, and industrial machine human-machine interfaces (HMIs).',
      dimensions: '240 x 187 x 106 mm',
      material: 'Flame-Retardant ABS Chassis',
      rating: 'Ergonomic Desktop',
      temp: '-20°C to +75°C',
      image: '/images/enhanced/18-12(72)%20240x187x106.jpg',
      link: '/products/18-series/product-18-12.html',
      badges: ['Angled Operator Deck', 'Anti-Slip Foot Wells', 'HMI Overlay Ready']
    },
    {
      sku: '21-20D',
      seriesCode: '21',
      seriesName: 'Hand-Held Enclosure 21 Series',
      name: '21-20D Handheld Enclosure with Display Window',
      tagline: 'Portable Field Diagnostics & Testing',
      category: 'HANDHELD & PORTABLE CASING',
      typedText: 'Field Diagnostic Devices',
      description: 'Ergonomically contoured handheld casing with molded LCD display window and textured side grips. Ideal for portable gas detectors, digital thermometers, RFID barcode readers, and crane remotes.',
      dimensions: '180 x 100 x 40.5 mm',
      material: 'High-Impact Tough ABS',
      rating: 'Drop-Resistant Field Body',
      temp: '-20°C to +70°C',
      image: '/images/enhanced/21-20D(79A)%20size%20180x100x40.5mm.jpg',
      link: '/products/21-series/product-21-20d.html',
      badges: ['Ergonomic Contoured Grip', 'LCD Display Window', 'Battery Door Option']
    },
    {
      sku: '23-4',
      seriesCode: '23',
      seriesName: 'Standard DIN-Rail Enclosure 23 Series',
      name: '23-4 4-Module Snap-On DIN-Rail Housing',
      tagline: 'Modular Automation & Panel Packaging',
      category: 'DIN-RAIL & POWER MODULE HOUSING',
      typedText: '35mm DIN-Rail Electrical Panels',
      description: 'Standard 4-modular pitch housing with integrated snap-on DIN rail foot and tiered wire terminal connector slots. Clips directly into distribution boards alongside MCBs, timers, and relay modules.',
      dimensions: '100 x 70 x 112.6 mm',
      material: 'Flame-Retardant UL94-V0 Polycarbonate',
      rating: '35mm DIN-Rail Snap-On',
      temp: '-25°C to +80°C',
      image: '/images/enhanced/23-4(BS10-A)%20Size%20100x70x112.6mm.jpg',
      link: '/products/23-series/product-23-4.html',
      badges: ['Snap-On DIN Rail Foot', 'Tiered Terminal Slots', 'Modular PLC Ready']
    },
    {
      sku: '11-27',
      seriesCode: '11',
      seriesName: 'Water-Proof 11 Series',
      name: '11-27 Extra Large High-Capacity Enclosure',
      tagline: 'Maximum Volume Heavy-Duty Housing',
      category: 'EXTRA-LARGE IP67 ENCLOSURE',
      typedText: 'Heavy-Duty Industrial Automation',
      description: 'High-capacity 318x238mm footprint tailored for multi-tier control panels, solar string combiners, motor starter relays, and deep industrial wiring distribution in harsh outdoor conditions.',
      dimensions: '318 x 238 x 101 mm',
      material: 'Heavy-Wall ABS / Polycarbonate',
      rating: 'IP67 / NEMA 4X Sealed',
      temp: '-40°C to +80°C',
      image: '/images/enhanced/11-27%20Size%20318%20x%20238%20x%20101mm.JPG',
      link: '/products/11-series/product-11-27.html',
      badges: ['Extra-Large 318x238mm', 'Deep Mounting Bosses', 'Solar Combiner Ready']
    }
  ];

  let activeIndex = 0;
  const slideDuration = 6000; // 6 seconds per slide
  let isPaused = false;
  let typingTimeout = null;

  // Render Full-Width Screen-Wide Markup
  container.innerHTML = `
    <div class="relative w-full bg-deep-navy text-white overflow-hidden technical-grid shadow-2xl">
      <!-- Ambient Radial Glows -->
      <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-safety-orange/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Main Container Inner -->
      <div class="max-w-container-max mx-auto px-gutter py-10 md:py-14 relative z-10 flex flex-col justify-between min-h-[640px] md:min-h-[720px]">
        
        <!-- Header Banner & Animated Dynamic Headline -->
        <div class="border-b border-white/10 pb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <!-- Live Status Pill -->
            <div class="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-orange opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-safety-orange"></span>
              </span>
              <span class="text-xs font-technical-data text-white font-semibold uppercase tracking-wider">
                DIRECT INDUSTRIAL MANUFACTURER • EST. 2026
              </span>
            </div>

            <!-- Animated Typography Headline -->
            <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              <span>ENGINEERED FOR</span><br/>
              <span class="text-safety-orange inline-flex items-center">
                <span id="animated-typed-text" class="border-b-4 border-safety-orange pb-0.5">${slidesData[0].typedText}</span>
                <span id="typewriter-cursor" class="inline-block w-1.5 h-8 md:h-12 bg-safety-orange ml-2 animate-pulse"></span>
              </span>
            </h1>
          </div>

          <!-- Series Quick Selector Pills -->
          <div class="flex flex-wrap items-center gap-2" id="carousel-tabs">
            ${slidesData.map((s, idx) => `
              <button data-index="${idx}" class="carousel-tab-btn px-4 py-2 rounded-xl text-xs font-technical-data transition-all duration-200 border ${idx === 0 ? 'bg-safety-orange text-white border-safety-orange font-bold shadow-lg scale-105' : 'bg-white/5 text-gray-300 border-white/15 hover:bg-white/15 hover:text-white'}">
                ${s.sku} • Series ${s.seriesCode}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Main Slide Interactive Showcase Viewport -->
        <div id="carousel-slide-viewport" class="py-8 md:py-10 transition-all duration-500">
          <!-- Slide Content Injected Dynamically -->
        </div>

        <!-- Bottom Controller Bar -->
        <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <!-- Slide Index Counter & Progress Bar -->
          <div class="flex items-center gap-4 w-full sm:w-auto">
            <div class="text-xs font-technical-data text-gray-300">
              <span id="carousel-current-index" class="text-white font-extrabold text-base">01</span> / 0${slidesData.length}
            </div>
            <div class="w-40 sm:w-52 h-2 bg-white/15 rounded-full overflow-hidden relative shadow-inner">
              <div id="carousel-progress-bar" class="h-full bg-safety-orange transition-all duration-100 ease-linear rounded-full" style="width: 0%;"></div>
            </div>
          </div>

          <!-- Interactive Thumbnail Filmstrip Strip -->
          <div class="hidden lg:flex items-center gap-3" id="carousel-filmstrip">
            ${slidesData.map((s, idx) => `
              <button data-index="${idx}" title="${s.name}" class="filmstrip-thumb-btn w-14 h-14 rounded-xl p-1.5 border transition-all duration-200 ${idx === 0 ? 'border-safety-orange bg-white scale-110 shadow-xl' : 'border-white/20 bg-white/80 opacity-60 hover:opacity-100 hover:bg-white'}">
                <img src="${s.image}" alt="${s.sku}" class="w-full h-full object-contain mix-blend-multiply" />
              </button>
            `).join('')}
          </div>

          <!-- Navigation Controls -->
          <div class="flex items-center gap-3">
            <button id="carousel-prev-btn" aria-label="Previous Slide" class="w-12 h-12 rounded-full bg-white/10 hover:bg-safety-orange hover:text-white border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 text-white shadow">
              <span class="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button id="carousel-pause-btn" aria-label="Pause Auto-play" class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200 text-white shadow">
              <span id="carousel-pause-icon" class="material-symbols-outlined text-xl">pause</span>
            </button>
            <button id="carousel-next-btn" aria-label="Next Slide" class="w-12 h-12 rounded-full bg-white/10 hover:bg-safety-orange hover:text-white border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 text-white shadow">
              <span class="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  `;

  // Elements
  const viewport = document.getElementById('carousel-slide-viewport');
  const typedTextEl = document.getElementById('animated-typed-text');
  const currentIndexEl = document.getElementById('carousel-current-index');
  const progressBar = document.getElementById('carousel-progress-bar');
  const tabButtons = container.querySelectorAll('.carousel-tab-btn');
  const thumbButtons = container.querySelectorAll('.filmstrip-thumb-btn');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const pauseBtn = document.getElementById('carousel-pause-btn');
  const pauseIcon = document.getElementById('carousel-pause-icon');

  // Typewriter Animation Function
  function typeWriterEffect(targetText) {
    if (!typedTextEl) return;
    clearTimeout(typingTimeout);

    const currentText = typedTextEl.textContent;
    let charIndex = currentText.length;

    // Erase backward
    function erase() {
      if (charIndex > 0) {
        typedTextEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingTimeout = setTimeout(erase, 20);
      } else {
        // Start typing new
        typeNew();
      }
    }

    let newCharIndex = 0;
    function typeNew() {
      if (newCharIndex <= targetText.length) {
        typedTextEl.textContent = targetText.substring(0, newCharIndex);
        newCharIndex++;
        typingTimeout = setTimeout(typeNew, 35);
      }
    }

    erase();
  }

  // Render Slide Function
  function renderSlide(index, direction = 'fade') {
    const s = slidesData[index];
    activeIndex = index;

    // Update index & tabs & filmstrip
    if (currentIndexEl) currentIndexEl.textContent = `0${index + 1}`;
    
    // Type animated text
    typeWriterEffect(s.typedText);

    tabButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.className = 'carousel-tab-btn px-4 py-2 rounded-xl text-xs font-technical-data transition-all duration-200 border bg-safety-orange text-white border-safety-orange font-bold shadow-lg scale-105';
      } else {
        btn.className = 'carousel-tab-btn px-4 py-2 rounded-xl text-xs font-technical-data transition-all duration-200 border bg-white/5 text-gray-300 border-white/15 hover:bg-white/15 hover:text-white';
      }
    });

    thumbButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.className = 'filmstrip-thumb-btn w-14 h-14 rounded-xl p-1.5 border transition-all duration-200 border-safety-orange bg-white scale-110 shadow-xl';
      } else {
        btn.className = 'filmstrip-thumb-btn w-14 h-14 rounded-xl p-1.5 border transition-all duration-200 border-white/20 bg-white/80 opacity-60 hover:opacity-100 hover:bg-white';
      }
    });

    // Animate viewport out
    viewport.style.opacity = '0';
    viewport.style.transform = direction === 'next' ? 'translateX(25px)' : (direction === 'prev' ? 'translateX(-25px)' : 'scale(0.98)');

    setTimeout(() => {
      viewport.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <!-- Left Content Column: Specs, Badges & Actions -->
          <div class="lg:col-span-7 flex flex-col justify-between gap-5">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-safety-orange text-white text-[11px] font-technical-data px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                  ${s.category}
                </span>
                <span class="text-xs font-technical-data text-gray-300">
                  MODEL SKU: <strong class="text-white">${s.sku}</strong>
                </span>
              </div>

              <h2 class="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                ${s.name}
              </h2>
              
              <p class="font-body-md text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                ${s.description}
              </p>

              <!-- Technical Metric Badges -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 font-technical-data mb-6 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                <div class="border-r border-white/10 pr-2">
                  <span class="text-[11px] text-gray-400 block uppercase">Dimensions</span>
                  <span class="text-white text-xs sm:text-sm font-bold block mt-0.5">${s.dimensions}</span>
                </div>
                <div class="sm:border-r sm:border-white/10 sm:pr-2">
                  <span class="text-[11px] text-gray-400 block uppercase">Protection</span>
                  <span class="text-white text-xs sm:text-sm font-bold block mt-0.5">${s.rating}</span>
                </div>
                <div class="col-span-2 sm:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  <span class="text-[11px] text-gray-400 block uppercase">Material Body</span>
                  <span class="text-white text-xs sm:text-sm font-bold block mt-0.5">${s.material}</span>
                </div>
              </div>
            </div>

            <!-- Direct CTAs -->
            <div class="flex flex-wrap items-center gap-4">
              <a href="${s.link}" class="bg-safety-orange hover:bg-orange-600 text-white font-label-caps text-xs sm:text-sm px-6 py-4 rounded-xl flex items-center gap-2 shadow-xl shadow-safety-orange/20 transition-all duration-200 active:scale-95 font-bold">
                <span>EXPLORE ${s.sku} SPECIFICATIONS</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a href="${s.link}#rfq-form" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-caps text-xs sm:text-sm px-5 py-4 rounded-xl flex items-center gap-2 transition-colors font-semibold">
                <span class="material-symbols-outlined text-base">request_quote</span>
                <span>REQUEST RFQ</span>
              </a>
              <a href="https://wa.me/918976557664?text=Hi%20Shrikant%20ji,%20I%20want%20to%20inquire%20about%20model%20${s.sku}" target="_blank" rel="noopener noreferrer" class="bg-emerald-600/90 hover:bg-emerald-600 text-white font-label-caps text-xs sm:text-sm px-4 py-4 rounded-xl flex items-center gap-1.5 transition-colors shadow">
                <span class="material-symbols-outlined text-base">chat</span>
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Big Prominent 3D Product Stage -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-lg aspect-square rounded-3xl bg-white p-8 sm:p-10 flex items-center justify-center shadow-2xl group overflow-hidden border-2 border-white/20">
              <!-- Radial Gradient Backdrop -->
              <div class="absolute inset-0 bg-radial from-slate-100 to-slate-200/70 opacity-90"></div>
              
              <!-- Floating Feature Badges -->
              <div class="absolute top-4 left-4 z-20 flex flex-col gap-2">
                ${s.badges.map(b => `
                  <span class="bg-deep-navy/90 backdrop-blur-sm text-white text-[11px] font-technical-data px-3 py-1 rounded-full shadow border border-white/20 font-semibold">
                    ${b}
                  </span>
                `).join('')}
              </div>

              <!-- Main Product Image -->
              <img src="${s.image}" alt="${s.name}" class="relative z-10 w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-2xl" />

              <!-- Zoom & Series Tag -->
              <span class="absolute bottom-4 right-4 z-20 bg-deep-navy text-white text-xs font-technical-data px-3 py-1.5 rounded-lg shadow-md font-bold">
                SERIES ${s.seriesCode}
              </span>
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
    if (progressBar) progressBar.style.width = `${pct}%`;

    if (elapsed >= slideDuration) {
      goToNext();
    } else {
      progressAnimation = requestAnimationFrame(updateProgress);
    }
  }

  function resetProgressBar() {
    cancelAnimationFrame(progressAnimation);
    if (progressBar) progressBar.style.width = '0%';
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
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToNext();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToPrev();
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (pauseIcon) pauseIcon.textContent = isPaused ? 'play_arrow' : 'pause';
      if (!isPaused) {
        progressStartTime = Date.now() - (parseFloat(progressBar.style.width) / 100) * slideDuration;
        progressAnimation = requestAnimationFrame(updateProgress);
      } else {
        cancelAnimationFrame(progressAnimation);
      }
    });
  }

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
