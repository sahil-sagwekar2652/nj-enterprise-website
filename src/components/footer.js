export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-deep-navy border-t border-cad-blue mt-auto text-on-primary">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter w-full px-gutter py-12 max-w-container-max mx-auto">
        <div class="flex flex-col gap-4 col-span-1 md:col-span-2">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0">
              <img src="/nj-logo.svg" alt="NJ Enterprises Logo" class="w-full h-full object-contain" />
            </div>
            <span class="font-headline-md text-headline-md font-bold text-surface-bright tracking-tight">NJ ENTERPRISES</span>
          </div>
          <p class="text-primary-fixed-dim font-body-md text-body-md max-w-sm leading-relaxed">
            Engineered for Durability. High-precision industrial enclosures and bespoke manufacturing for harsh electrical, instrumentation & automation environments across India.
          </p>
          <p class="text-primary-fixed-dim font-label-caps text-xs mt-2">
            © 2026 NJ Enterprises / Precision Enclosures Manufacturing. All Rights Reserved.
          </p>
        </div>
        <div class="flex flex-col gap-2.5">
          <h4 class="text-surface-bright font-label-caps text-sm font-bold mb-1">Quick Links</h4>
          <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/index.html">Home</a>
          <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/catalog.html">Master Catalog</a>
          <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/about.html">About Us</a>
          <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/contact.html">Contact Us</a>
          <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/product-detail.html">Request RFQ</a>
        </div>
        <div class="flex flex-col gap-2.5">
          <h4 class="text-surface-bright font-label-caps text-sm font-bold mb-1">Direct Contact</h4>
          <p class="text-primary-fixed-dim text-sm leading-relaxed">
            <strong class="text-white">Shrikant Naik</strong> (Owner)<br/>
            Phone: <a href="tel:+918976557664" class="text-safety-orange hover:underline font-semibold">+91 8976557664</a><br/>
            Email: <a href="mailto:sales@njenterprisesgroup.in" class="hover:text-safety-orange transition-colors">sales@njenterprisesgroup.in</a>
          </p>
          <div class="pt-2">
            <a href="https://wa.me/918976557664" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
              <span class="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
          <a class="text-primary-fixed-dim text-xs hover:text-safety-orange transition-colors mt-2" href="/sitemap.xml">XML Sitemap</a>
        </div>
      </div>
    </footer>
  `;
}
