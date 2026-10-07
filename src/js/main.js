import '../css/main.css';
import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderWhatsAppButton } from '../components/whatsapp.js';
import { initHomeCarousel } from '../components/carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  renderWhatsAppButton();
  initHomeCarousel();

  // Setup client-side table filter & tabs on catalog page if present
  const filterInput = document.getElementById('sku-filter');
  const productRows = document.querySelectorAll('#product-rows tr');
  const catalogTabs = document.querySelectorAll('.catalog-tab');

  if (productRows.length > 0) {
    let currentSeries = 'all';

    function applyFilter() {
      const searchTerm = filterInput ? filterInput.value.toLowerCase().trim() : '';
      productRows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        const matchesSearch = !searchTerm || text.includes(searchTerm);
        const matchesSeries = currentSeries === 'all' || text.includes(currentSeries.toLowerCase());
        if (matchesSearch && matchesSeries) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    if (filterInput) {
      filterInput.addEventListener('input', applyFilter);
    }

    if (catalogTabs.length > 0) {
      catalogTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          currentSeries = tab.getAttribute('data-series') || 'all';

          catalogTabs.forEach((t) => {
            const isIndian = t.getAttribute('data-series') === 'Indian Series';
            t.classList.remove('active');
            if (isIndian) {
              t.className = 'catalog-tab px-3.5 py-1.5 rounded-lg text-xs font-bold font-technical-data transition-all border-2 border-safety-orange bg-orange-50 text-safety-orange hover:bg-safety-orange hover:text-white shadow-sm flex items-center gap-1.5';
            } else {
              t.className = 'catalog-tab px-3 py-1.5 rounded-lg text-xs font-semibold font-technical-data transition-all border border-cad-blue/30 bg-surface text-deep-navy hover:border-safety-orange hover:text-safety-orange';
            }
          });

          tab.classList.add('active');
          const isSelectedIndian = tab.getAttribute('data-series') === 'Indian Series';
          if (isSelectedIndian) {
            tab.className = 'catalog-tab active px-3.5 py-1.5 rounded-lg text-xs font-bold font-technical-data transition-all border-2 border-safety-orange bg-safety-orange text-white shadow-md flex items-center gap-1.5';
          } else {
            tab.className = 'catalog-tab active px-3.5 py-1.5 rounded-lg text-xs font-semibold font-technical-data transition-all border border-deep-navy bg-deep-navy text-white shadow-sm';
          }

          applyFilter();
        });
      });
    }
  }
});
