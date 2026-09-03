export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const currentPath = window.location.pathname;

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div class="flex items-center gap-6 lg:gap-8">
          <a class="flex items-center gap-3.5 group focus:outline-none" href="/index.html">
            <img src="/nj-logo.svg" alt="NJ Enterprises Logo" class="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
            <div class="flex flex-col">
              <span class="font-headline-md text-[18px] md:text-headline-md font-extrabold tracking-tighter text-deep-navy leading-none group-hover:text-safety-orange transition-colors">
                NJ ENTERPRISES
              </span>
              <span class="text-[9px] md:text-[10px] font-technical-data tracking-widest text-on-surface-variant font-medium uppercase mt-0.5">
                Precision Enclosures
              </span>
            </div>
          </a>
          <nav class="hidden lg:flex items-center gap-5 font-label-caps text-xs">
            <a class="${currentPath === '/catalog.html' ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/catalog.html">All Series</a>
            <a class="${currentPath.includes('11-series') || currentPath === '/category.html' ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/products/11-series/index.html">11 Waterproof</a>
            <a class="${currentPath.includes('15-series') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/products/15-series/index.html">15 Instrument</a>
            <a class="${currentPath.includes('18-series') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/products/18-series/index.html">18 Desktop</a>
            <a class="${currentPath.includes('21-series') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/products/21-series/index.html">21 Handheld</a>
            <a class="${currentPath.includes('23-series') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/products/23-series/index.html">23 DIN-Rail</a>
            <a class="${currentPath.includes('product-detail') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/product-detail.html">Custom RFQ</a>
          </nav>
        </div>
        <div class="flex items-center gap-3">
          <a href="/catalog.html" class="lg:hidden text-xs font-label-caps text-deep-navy border border-cad-blue/30 px-2.5 py-1.5 rounded">
            Catalog
          </a>
          <a href="/product-detail.html" class="bg-deep-navy text-on-primary font-label-caps text-xs px-3.5 py-2 border-b-2 border-transparent hover:border-safety-orange transition-all duration-200 rounded shadow-sm flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">request_quote</span>
            <span>Request Quote</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
