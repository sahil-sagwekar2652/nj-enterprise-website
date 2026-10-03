export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const rawPath = window.location.pathname;
  const currentPath = rawPath.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';

  const isHome = currentPath === '/';
  const isCatalog = currentPath === '/catalog';
  const isProfile = currentPath === '/company-profile';
  const isAbout = currentPath === '/about';
  const isContact = currentPath === '/contact';
  const isProducts = currentPath.startsWith('/products') || currentPath === '/category';
  const isCustomRfq = currentPath === '/custom-rfq' || currentPath === '/product-detail' || currentPath === '/search';

  const urlParams = new URLSearchParams(window.location.search);
  const initialSearchQ = (urlParams.get('q') || '').replace(/"/g, '&quot;');

  const activeLinkClass = 'text-safety-orange border-b-2 border-safety-orange pb-1 font-bold';
  const inactiveLinkClass = 'text-deep-navy hover:text-safety-orange border-b-2 border-transparent hover:border-safety-orange pb-1';

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <!-- Brand Logo & Name -->
        <div class="flex items-center gap-6 lg:gap-8">
          <a class="flex items-center gap-3 group focus:outline-none" href="/index.html">
            <img src="/plastoguard-logo.png" alt="PlastoGuard Official Logo" class="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
            <span class="font-headline-md text-lg sm:text-xl font-extrabold tracking-tight text-deep-navy leading-none group-hover:text-safety-orange transition-colors whitespace-nowrap">
              PLASTOGUARD
            </span>
          </a>

          <!-- Desktop Navigation Bar -->
          <nav class="hidden lg:flex items-center gap-5 text-[15px] font-semibold">
            <!-- Home Link -->
            <a class="${isHome ? activeLinkClass : inactiveLinkClass} transition-colors duration-200" href="/index.html">
              Home
            </a>

            <!-- Catalog Link -->
            <a class="${isCatalog ? activeLinkClass : inactiveLinkClass} transition-colors duration-200" href="/catalog.html">
              Catalog
            </a>

            <!-- Products Mega Dropdown -->
            <div class="relative group" id="nav-products-dropdown">
              <button type="button" class="flex items-center gap-1.5 ${isProducts ? activeLinkClass : inactiveLinkClass} transition-colors duration-200 focus:outline-none" aria-expanded="false">
                <span>Products</span>
                <span class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">expand_more</span>
              </button>

              <!-- Dropdown Menu Canvas -->
              <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full pt-3 w-[780px] z-50">
                <div class="bg-surface border border-cad-blue/30 rounded-2xl shadow-2xl p-4 grid grid-cols-3 gap-2 backdrop-blur-xl">
                  <!-- 11 Series -->
                  <a href="/products/11-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>11 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-deep-navy text-white px-1.5 py-0.5 rounded">IP65</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Sealed weatherproof enclosures</span>
                  </a>

                  <!-- 15 Series -->
                  <a href="/products/15-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>15 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Lab</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Sloped benchtop instrument housings</span>
                  </a>

                  <!-- 18 Series -->
                  <a href="/products/18-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>18 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Console</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Angled desktop operator consoles</span>
                  </a>

                  <!-- 19 Series -->
                  <a href="/products/19-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>19 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Surface</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Flush wall & RFID controller housings</span>
                  </a>

                  <!-- 20 Series -->
                  <a href="/products/20-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>20 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Junction</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Modular wiring & IoT sensor pods</span>
                  </a>

                  <!-- 21 Series -->
                  <a href="/products/21-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>21 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">Portable</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Field testers & remote casings</span>
                  </a>

                  <!-- 22 Series -->
                  <a href="/products/22-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>22 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">22mm</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Pushbutton & E-stop switch boxes</span>
                  </a>

                  <!-- 23 Series -->
                  <a href="/products/23-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>23 Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-slate-surface text-deep-navy border border-cad-blue/20 px-1.5 py-0.5 rounded">35mm</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Snap-on DIN-rail panel housings</span>
                  </a>

                  <!-- Indian Series -->
                  <a href="/products/indian-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-transparent hover:border-cad-blue/20">
                    <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                      <span>Indian Series Plastic Enclosures</span>
                      <span class="text-[9px] font-technical-data bg-safety-orange text-white px-1.5 py-0.5 rounded">Featured</span>
                    </span>
                    <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Instrument cases, tools & hardware</span>
                  </a>

                  <!-- Bottom Banner Link -->
                  <div class="col-span-3 pt-2 mt-1 border-t border-cad-blue/15 flex justify-between items-center px-3">
                    <span class="text-[11px] font-technical-data text-on-surface-variant">Complete Product Range</span>
                    <a href="/catalog.html" class="text-xs font-bold text-safety-orange hover:underline flex items-center gap-1">
                      View All Products <span class="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Company Profile Link -->
            <a class="${isProfile ? activeLinkClass : inactiveLinkClass} transition-colors duration-200" href="/company-profile.html">
              Company Profile
            </a>

            <!-- About Us Link -->
            <a class="${isAbout ? activeLinkClass : inactiveLinkClass} transition-colors duration-200" href="/about.html">
              About Us
            </a>

            <!-- Contact Link -->
            <a class="${isContact ? activeLinkClass : inactiveLinkClass} transition-colors duration-200" href="/contact.html">
              Contact
            </a>
          </nav>
        </div>

        <!-- Right Side CTA Actions & Search & Mobile Toggle -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Desktop Navbar Search Bar -->
          <form action="/search.html" method="GET" class="hidden lg:flex items-center relative">
            <span class="material-symbols-outlined text-cad-blue/60 text-lg absolute left-3 pointer-events-none">search</span>
            <input type="search" name="q" value="${initialSearchQ}" placeholder="Search SKU, size, series..." class="w-40 xl:w-56 bg-slate-surface border border-cad-blue/30 focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-full pl-9 pr-3 py-1.5 text-xs text-deep-navy outline-none transition-all placeholder:text-slate-400 font-body-md" />
          </form>

          <!-- Mobile only: Quick Search Icon Link -->
          <a href="/search.html" title="Search Products" class="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-deep-navy hover:text-safety-orange hover:bg-slate-surface transition-colors" aria-label="Search products">
            <span class="material-symbols-outlined text-xl">search</span>
          </a>

          <!-- Mobile only: Catalog pill button -->
          <a href="/catalog.html" class="lg:hidden text-xs font-semibold ${isCatalog ? 'text-safety-orange border-safety-orange font-bold bg-slate-surface' : 'text-deep-navy border-cad-blue/30'} border px-2.5 py-1.5 rounded-lg hover:bg-slate-surface transition-colors whitespace-nowrap">
            Catalog
          </a>

          <!-- Desktop only: Custom RFQ button -->
          <a href="/custom-rfq.html" class="hidden lg:flex bg-deep-navy hover:bg-slate-800 text-white font-label-caps text-sm px-4 py-2 border-b-2 border-transparent hover:border-safety-orange transition-all duration-200 rounded-lg shadow-sm items-center gap-1.5 font-bold whitespace-nowrap">
            <span class="material-symbols-outlined text-base">precision_manufacturing</span>
            <span>Request Quote</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button id="mobile-menu-btn" type="button" class="lg:hidden p-1.5 text-deep-navy hover:text-safety-orange focus:outline-none" aria-label="Toggle navigation menu">
            <span class="material-symbols-outlined text-2xl" id="menu-toggle-icon">menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-cad-blue/20 bg-surface px-gutter py-4 shadow-xl">
        <!-- Mobile Drawer Search Bar -->
        <form action="/search.html" method="GET" class="relative flex items-center mb-3">
          <span class="material-symbols-outlined text-cad-blue/60 text-lg absolute left-3 pointer-events-none">search</span>
          <input type="search" name="q" value="${initialSearchQ}" placeholder="Search by SKU, size, or series..." class="w-full bg-white border border-cad-blue/30 focus:border-safety-orange rounded-xl pl-9 pr-4 py-2 text-sm text-deep-navy outline-none transition-all shadow-sm" />
        </form>

        <nav class="flex flex-col gap-3.5 text-base font-semibold text-deep-navy">
          <a href="/index.html" class="${isHome ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Home</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/catalog.html" class="${isCatalog ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Catalog</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          
          <!-- Mobile Products Collapsible -->
          <details class="group/mob py-1 border-b border-cad-blue/10 pb-2" ${isProducts ? 'open' : ''}>
            <summary class="flex justify-between items-center cursor-pointer list-none ${isProducts ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'}">
              <span>All Products & Series</span>
              <span class="material-symbols-outlined text-sm group-open/mob:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div class="pl-3 pt-3 flex flex-col gap-2.5 text-sm font-normal text-on-surface-variant">
              <a href="/products/11-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>11 Series Plastic Enclosures</span>
              </a>
              <a href="/products/15-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>15 Series Plastic Enclosures</span>
              </a>
              <a href="/products/18-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>18 Series Plastic Enclosures</span>
              </a>
              <a href="/products/19-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>19 Series Plastic Enclosures</span>
              </a>
              <a href="/products/20-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>20 Series Plastic Enclosures</span>
              </a>
              <a href="/products/21-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>21 Series Plastic Enclosures</span>
              </a>
              <a href="/products/22-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>22 Series Plastic Enclosures</span>
              </a>
              <a href="/products/23-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>23 Series Plastic Enclosures</span>
              </a>
              <a href="/products/indian-series/index.html" class="hover:text-safety-orange flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Indian Series Plastic Enclosures</span>
              </a>
            </div>
          </details>

          <a href="/company-profile.html" class="${isProfile ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Company Profile</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/about.html" class="${isAbout ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>About Us</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/contact.html" class="${isContact ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Contact</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>

          <!-- Mobile Drawer CTA Button -->
          <div class="pt-2">
            <a href="/custom-rfq.html" class="w-full bg-deep-navy hover:bg-slate-800 text-white font-label-caps text-xs py-3 px-4 rounded-xl shadow-sm flex items-center justify-center gap-1.5 font-bold">
              <span class="material-symbols-outlined text-base">precision_manufacturing</span>
              <span>Request Custom Quote</span>
            </a>
          </div>
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
