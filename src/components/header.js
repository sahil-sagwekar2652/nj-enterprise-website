export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const currentPath = window.location.pathname;

  const isCatalog = currentPath === '/catalog.html';
  const isAbout = currentPath === '/about.html';
  const isContact = currentPath === '/contact.html';
  const isProducts = currentPath.includes('/products/') || currentPath === '/category.html';
  const isCustomRfq = currentPath === '/product-detail.html';

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <!-- Brand Logo & Name -->
        <div class="flex items-center gap-6 lg:gap-10">
          <a class="flex items-center gap-3.5 group focus:outline-none" href="/index.html">
            <img src="/nj-logo.svg" alt="NJ Enterprises Official Logo" class="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
            <div class="flex flex-col">
              <span class="font-headline-md text-lg sm:text-xl font-extrabold tracking-tight text-deep-navy leading-none group-hover:text-safety-orange transition-colors">
                NJ ENTERPRISES
              </span>
              <span class="text-[10px] font-technical-data tracking-widest text-on-surface-variant font-semibold uppercase mt-1">
                Precision Enclosures
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Bar -->
          <nav class="hidden lg:flex items-center gap-7 text-[15px] font-semibold">
            <!-- Catalog Link -->
            <a class="${isCatalog ? 'text-safety-orange border-b-2 border-safety-orange pb-1 font-bold' : 'text-deep-navy hover:text-safety-orange'} transition-colors duration-200" href="/catalog.html">
              Catalog
            </a>

            <!-- Products Mega Dropdown -->
            <div class="relative group" id="nav-products-dropdown">
              <button type="button" class="flex items-center gap-1.5 ${isProducts ? 'text-safety-orange border-b-2 border-safety-orange pb-1 font-bold' : 'text-deep-navy hover:text-safety-orange'} transition-colors duration-200 focus:outline-none py-2" aria-expanded="false">
                <span>Products</span>
                <span class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">expand_more</span>
              </button>

              <!-- Dropdown Menu Canvas -->
              <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full pt-3 w-[560px] z-50">
                <div class="bg-surface border border-cad-blue/30 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2 backdrop-blur-xl">
                  <!-- 11 Series -->
                  <a href="/products/11-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Water-Proof 11 Series</span>
                      <span class="text-[9px] font-technical-data bg-deep-navy text-white px-1.5 py-0.5 rounded">IP67</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Outdoor weatherproof sealed boxes</span>
                  </a>

                  <!-- 15 Series -->
                  <a href="/products/15-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Plastic Cabinet 15 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Lab</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Sloped benchtop & instrument cases</span>
                  </a>

                  <!-- 18 Series -->
                  <a href="/products/18-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Desk-Top 18 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Console</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Angled desktop operator consoles</span>
                  </a>

                  <!-- 19 Series -->
                  <a href="/products/19-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Wall-Mount 19 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Surface</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Flush wall & RFID controller housings</span>
                  </a>

                  <!-- 20 Series -->
                  <a href="/products/20-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Junction Box 20 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Junction</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Modular wiring & IoT sensor pods</span>
                  </a>

                  <!-- 21 Series -->
                  <a href="/products/21-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Hand-Held 21 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Portable</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Field testers & remote casings</span>
                  </a>

                  <!-- 22 Series -->
                  <a href="/products/22-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Control 22 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">22mm</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Pushbutton & E-stop switch boxes</span>
                  </a>

                  <!-- 23 Series -->
                  <a href="/products/23-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>DIN-Rail 23 Series</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">35mm</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Snap-on distribution panel housings</span>
                  </a>

                  <!-- Bottom Banner Link -->
                  <div class="col-span-2 pt-2 mt-1 border-t border-cad-blue/15 flex justify-between items-center px-3">
                    <span class="text-[11px] font-technical-data text-on-surface-variant">Full Manufacturing Range</span>
                    <a href="/catalog.html" class="text-xs font-bold text-safety-orange hover:underline flex items-center gap-1">
                      View All Products <span class="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- About Us Link -->
            <a class="${isAbout ? 'text-safety-orange border-b-2 border-safety-orange pb-1 font-bold' : 'text-deep-navy hover:text-safety-orange'} transition-colors duration-200" href="/about.html">
              About Us
            </a>

            <!-- Contact Link -->
            <a class="${isContact ? 'text-safety-orange border-b-2 border-safety-orange pb-1 font-bold' : 'text-deep-navy hover:text-safety-orange'} transition-colors duration-200" href="/contact.html">
              Contact
            </a>
          </nav>
        </div>

        <!-- Right Side CTA Actions & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a href="/catalog.html" class="lg:hidden text-xs font-semibold text-deep-navy border border-cad-blue/30 px-3 py-2 rounded-lg hover:bg-slate-surface transition-colors">
            Catalog
          </a>
          <a href="/product-detail.html" class="bg-deep-navy hover:bg-slate-800 text-white font-label-caps text-xs sm:text-sm px-4 py-2.5 border-b-2 border-transparent hover:border-safety-orange transition-all duration-200 rounded-lg shadow-sm flex items-center gap-1.5 font-bold">
            <span class="material-symbols-outlined text-base">request_quote</span>
            <span>Request Quote</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button id="mobile-menu-btn" type="button" class="lg:hidden p-2 text-deep-navy hover:text-safety-orange focus:outline-none" aria-label="Toggle navigation menu">
            <span class="material-symbols-outlined text-2xl" id="menu-toggle-icon">menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-cad-blue/20 bg-surface px-gutter py-5 shadow-xl">
        <nav class="flex flex-col gap-4 text-base font-semibold text-deep-navy">
          <a href="/index.html" class="hover:text-safety-orange py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Home</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/catalog.html" class="hover:text-safety-orange py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Catalog</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          
          <!-- Mobile Products Collapsible -->
          <details class="group/mob py-1 border-b border-cad-blue/10 pb-2">
            <summary class="flex justify-between items-center cursor-pointer list-none hover:text-safety-orange">
              <span>All Products & Series</span>
              <span class="material-symbols-outlined text-sm group-open/mob:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div class="pl-3 pt-3 flex flex-col gap-2.5 text-sm font-normal text-on-surface-variant">
              <a href="/products/11-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Water-Proof 11 Series (IP67)</span>
              </a>
              <a href="/products/15-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Plastic Cabinet 15 Series (Lab)</span>
              </a>
              <a href="/products/18-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Desk-Top 18 Series (Console)</span>
              </a>
              <a href="/products/19-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Wall-Mounting 19 Series (Surface)</span>
              </a>
              <a href="/products/20-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Junction Box 20 Series (Sensors)</span>
              </a>
              <a href="/products/21-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Hand-Held 21 Series (Portable)</span>
              </a>
              <a href="/products/22-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Industrial Control 22 Series (22mm)</span>
              </a>
              <a href="/products/23-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>DIN-Rail 23 Series (Panel Module)</span>
              </a>
            </div>
          </details>

          <a href="/about.html" class="hover:text-safety-orange py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>About Us</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/contact.html" class="hover:text-safety-orange py-1 flex items-center justify-between">
            <span>Contact</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </nav>
      </div>
    </header>
  `;

  // Attach mobile menu toggle event
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const toggleIcon = document.getElementById('menu-toggle-icon');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        if (toggleIcon) toggleIcon.textContent = 'close';
      } else {
        mobileDrawer.classList.add('hidden');
        if (toggleIcon) toggleIcon.textContent = 'menu';
      }
    });
  }
}
