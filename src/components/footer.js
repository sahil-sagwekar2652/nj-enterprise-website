export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-deep-navy border-t border-cad-blue mt-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter w-full px-gutter py-12 max-w-container-max mx-auto">
        <div class="flex flex-col gap-4 col-span-1 md:col-span-2">
          <span class="font-headline-md text-headline-md font-bold text-surface-bright">NJ ENTERPRISES</span>
          <p class="text-primary-fixed-dim font-body-md text-body-md max-w-sm">
            Engineered for Durability. Industrial-grade solutions for harsh environments.
          </p>
          <p class="text-primary-fixed-dim font-label-caps text-label-caps mt-4">
            © 2026 NJ Enterprises / Precision Enclosures Manufacturing. All Rights Reserved.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-surface-bright font-label-caps text-label-caps mb-2">Navigation</h4>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/index.html">Home</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/catalog.html">Catalog</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/category.html">Wall-Mount / IP67</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/product-detail.html">Product Specs & RFQ</a>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-surface-bright font-label-caps text-label-caps mb-2">Company</h4>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="#">Contact Engineering</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="#">Site Map</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  `;
}
