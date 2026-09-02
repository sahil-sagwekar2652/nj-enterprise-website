export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-deep-navy border-t border-cad-blue mt-auto text-on-primary">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter w-full px-gutter py-12 max-w-container-max mx-auto">
        <div class="flex flex-col gap-4 col-span-1 md:col-span-2">
          <div class="flex items-center gap-3">
            <img src="/nj-logo.svg" alt="NJ Enterprises Logo" class="h-9 w-auto object-contain brightness-125" />
            <span class="font-headline-md text-headline-md font-bold text-surface-bright tracking-tight">NJ ENTERPRISES</span>
          </div>
          <p class="text-primary-fixed-dim font-body-md text-body-md max-w-sm">
            Engineered for Durability. High-precision industrial enclosures and bespoke manufacturing for harsh electrical & electronic environments.
          </p>
          <p class="text-primary-fixed-dim font-label-caps text-label-caps mt-2">
            © 2026 NJ Enterprises / Precision Enclosures Manufacturing. All Rights Reserved.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-surface-bright font-label-caps text-label-caps mb-2">Navigation</h4>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/index.html">Home</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/catalog.html">Catalog</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/category.html">Water-Proof 11 Series</a>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors" href="/product-detail.html">Product Specs & RFQ</a>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-surface-bright font-label-caps text-label-caps mb-2">Direct Contact</h4>
          <p class="text-primary-fixed-dim text-sm">
            <strong class="text-white">Shrikant Naik</strong> (Owner)<br/>
            Phone: <a href="tel:+918976557664" class="hover:text-safety-orange transition-colors">+91 8976557664</a><br/>
            Email: <a href="mailto:sahilss2652@gmail.com" class="hover:text-safety-orange transition-colors">sales@njenterprisesgroup.in</a>
          </p>
          <a class="text-primary-fixed-dim font-body-md text-body-md hover:text-safety-orange transition-colors mt-1" href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  `;
}
