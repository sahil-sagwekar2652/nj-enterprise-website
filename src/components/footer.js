export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-deep-navy border-t border-cad-blue mt-auto text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-cad-blue/25">
          
          <!-- Col 1: Brand, Tagline, Description & GSTIN (lg:col-span-4) -->
          <div class="flex flex-col gap-4 lg:col-span-4">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-sm flex-shrink-0">
                <img src="/nj-logo.svg" alt="NJ Enterprises Logo" class="w-full h-full object-contain" />
              </div>
              <div>
                <span class="font-headline-md text-headline-md font-bold text-surface-bright tracking-tight block">NJ ENTERPRISES</span>
                <span class="text-[11px] font-technical-data text-safety-orange tracking-wider uppercase block font-semibold">Instrument Cabinets / Enclosure Cases / Industrial Products</span>
              </div>
            </div>
            <p class="text-primary-fixed-dim font-body-md text-sm leading-relaxed">
              Engineered for Durability. High-precision industrial enclosures and bespoke manufacturing for harsh electrical, instrumentation & automation environments across India.
            </p>
            <div class="inline-flex items-center gap-2 bg-slate-800/80 border border-safety-orange/50 px-3.5 py-2 rounded-lg text-xs font-technical-data text-surface-bright w-fit shadow-sm">
              <span class="text-safety-orange font-bold uppercase tracking-wider">GSTIN/UIN:</span>
              <span class="tracking-wider font-bold text-white">27ACRPN5102D1ZQ</span>
            </div>
          </div>

          <!-- Col 2: Quick Links (lg:col-span-2) -->
          <div class="flex flex-col gap-2.5 lg:col-span-2">
            <h4 class="text-surface-bright font-label-caps text-sm font-bold mb-1 tracking-wider uppercase">Navigation</h4>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/index.html">Home</a>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/catalog.html">Master Catalog</a>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/products/indian-series/index.html">Indian Series</a>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/about.html">About Us</a>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/contact.html">Contact Us</a>
            <a class="text-primary-fixed-dim text-sm hover:text-safety-orange transition-colors" href="/search.html">Request Quote</a>
          </div>

          <!-- Col 3: Direct Contact (lg:col-span-3) -->
          <div class="flex flex-col gap-3.5 lg:col-span-3">
            <h4 class="text-surface-bright font-label-caps text-sm font-bold mb-1 tracking-wider uppercase">Contact Details</h4>
            
            <div class="flex flex-col gap-1">
              <span class="text-[11px] font-technical-data uppercase tracking-wider text-slate-400">Office Line</span>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-safety-orange text-base flex-shrink-0">call</span>
                <a href="tel:+917718847463" class="text-white hover:text-safety-orange font-semibold font-technical-data text-sm transition-colors">+91 7718847463</a>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <span class="text-[11px] font-technical-data uppercase tracking-wider text-slate-400">Direct Contact</span>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-safety-orange text-base flex-shrink-0">person</span>
                <span class="text-white font-semibold text-sm">Shrikant Naik</span>
              </div>
              <div class="flex items-center gap-2 pl-6">
                <a href="tel:+918976557664" class="text-safety-orange hover:underline font-semibold font-technical-data text-xs">+91 8976557664</a>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <span class="text-[11px] font-technical-data uppercase tracking-wider text-slate-400">Email</span>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-safety-orange text-base flex-shrink-0">mail</span>
                <a href="mailto:acct.njenterprises@gmail.com" class="text-white hover:text-safety-orange transition-colors text-xs font-technical-data break-all">acct.njenterprises@gmail.com</a>
              </div>
            </div>

            <div class="pt-1">
              <a href="https://wa.me/918976557664" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
                <span class="material-symbols-outlined text-sm">chat</span>
                <span>WhatsApp Direct Chat</span>
              </a>
            </div>
          </div>

          <!-- Col 4: Location & Address (lg:col-span-3) -->
          <div class="flex flex-col gap-3 lg:col-span-3">
            <h4 class="text-surface-bright font-label-caps text-sm font-bold mb-1 tracking-wider uppercase">Works & Office</h4>
            <div class="flex items-start gap-2.5">
              <span class="material-symbols-outlined text-safety-orange text-lg mt-0.5 flex-shrink-0">location_on</span>
              <address class="not-italic leading-relaxed text-xs sm:text-sm font-body-md text-slate-300">
                26, Sethi Industrial Estate, Suren Road, Near W.H. Express Metro Station, Andheri East, Mumbai - 400093
              </address>
            </div>
            <div class="pt-3 flex flex-col gap-2">
              <a class="text-primary-fixed-dim text-xs hover:text-safety-orange transition-colors flex items-center gap-1" href="/sitemap.xml">
                <span class="material-symbols-outlined text-xs">schema</span>
                <span>XML Sitemap</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright Row -->
        <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-fixed-dim font-technical-data">
          <p>© 2026 NJ Enterprises. All Rights Reserved.</p>
          <p class="text-slate-400 text-center sm:text-right">GSTIN/UIN: 27ACRPN5102D1ZQ | Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  `;
}
