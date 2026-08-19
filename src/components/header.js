export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const currentPath = window.location.pathname;

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue sticky top-0 z-50">
      <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div class="flex items-center gap-8">
          <a class="font-headline-md text-headline-md font-extrabold tracking-tighter text-on-surface" href="/index.html">
            NJ ENTERPRISES
          </a>
          <nav class="hidden md:flex gap-6">
            <a class="${currentPath.includes('catalog') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} font-label-caps text-label-caps transition-colors duration-200" href="/catalog.html">Catalog</a>
            <a class="${currentPath.includes('category') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} font-label-caps text-label-caps transition-colors duration-200" href="/category.html">Wall-Mount</a>
            <a class="text-on-surface-variant font-label-caps text-label-caps hover:text-safety-orange transition-colors duration-200" href="/category.html">Floor-Standing</a>
            <a class="${currentPath.includes('product-detail') ? 'text-primary border-b-2 border-safety-orange pb-1' : 'text-on-surface-variant hover:text-safety-orange'} font-label-caps text-label-caps transition-colors duration-200" href="/product-detail.html">Custom Solutions</a>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <a href="/product-detail.html" class="bg-deep-navy text-on-primary font-label-caps text-label-caps px-4 py-2 border-b-2 border-transparent hover:border-safety-orange transition-all duration-200 rounded-DEFAULT">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  `;
}
