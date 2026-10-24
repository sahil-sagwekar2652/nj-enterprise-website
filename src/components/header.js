export function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  const rawPath = window.location.pathname;
  const currentPath = rawPath.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';

  const isHome = currentPath === '/';
  const isCatalog = currentPath === '/catalog';
  const isFittings = currentPath.startsWith('/pipes-and-fittings');
  const isProfile = currentPath === '/company-profile';
  const isAbout = currentPath === '/about';
  const isContact = currentPath === '/contact';
  const isProducts = currentPath.startsWith('/products') || currentPath === '/category';
  const isCustomRfq = currentPath === '/custom-rfq' || currentPath === '/product-detail' || currentPath === '/search';

  const urlParams = new URLSearchParams(window.location.search);
  const initialSearchQ = (urlParams.get('q') || '').replace(/"/g, '&quot;');

  const linkBaseClass = 'h-full inline-flex items-center px-2 lg:px-2.5 xl:px-3.5 text-xs xl:text-[13.5px] 2xl:text-[14px] font-semibold whitespace-nowrap transition-colors relative';
  const activeLinkClass = `${linkBaseClass} text-safety-orange font-bold after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-safety-orange`;
  const inactiveLinkClass = `${linkBaseClass} text-deep-navy hover:text-safety-orange hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-2 hover:after:right-2 hover:after:h-[2px] hover:after:bg-safety-orange/40`;

  container.innerHTML = `
    <header class="bg-surface border-b border-cad-blue/20 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 max-w-container-max mx-auto h-20">
        <!-- Brand Logo & Name -->
        <a class="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0 mr-2 xl:mr-4" href="/index.html">
          <img src="/plastoguard-logo.png" alt="PlastoGuard Official Logo" class="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
          <span class="font-headline-md text-base sm:text-lg xl:text-xl font-extrabold tracking-tight text-deep-navy leading-none group-hover:text-safety-orange transition-colors whitespace-nowrap">
            PLASTOGUARD
          </span>
        </a>

        <!-- Desktop Navigation Bar -->
        <nav class="hidden lg:flex items-center h-full gap-0.5 xl:gap-1 2xl:gap-2 flex-shrink-0">
          <!-- Home Link -->
          <a class="${isHome ? activeLinkClass : inactiveLinkClass}" href="/index.html">
            Home
          </a>

          <!-- Pipes & Fittings Dropdown -->
          <div class="relative group h-full flex items-center" id="nav-fittings-dropdown">
            <a href="/pipes-and-fittings/index.html" class="${isFittings ? activeLinkClass : inactiveLinkClass} gap-1">
              <span>Pipes & Fittings</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-safety-orange transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </a>

            <!-- Dropdown Menu Canvas for Pipes & Fittings -->
            <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full pt-1.5 w-[720px] z-50">
              <div class="bg-surface border border-cad-blue/30 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-3 backdrop-blur-xl">
                <!-- 1. Electro Fusion -->
                <a href="/pipes-and-fittings/electrofusion/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-cad-blue/20 bg-white hover:border-safety-orange shadow-sm">
                  <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                    <span>1. Electro Fusion Fittings</span>
                    <span class="text-[9px] font-technical-data bg-safety-orange text-white px-1.5 py-0.5 rounded font-bold">20–630mm</span>
                  </span>
                  <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">PE100 SDR11/17 with embedded heating wire coils</span>
                </a>

                <!-- 2. Butt Fusion -->
                <a href="/pipes-and-fittings/butt-fusion/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-cad-blue/20 bg-white hover:border-safety-orange shadow-sm">
                  <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                    <span>2. Butt Fusion Fittings</span>
                    <span class="text-[9px] font-technical-data bg-deep-navy text-white px-1.5 py-0.5 rounded font-bold">Up to 1200mm</span>
                  </span>
                  <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Short & Long Spigot molded elbows, tees, reducers & stubs</span>
                </a>

                <!-- 3. Flanges & Backing Rings -->
                <a href="/pipes-and-fittings/flanges/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-cad-blue/20 bg-white hover:border-safety-orange shadow-sm">
                  <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                    <span>3. Flanges & Backing Rings</span>
                    <span class="text-[9px] font-technical-data bg-slate-200 text-deep-navy px-1.5 py-0.5 rounded font-bold">DIN / ANSI</span>
                  </span>
                  <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Steel-reinforced PP slip-on, blind, and metallic rings</span>
                </a>

                <!-- 4. Fabricated Pipe Fittings -->
                <a href="/pipes-and-fittings/fabricated/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-cad-blue/20 bg-white hover:border-safety-orange shadow-sm">
                  <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                    <span>4. Fabricated Pipe Fittings</span>
                    <span class="text-[9px] font-technical-data bg-orange-100 text-safety-orange px-1.5 py-0.5 rounded font-bold">IS 8360</span>
                  </span>
                  <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Segmented multi-piece 22.5°–90° bends & branch tees</span>
                </a>

                <!-- Master Hub Link Bar -->
                <div class="col-span-2 pt-2 border-t border-cad-blue/15 flex justify-between items-center px-2">
                  <span class="text-[11px] font-technical-data text-on-surface-variant">Full Infrastructure Piping Range</span>
                  <a href="/pipes-and-fittings/index.html" class="text-xs font-bold text-safety-orange hover:underline flex items-center gap-1">
                    <span>Explore Pipes & Fittings Master Hub</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Enclosures Mega Dropdown -->
          <div class="relative group h-full flex items-center" id="nav-enclosures-dropdown">
            <button type="button" class="${isProducts ? activeLinkClass : inactiveLinkClass} gap-1 focus:outline-none" aria-expanded="false">
              <span>Enclosures</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-safety-orange transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown Menu Canvas for Enclosures -->
            <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full pt-1.5 w-[780px] z-50">
              <div class="bg-surface border border-cad-blue/30 rounded-2xl shadow-2xl p-4 grid grid-cols-3 gap-2 backdrop-blur-xl">
                <!-- Indian Series -->
                <a href="/products/indian-series/index.html" class="p-3 rounded-xl hover:bg-slate-surface transition-colors flex flex-col group/item border border-safety-orange/30 bg-orange-50/40 hover:border-safety-orange">
                  <span class="text-xs font-bold text-deep-navy group-hover/item:text-safety-orange flex items-center justify-between">
                    <span>Indian Series Plastic Enclosures</span>
                    <span class="text-[9px] font-technical-data bg-safety-orange text-white px-1.5 py-0.5 rounded font-bold">Featured</span>
                  </span>
                  <span class="text-[11px] text-on-surface-variant mt-1 leading-snug">Instrument cases, tools & hardware</span>
                </a>

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

                <!-- Bottom Banner Link -->
                <div class="col-span-3 pt-2 mt-1 border-t border-cad-blue/15 flex justify-between items-center px-3">
                  <span class="text-[11px] font-technical-data text-on-surface-variant">Complete Enclosure Range</span>
                  <a href="/catalog.html" class="text-xs font-bold text-safety-orange hover:underline flex items-center gap-1">
                    <span>View All Enclosures in Master Catalog</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Catalog Link -->
          <a class="${isCatalog ? activeLinkClass : inactiveLinkClass}" href="/catalog.html">
            Catalog
          </a>

          <!-- Company Profile Link -->
          <a class="${isProfile ? activeLinkClass : inactiveLinkClass}" href="/company-profile.html">
            Company Profile
          </a>

          <!-- About Us Link -->
          <a class="${isAbout ? activeLinkClass : inactiveLinkClass}" href="/about.html">
            About Us
          </a>

          <!-- Contact Link -->
          <a class="${isContact ? activeLinkClass : inactiveLinkClass}" href="/contact.html">
            Contact
          </a>
        </nav>

        <!-- Right Side CTA Actions & Search & Mobile Toggle -->
        <div class="flex items-center gap-2 xl:gap-3 flex-shrink-0 ml-2 xl:ml-4">
          <!-- Desktop Navbar Search Bar -->
          <form action="/search.html" method="GET" class="hidden lg:flex items-center relative">
            <svg class="w-3.5 h-3.5 text-cad-blue/60 absolute left-2.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              name="q"
              value="${initialSearchQ}"
              placeholder="Search..."
              class="w-20 lg:w-24 xl:w-36 2xl:w-48 focus:w-36 xl:focus:w-48 bg-slate-surface border border-cad-blue/30 focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-full pl-7 pr-2.5 py-1.5 text-xs text-deep-navy outline-none transition-all placeholder:text-slate-400 font-body-md"
            />
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
          <a href="/custom-rfq.html" class="hidden lg:flex bg-deep-navy hover:bg-slate-800 text-white font-label-caps text-xs px-2.5 xl:px-4 py-2 border border-cad-blue/40 hover:border-safety-orange transition-all duration-200 rounded-lg shadow-sm items-center gap-1.5 font-bold whitespace-nowrap flex-shrink-0">
            <svg class="w-3.5 h-3.5 text-safety-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span><span class="hidden xl:inline">Request </span>Quote</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button id="mobile-menu-btn" type="button" class="lg:hidden p-1.5 text-deep-navy hover:text-safety-orange focus:outline-none" aria-label="Toggle navigation menu">
            <span class="material-symbols-outlined text-2xl" id="menu-toggle-icon">menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-cad-blue/20 bg-surface px-gutter py-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-200">
        <!-- Mobile Drawer Search Bar -->
        <form action="/search.html" method="GET" class="relative flex items-center mb-3">
          <span class="material-symbols-outlined text-cad-blue/60 text-lg absolute left-3 pointer-events-none">search</span>
          <input type="search" name="q" value="${initialSearchQ}" placeholder="Search by SKU, size, or series..." class="w-full bg-white border border-cad-blue/30 focus:border-safety-orange rounded-xl pl-9 pr-4 py-2 text-sm text-deep-navy outline-none transition-all shadow-sm" />
        </form>

        <nav class="flex flex-col gap-3 text-base font-semibold text-deep-navy">
          <a href="/index.html" class="${isHome ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1.5 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Home</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/catalog.html" class="${isCatalog ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1.5 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Catalog</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          
          <!-- Mobile Pipes & Fittings Collapsible -->
          <details class="group/fittings py-1 border-b border-cad-blue/10 pb-2" ${isFittings ? 'open' : ''}>
            <summary class="flex justify-between items-center cursor-pointer list-none ${isFittings ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-0.5">
              <span class="flex items-center gap-2 font-bold text-deep-navy">
                <span class="w-2 h-2 rounded-full bg-safety-orange"></span>
                <span>Pipes & Fittings</span>
              </span>
              <span class="material-symbols-outlined text-sm group-open/fittings:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div class="pl-3 pt-3 pb-1 flex flex-col gap-2.5 text-sm font-normal text-on-surface-variant">
              <a href="/pipes-and-fittings/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5 font-bold text-deep-navy">
                <span class="material-symbols-outlined text-[15px] text-safety-orange">hub</span>
                <span>Pipes & Fittings Master Hub</span>
              </a>
              <a href="/pipes-and-fittings/electrofusion/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>1. Electro Fusion Fittings (20–630mm)</span>
              </a>
              <a href="/pipes-and-fittings/butt-fusion/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>2. Butt Fusion Fittings (Short & Long)</span>
              </a>
              <a href="/pipes-and-fittings/flanges/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>3. Flanges & Backing Rings</span>
              </a>
              <a href="/pipes-and-fittings/fabricated/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>4. Fabricated Pipe Fittings (IS 8360)</span>
              </a>
            </div>
          </details>

          <!-- Mobile Enclosures Collapsible -->
          <details class="group/mob py-1 border-b border-cad-blue/10 pb-2" ${isProducts ? 'open' : ''}>
            <summary class="flex justify-between items-center cursor-pointer list-none ${isProducts ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-0.5">
              <span class="flex items-center gap-2 font-semibold text-deep-navy">
                <span>Enclosures</span>
              </span>
              <span class="material-symbols-outlined text-sm group-open/mob:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div class="pl-3 pt-3 pb-1 flex flex-col gap-2.5 text-sm font-normal text-on-surface-variant">
              <a href="/products/indian-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5 font-semibold text-deep-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>Indian Series Plastic Enclosures</span>
                <span class="text-[9px] font-technical-data bg-safety-orange text-white px-1.5 py-0.2 rounded font-bold uppercase ml-1">Featured</span>
              </a>
              <a href="/products/11-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>11 Series Plastic Enclosures</span>
              </a>
              <a href="/products/15-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>15 Series Plastic Enclosures</span>
              </a>
              <a href="/products/18-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>18 Series Plastic Enclosures</span>
              </a>
              <a href="/products/19-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>19 Series Plastic Enclosures</span>
              </a>
              <a href="/products/20-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>20 Series Plastic Enclosures</span>
              </a>
              <a href="/products/21-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>21 Series Plastic Enclosures</span>
              </a>
              <a href="/products/22-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>22 Series Plastic Enclosures</span>
              </a>
              <a href="/products/23-series/index.html" class="hover:text-safety-orange flex items-center gap-2 py-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
                <span>23 Series Plastic Enclosures</span>
              </a>
            </div>
          </details>

          <a href="/company-profile.html" class="${isProfile ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1.5 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Company Profile</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/about.html" class="${isAbout ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1.5 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>About Us</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>
          <a href="/contact.html" class="${isContact ? 'text-safety-orange font-bold' : 'hover:text-safety-orange'} py-1.5 flex items-center justify-between border-b border-cad-blue/10 pb-2">
            <span>Contact</span>
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </a>

          <!-- Mobile Drawer CTA Button -->
          <div class="pt-2 pb-1">
            <a href="/custom-rfq.html" class="w-full bg-deep-navy hover:bg-slate-800 text-white font-label-caps text-xs py-3.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-1.5 font-bold transition-all active:scale-[0.98]">
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

  function closeMobileDrawer() {
    if (!mobileDrawer || !mobileBtn) return;
    mobileDrawer.classList.add('hidden');
    mobileBtn.setAttribute('aria-expanded', 'false');
    if (toggleIcon) toggleIcon.textContent = 'menu';
  }

  function openMobileDrawer() {
    if (!mobileDrawer || !mobileBtn) return;
    mobileDrawer.classList.remove('hidden');
    mobileBtn.setAttribute('aria-expanded', 'true');
    if (toggleIcon) toggleIcon.textContent = 'close';
  }

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        openMobileDrawer();
      } else {
        closeMobileDrawer();
      }
    });

    // Close when clicking any link inside drawer
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileDrawer.classList.contains('hidden')) {
        closeMobileDrawer();
      }
    });

    // Close when clicking outside of header
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.classList.contains('hidden')) {
        const headerEl = mobileDrawer.closest('header');
        if (headerEl && !headerEl.contains(e.target)) {
          closeMobileDrawer();
        }
      }
    });
  }
}
