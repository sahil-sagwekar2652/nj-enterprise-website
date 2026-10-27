/**
 * pipes-carousel.js
 * Infrastructure Pipeline Systems category grid.
 * Tight, uncluttered 4-category grid with slow hover pop-out effect,
 * concise Size & Material parametric specs, and a prominent "View All Products" CTA.
 */

export const pipeFamilies = [
  {
    id: 'electrofusion',
    index: '01',
    name: 'Electrofusion Fittings',
    sizeRange: '20 mm to 630 mm',
    material: 'Virgin High-Density PE100',
    primaryImage: '/images/fittings/electrofusion/coupler.png',
    primaryImageAlt: 'PlastoGuard Electrofusion Coupler Fitting Range 20mm to 630mm',
    catalogLink: '/pipes-and-fittings/electrofusion/index.html',
    badge: 'IS 8360 / ISO 4427'
  },
  {
    id: 'butt-fusion',
    index: '02',
    name: 'Butt Fusion Fittings',
    sizeRange: '20 mm to 1200 mm',
    material: 'Virgin Pre-compounded PE100',
    primaryImage: '/images/fittings/butt-fusion/short-stub-flange.png',
    primaryImageAlt: 'PlastoGuard Butt Fusion Short Stub Flange Adapter',
    catalogLink: '/pipes-and-fittings/butt-fusion/index.html',
    badge: 'Short & Long Spigot'
  },
  {
    id: 'flanges',
    index: '03',
    name: 'Flanges & Backing Rings',
    sizeRange: '20 mm to 1600 mm (0.5" to 64")',
    material: 'Encapsulated Steel & SS',
    primaryImage: '/images/fittings/flanges/steel-reinforced.png',
    primaryImageAlt: 'PlastoGuard Steel Reinforced Flanges and Backing Rings',
    catalogLink: '/pipes-and-fittings/flanges/index.html',
    badge: 'DIN & ANSI Compliant'
  },
  {
    id: 'fabricated',
    index: '04',
    name: 'Fabricated Pipe Fittings',
    sizeRange: '20 mm to 630 mm (Up to 1600mm)',
    material: 'Factory Miter-Cut PE100',
    primaryImage: '/images/fittings/fabricated/fabricated-bends.png',
    primaryImageAlt: 'PlastoGuard Segmented Fabricated Mitered Bends',
    catalogLink: '/pipes-and-fittings/fabricated/index.html',
    badge: 'Custom CAD Tooling'
  }
];

export function initPipesCarousel() {
  const container = document.getElementById('pipes-carousel-container');
  if (!container) return;

  container.innerHTML = `
    <div class="w-full">
      
      <!-- Top Section Hairline & Division Eyebrow -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-cad-blue/20 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="inline-block w-2 h-2 rounded-full bg-safety-orange"></span>
            <span class="font-label-caps text-xs text-slate-500 uppercase tracking-wider font-semibold">
              PE100 / PE80 Infrastructure Division
            </span>
          </div>
          <h3 class="font-headline-md text-xl sm:text-2xl lg:text-3xl font-extrabold text-deep-navy">
            Infrastructure Pipeline Systems
          </h3>
        </div>
        
        <div class="text-xs font-technical-data text-slate-500 hidden sm:flex items-center gap-3">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
            <span>IS 8360 / ISO 4427 / EN 12201 Compliant</span>
          </span>
          <span>•</span>
          <span>Tooling: 20mm to 1600mm</span>
        </div>
      </div>

      <!-- Tight 4-Category Pipes Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        ${pipeFamilies.map(fam => `
          <a
            href="${fam.catalogLink}"
            class="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-safety-orange/60 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-safety-orange/15 transition-all duration-500 ease-out hover:-translate-y-2.5 hover:scale-[1.02] cursor-pointer h-full"
          >
            <div class="flex flex-col flex-1">
              <!-- Top Category Index & Standards Badge -->
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-technical-data font-bold text-slate-400 group-hover:text-safety-orange transition-colors duration-300">
                  SERIES ${fam.index}
                </span>
                <span class="text-[11px] font-technical-data font-semibold text-slate-500 bg-slate-100 group-hover:bg-orange-50 group-hover:text-safety-orange border border-slate-200/70 group-hover:border-safety-orange/30 px-2 py-0.5 rounded-md transition-colors duration-300">
                  ${fam.badge}
                </span>
              </div>

              <!-- Category Title -->
              <h4 class="font-headline-md text-lg sm:text-xl font-bold text-deep-navy group-hover:text-safety-orange transition-colors duration-300 leading-snug mb-3">
                ${fam.name}
              </h4>

              <!-- Visual Photo Stage with Slow Pop-out & Soft Tint -->
              <div class="relative w-full h-44 sm:h-48 bg-slate-50/70 rounded-xl p-4 flex items-center justify-center mb-4 overflow-hidden border border-slate-100 group-hover:border-safety-orange/20 group-hover:bg-orange-50/20 transition-all duration-500 ease-out">
                <img
                  src="${fam.primaryImage}"
                  alt="${fam.primaryImageAlt}"
                  class="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              <!-- Technical Specifications: Size & Material ONLY (Stacked 2-Column Matrix) -->
              <div class="grid grid-cols-1 gap-2 mb-5 font-technical-data text-xs mt-auto">
                <div class="bg-slate-50/80 rounded-lg px-3 py-2 border border-slate-100/90 flex flex-col justify-center">
                  <span class="text-slate-600 font-semibold uppercase tracking-wider text-[10px] mb-0.5">Size Range</span>
                  <span class="font-bold text-deep-navy text-xs leading-tight">${fam.sizeRange}</span>
                </div>
                <div class="bg-slate-50/80 rounded-lg px-3 py-2 border border-slate-100/90 flex flex-col justify-center">
                  <span class="text-slate-600 font-semibold uppercase tracking-wider text-[10px] mb-0.5">Material</span>
                  <span class="font-bold text-deep-navy text-xs leading-tight">${fam.material}</span>
                </div>
              </div>
            </div>

            <!-- Card Action Button: View Series -->
            <div class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-safety-orange text-deep-navy group-hover:text-white font-technical-data text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group-hover:shadow-md">
              <span>View Series</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </a>
        `).join('')}
      </div>

      <!-- View All Products CTA Beneath the Grid -->
      <div class="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/pipes-and-fittings/index.html"
          class="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-deep-navy hover:bg-safety-orange text-white font-technical-data text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
        >
          <span>View All Products</span>
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

    </div>
  `;
}
