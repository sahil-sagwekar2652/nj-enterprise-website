/**
 * Pipes & Fittings Division Interactive Carousel Component
 * Provides an architectural, high-contrast panoramic console
 * showcasing PlastoGuard's 4 core piping & fitting product families.
 */

export const pipeFamilies = [
  {
    id: 'electrofusion',
    index: '01',
    tabLabel: 'Electro Fusion',
    rangeLabel: '20–630mm',
    name: 'Electro Fusion Fittings',
    tagline: 'Socket Fusion with Integral Heating Wire Coils',
    sizeRange: '20 mm to 630 mm',
    pressureRating: 'SDR 11 (PN16) & SDR 17 (PN10)',
    standards: 'IS 14885 • ISO 4427 • EN 12201',
    material: '100% Virgin PE100 with Embedded Copper Coils',
    description: 'Engineered for high-integrity municipal gas utilities, industrial chemicals, and potable water distribution. Barcoded resistance terminals allow automated fusion recording and void-free, pressure-tight bonding.',
    primaryImage: '/images/fittings/electrofusion/overview-family.png',
    primaryImageAlt: 'PlastoGuard Electro Fusion HDPE Fittings Family',
    badge: 'IS 14885 & ISO 4427',
    catalogLink: '/pipes-and-fittings/electrofusion/index.html',
    keyItems: [
      { name: 'Couplers (20–630mm)', icon: 'adjust' },
      { name: '90° & 45° Elbows', icon: 'turn_right' },
      { name: 'Equal & Reducing Tees', icon: 'call_split' },
      { name: 'Branch Tapping Saddles', icon: 'alt_route' }
    ],
    thumbs: [
      { name: 'Coupler', src: '/images/fittings/electrofusion/coupler.png' },
      { name: '90° Elbow', src: '/images/fittings/electrofusion/bend-90.png' },
      { name: 'Branch Saddle', src: '/images/fittings/electrofusion/tapping-saddle.png' }
    ]
  },
  {
    id: 'butt-fusion',
    index: '02',
    tabLabel: 'Butt Fusion',
    rangeLabel: 'Up to 1200mm',
    name: 'Butt Fusion Spigot Fittings',
    tagline: 'Short & Long Spigot Injection-Molded Fittings',
    sizeRange: '20 mm to 1200 mm',
    pressureRating: 'PN6, PN10, PN16 (SDR11, SDR13.5, SDR17, SDR21)',
    standards: 'ISO 4427 • DIN 16963',
    material: 'High-Density Virgin PE80 & PE100 Resin',
    description: 'Precision molded spigot fittings engineered for direct thermal butt fusion in trench pipelines. Long spigot variants accommodate electrofusion couplers, while short spigots deliver ultra-compact field installations.',
    primaryImage: '/images/fittings/butt-fusion/long-flange-adapter.png',
    primaryImageAlt: 'PlastoGuard Molded Butt Fusion Spigot HDPE Fittings',
    badge: 'Short & Long Spigot',
    catalogLink: '/pipes-and-fittings/butt-fusion/index.html',
    keyItems: [
      { name: 'Stub Flanges (Up to 1200mm)', icon: 'donut_large' },
      { name: 'Molded 90° & 45° Bends', icon: 'turn_right' },
      { name: 'Concentric & Eccentric Reducers', icon: 'filter_alt' },
      { name: 'Molded 4-Way Crosses', icon: 'alt_route' }
    ],
    thumbs: [
      { name: 'Stub Flange', src: '/images/fittings/butt-fusion/short-stub-flange.png' },
      { name: '90° Bend', src: '/images/fittings/butt-fusion/short-bend-90.png' },
      { name: 'Equal Tee', src: '/images/fittings/butt-fusion/long-tee-equal.png' }
    ]
  },
  {
    id: 'flanges',
    index: '03',
    tabLabel: 'Flanges & Rings',
    rangeLabel: '20–1600mm',
    name: 'Flanges & Backing Rings',
    tagline: 'Steel-Reinforced Encapsulated & Metallic Backing Rings',
    sizeRange: '20 mm to 1600 mm (0.5" to 64")',
    pressureRating: 'PN10, PN16, ANSI Class 150#',
    standards: 'DIN 2501/2576/2577 • ANSI B16.5 • BS10 Table D/E',
    material: 'Polymer Encapsulated Carbon Steel & SS304/316',
    description: 'Robust flanged transition connections for pumps, isolation valves, and pipeline junctions. Encapsulated steel core prevents galvanic corrosion and chemical exposure across aggressive fluid transport lines.',
    primaryImage: '/images/fittings/flanges/steel-reinforced.png',
    primaryImageAlt: 'PlastoGuard Steel Reinforced Flanges and Backing Rings',
    badge: 'DIN & ANSI Compliant',
    catalogLink: '/pipes-and-fittings/flanges/index.html',
    keyItems: [
      { name: 'Steel-Reinforced Slip-On Flanges', icon: 'shield' },
      { name: 'PE & Carbon Steel Blind Flanges', icon: 'block' },
      { name: 'Galvanized & SS Backing Rings', icon: 'donut_small' },
      { name: 'Butterfly Valve Spacers', icon: 'swap_horizontal_circle' }
    ],
    thumbs: [
      { name: 'Reinforced Flange', src: '/images/fittings/flanges/steel-reinforced.png' },
      { name: 'Blind Flange', src: '/images/fittings/flanges/blind-flange.png' },
      { name: 'Valve Spacer', src: '/images/fittings/flanges/butterfly-valve-spacer.png' }
    ]
  },
  {
    id: 'fabricated',
    index: '04',
    tabLabel: 'Fabricated Fittings',
    rangeLabel: 'IS 8360 Certified',
    name: 'Fabricated Pipe Fittings',
    tagline: 'Custom Segmented Mitered Bends & Branch Tees',
    sizeRange: '20 mm to 630 mm (Custom up to 1600mm)',
    pressureRating: 'PN6, PN10, PN16',
    standards: 'IS 8360 Part 2 & 3 • ISO 4427 Part 3',
    material: 'Computerized Factory Multi-Angle Fused PE100',
    description: 'Factory-welded segmented bends and branch manifolds produced on automatic multi-angle fusion machines. Custom angle fabrication (22.5°, 45°, 60°, 90°) with $R = 1.0D$ and $R = 1.5D$ radii per engineer specifications.',
    primaryImage: '/images/fittings/fabricated/fabricated-bends.png',
    primaryImageAlt: 'PlastoGuard IS 8360 Fabricated Segmented HDPE Bends',
    badge: 'IS 8360 Certified',
    catalogLink: '/pipes-and-fittings/fabricated/index.html',
    keyItems: [
      { name: '2, 3 & 4-Piece Segmented Bends', icon: 'rotate_90_degrees_ccw' },
      { name: '22.5°, 45°, 60° & 90° Angles', icon: 'architecture' },
      { name: 'Fabricated Equal & Reducing Tees', icon: 'call_split' },
      { name: 'Air Valve & Scour Manifolds', icon: 'hardware' }
    ],
    thumbs: [
      { name: 'Segmented Bend', src: '/images/fittings/fabricated/fabricated-bends.png' },
      { name: 'Fabricated Tee', src: '/images/fittings/fabricated/fabricated-tees.png' }
    ]
  }
];

export function initPipesCarousel() {
  const container = document.getElementById('pipes-carousel-container');
  if (!container) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 6500;

  // Render Base Shell
  container.innerHTML = `
    <div class="relative w-full bg-deep-navy text-white rounded-3xl border-2 border-cad-blue/30 shadow-2xl overflow-hidden technical-grid group/console">
      <!-- Top Architectural Command Bar -->
      <div class="px-6 sm:px-8 py-4 sm:py-5 border-b border-cad-blue/30 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/70 backdrop-blur-md">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="w-3 h-3 rounded-full bg-safety-orange shadow-[0_0_12px_rgba(249,115,22,0.8)]"></div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs sm:text-sm font-technical-data font-bold tracking-wider uppercase text-white">
                HDPE Pipes, Fittings & Flanges Division
              </span>
              <span class="text-[10px] font-technical-data font-bold bg-safety-orange/20 text-safety-orange border border-safety-orange/40 px-2 py-0.5 rounded uppercase">
                PE100 / PE80 Direct Factory Tooling
              </span>
            </div>
            <p class="text-[11px] font-technical-data text-slate-400 mt-0.5">
              Infrastructure Pipeline Systems • Potable Water, Gas & Chemical Transmission
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 self-end md:self-auto">
          <a href="/pipes-and-fittings/index.html" class="inline-flex items-center gap-1.5 text-xs font-technical-data font-bold text-safety-orange hover:text-white hover:underline transition-colors py-1 px-2.5 rounded-lg border border-safety-orange/30 hover:border-safety-orange bg-safety-orange/10">
            <span>Division Master Hub</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      <!-- Category Filter Tabs Bar (Interactive Pill Navigation) -->
      <div class="px-4 sm:px-8 pt-4 pb-2 border-b border-cad-blue/20 bg-slate-900/60 overflow-x-auto no-scrollbar">
        <div class="flex items-center gap-2 min-w-max" id="pipes-tabs-nav" role="tablist">
          ${pipeFamilies.map((fam, idx) => `
            <button
              type="button"
              role="tab"
              aria-selected="${idx === 0 ? 'true' : 'false'}"
              data-index="${idx}"
              class="pipe-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-technical-data font-semibold transition-all duration-200 ${
                idx === 0
                  ? 'bg-safety-orange text-white shadow-lg shadow-safety-orange/25 font-bold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-cad-blue/30'
              }">
              <span class="text-[10px] opacity-75 font-mono">${fam.index}</span>
              <span>${fam.tabLabel}</span>
              <span class="text-[10px] py-0.5 px-1.5 rounded ${
                idx === 0 ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }">${fam.rangeLabel}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Main Interactive Slide Stage -->
      <div class="p-6 sm:p-8 lg:p-10 relative min-h-[500px] flex items-center" id="pipes-slide-viewport">
        <div id="pipes-slide-content" class="w-full transition-opacity duration-300">
          <!-- Dynamic Content Rendered Here via JS -->
        </div>

        <!-- Carousel Prev / Next Chevron Navigation -->
        <button
          type="button"
          id="pipes-prev-btn"
          aria-label="Previous pipe fitting category"
          class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-safety-orange border border-cad-blue/40 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none">
          <span class="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
        </button>
        <button
          type="button"
          id="pipes-next-btn"
          aria-label="Next pipe fitting category"
          class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-safety-orange border border-cad-blue/40 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none">
          <span class="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
        </button>
      </div>

      <!-- Console Footer Bar: Pagination Dots, Quick Spec Bar & Action Strip -->
      <div class="px-6 sm:px-8 py-4 border-t border-cad-blue/30 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical-data">
        <!-- Pagination Dots -->
        <div class="flex items-center gap-2" id="pipes-dots-nav">
          ${pipeFamilies.map((fam, idx) => `
            <button
              type="button"
              data-index="${idx}"
              aria-label="Jump to ${fam.name}"
              class="pipe-dot w-7 h-2 rounded-full transition-all duration-200 ${
                idx === 0 ? 'bg-safety-orange w-10 shadow-sm shadow-safety-orange/50' : 'bg-slate-700 hover:bg-slate-500'
              }"></button>
          `).join('')}
        </div>

        <!-- Quick Summary Metrics -->
        <div class="flex items-center gap-4 text-slate-400 text-[11px] flex-wrap justify-center sm:justify-end">
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-safety-orange text-sm">verified</span>
            <span>IS 8360 / ISO 4427 / EN 12201</span>
          </span>
          <span class="hidden md:inline text-slate-600">|</span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-safety-orange text-sm">precision_manufacturing</span>
            <span>Tooling Range: 20mm to 1600mm</span>
          </span>
          <span class="hidden md:inline text-slate-600">|</span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-safety-orange text-sm">local_shipping</span>
            <span>Direct Dispatch Across India</span>
          </span>
        </div>
      </div>
    </div>
  `;

  const slideContentEl = document.getElementById('pipes-slide-content');
  const tabsNavEl = document.getElementById('pipes-tabs-nav');
  const dotsNavEl = document.getElementById('pipes-dots-nav');
  const prevBtn = document.getElementById('pipes-prev-btn');
  const nextBtn = document.getElementById('pipes-next-btn');

  function renderSlide(index) {
    const fam = pipeFamilies[index];
    if (!fam || !slideContentEl) return;

    // Fade out briefly
    slideContentEl.style.opacity = '0';

    setTimeout(() => {
      slideContentEl.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <!-- Left Column: Rich Technical Details & Actions -->
          <div class="lg:col-span-7 flex flex-col justify-between">
            <div>
              <!-- Header Badges -->
              <div class="flex items-center gap-2.5 mb-3 flex-wrap">
                <span class="inline-flex items-center gap-1.5 bg-safety-orange text-white text-[10px] font-technical-data font-bold px-2.5 py-1 rounded tracking-widest uppercase shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                  FAMILY ${fam.index} / 04
                </span>
                <span class="inline-flex items-center gap-1 text-[10px] font-technical-data font-bold text-safety-orange bg-safety-orange/10 border border-safety-orange/30 px-2.5 py-1 rounded tracking-wider uppercase">
                  <span class="material-symbols-outlined text-[13px]">verified</span>
                  ${fam.badge}
                </span>
              </div>

              <!-- Main Title & Tagline -->
              <h3 class="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight">
                ${fam.name}
              </h3>
              <p class="font-technical-data text-xs sm:text-sm text-safety-orange font-semibold mb-3">
                ${fam.tagline}
              </p>
              <p class="font-body-md text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">
                ${fam.description}
              </p>

              <!-- Technical Parameter Spec Matrix (4-card Grid) -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                <div class="bg-surface/5 border border-cad-blue/30 rounded-xl p-3">
                  <span class="block text-[10px] font-technical-data text-slate-400 uppercase tracking-wider">Size Range</span>
                  <span class="block text-xs sm:text-sm font-bold text-white font-technical-data mt-0.5">${fam.sizeRange}</span>
                </div>
                <div class="bg-surface/5 border border-cad-blue/30 rounded-xl p-3">
                  <span class="block text-[10px] font-technical-data text-slate-400 uppercase tracking-wider">Pressure / SDR</span>
                  <span class="block text-xs sm:text-sm font-bold text-white font-technical-data mt-0.5 truncate" title="${fam.pressureRating}">${fam.pressureRating}</span>
                </div>
                <div class="bg-surface/5 border border-cad-blue/30 rounded-xl p-3">
                  <span class="block text-[10px] font-technical-data text-slate-400 uppercase tracking-wider">Standards</span>
                  <span class="block text-xs sm:text-sm font-bold text-white font-technical-data mt-0.5 truncate" title="${fam.standards}">${fam.standards}</span>
                </div>
                <div class="bg-surface/5 border border-cad-blue/30 rounded-xl p-3">
                  <span class="block text-[10px] font-technical-data text-slate-400 uppercase tracking-wider">Polymer Base</span>
                  <span class="block text-xs sm:text-sm font-bold text-white font-technical-data mt-0.5 truncate" title="${fam.material}">${fam.material}</span>
                </div>
              </div>

              <!-- Top Products Checklist in this Family -->
              <div class="mb-6">
                <span class="block text-[11px] font-technical-data font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Key Products in this Range:
                </span>
                <div class="flex flex-wrap gap-2">
                  ${fam.keyItems.map(item => `
                    <span class="inline-flex items-center gap-1.5 bg-slate-900 border border-cad-blue/30 text-slate-200 text-xs font-technical-data px-2.5 py-1 rounded-lg">
                      <span class="material-symbols-outlined text-safety-orange text-sm">${item.icon}</span>
                      <span>${item.name}</span>
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="flex items-center gap-3 sm:gap-4 flex-wrap pt-2">
              <a href="${fam.catalogLink}" class="inline-flex items-center gap-2 bg-safety-orange hover:bg-orange-600 text-white font-technical-data text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-safety-orange/30 transition-all duration-200 hover:scale-105 active:scale-95">
                <span>Explore ${fam.tabLabel} Catalog</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a href="/pipes-and-fittings/index.html#pipeline-rfq" class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-technical-data text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-full border border-cad-blue/40 transition-all">
                <span>Request Project RFQ</span>
              </a>
            </div>
          </div>

          <!-- Right Column: High-Visibility Stage Visual with Thumbnails -->
          <div class="lg:col-span-5">
            <div class="relative bg-white rounded-2xl border-2 border-cad-blue/30 p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl group/stage overflow-hidden">
              <!-- Radial Glow inside canvas -->
              <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200/60 pointer-events-none"></div>

              <!-- Top Badge inside Image Stage -->
              <div class="relative z-10 w-full flex items-center justify-between pb-3 border-b border-slate-200/80 mb-2">
                <span class="text-[10px] font-technical-data font-bold text-deep-navy uppercase tracking-wider flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-safety-orange"></span>
                  Factory Certified PE100
                </span>
                <span class="text-[10px] font-technical-data font-bold text-safety-orange bg-orange-50 border border-safety-orange/30 px-2 py-0.5 rounded">
                  ${fam.sizeRange}
                </span>
              </div>

              <!-- Main Hero Fitting Image -->
              <div class="relative z-10 w-full h-56 sm:h-64 flex items-center justify-center my-2">
                <img
                  src="${fam.primaryImage}"
                  alt="${fam.primaryImageAlt}"
                  class="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover/stage:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </div>

              <!-- Mini Component Gallery Thumbnails -->
              <div class="relative z-10 w-full pt-3 mt-1 border-t border-slate-200 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  ${fam.thumbs.map(t => `
                    <div class="w-12 h-12 rounded-lg bg-slate-50 border border-cad-blue/20 p-1 flex items-center justify-center shadow-sm" title="${t.name}">
                      <img src="${t.src}" alt="${t.name}" class="max-h-full max-w-full object-contain" />
                    </div>
                  `).join('')}
                </div>
                <a href="${fam.catalogLink}" class="text-[11px] font-technical-data font-bold text-safety-orange hover:underline flex items-center gap-0.5">
                  <span>View All Items</span>
                  <span class="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      slideContentEl.style.opacity = '1';
    }, 120);

    // Update Tab Buttons
    if (tabsNavEl) {
      const tabButtons = tabsNavEl.querySelectorAll('.pipe-tab-btn');
      tabButtons.forEach((btn, idx) => {
        const isCurrent = idx === index;
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent) {
          btn.className = 'pipe-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-technical-data font-bold bg-safety-orange text-white shadow-lg shadow-safety-orange/25 transition-all duration-200';
          const badge = btn.querySelector('span:last-child');
          if (badge) badge.className = 'text-[10px] py-0.5 px-1.5 rounded bg-white/20 text-white';
        } else {
          btn.className = 'pipe-tab-btn flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-technical-data font-semibold bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-cad-blue/30 transition-all duration-200';
          const badge = btn.querySelector('span:last-child');
          if (badge) badge.className = 'text-[10px] py-0.5 px-1.5 rounded bg-slate-800 text-slate-400';
        }
      });

      // Keep active tab centered in horizontal overflow container on mobile
      const activeBtn = tabButtons[index];
      const tabsParent = tabsNavEl.parentElement;
      if (activeBtn && tabsParent && tabsParent.scrollWidth > tabsParent.clientWidth) {
        tabsParent.scrollTo({
          left: activeBtn.offsetLeft - tabsParent.offsetWidth / 2 + activeBtn.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }

    // Update Dots
    if (dotsNavEl) {
      const dots = dotsNavEl.querySelectorAll('.pipe-dot');
      dots.forEach((dot, idx) => {
        const isCurrent = idx === index;
        if (isCurrent) {
          dot.className = 'pipe-dot w-10 h-2 rounded-full bg-safety-orange shadow-sm shadow-safety-orange/50 transition-all duration-200';
        } else {
          dot.className = 'pipe-dot w-7 h-2 rounded-full bg-slate-700 hover:bg-slate-500 transition-all duration-200';
        }
      });
    }
  }

  function goToSlide(newIndex) {
    currentIndex = (newIndex + pipeFamilies.length) % pipeFamilies.length;
    renderSlide(currentIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Initial Render
  renderSlide(0);
  startAutoplay();

  // Prev / Next Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(currentIndex - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(currentIndex + 1);
      startAutoplay();
    });
  }

  // Tab Pill Listeners
  if (tabsNavEl) {
    tabsNavEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.pipe-tab-btn');
      if (btn) {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          stopAutoplay();
          goToSlide(idx);
          startAutoplay();
        }
      }
    });
  }

  // Dot Listeners
  if (dotsNavEl) {
    dotsNavEl.addEventListener('click', (e) => {
      const dot = e.target.closest('.pipe-dot');
      if (dot) {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          stopAutoplay();
          goToSlide(idx);
          startAutoplay();
        }
      }
    });
  }

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;
  const viewport = document.getElementById('pipes-slide-viewport');

  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoplay();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        goToSlide(currentIndex + 1); // Swipe left -> Next
      } else {
        goToSlide(currentIndex - 1); // Swipe right -> Prev
      }
    }
  }
}
