export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const currentPath = window.location.pathname;

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div class="flex items-center gap-8">
          <a class="flex items-center gap-3.5 group focus:outline-none" href="/index.html">
            <div class="p-1 rounded-lg bg-slate-surface border border-cad-blue/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-inner">
              <img src="/nj-logo.svg" alt="NJ Enterprises Logo" class="h-9 w-9 object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="font-headline-md text-[19px] md:text-headline-md font-extrabold tracking-tighter text-deep-navy leading-none group-hover:text-safety-orange transition-colors">
                NJ ENTERPRISES
              </span>
              <span class="text-[9px] md:text-[10px] font-technical-data tracking-widest text-on-surface-variant font-medium uppercase mt-0.5">
                Precision Enclosures
              </span>
            </div>
          </a>
          <nav class="hidden md:flex items-center gap-6 font-label-caps text-label-caps">
            <a class="${currentPath.includes('catalog') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/catalog.html">Catalog</a>
            <a class="${currentPath.includes('category') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/category.html">Wall-Mount</a>
            <a class="text-on-surface-variant hover:text-safety-orange transition-colors duration-200" href="/category.html">Floor-Standing</a>
            <a class="${currentPath.includes('product-detail') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} transition-colors duration-200" href="/product-detail.html">Custom Solutions</a>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <a href="/product-detail.html" class="bg-deep-navy text-on-primary font-label-caps text-label-caps px-4 py-2 border-b-2 border-transparent hover:border-safety-orange transition-all duration-200 rounded-DEFAULT shadow-sm flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">request_quote</span>
            <span>Request Quote</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
