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

  // Setup client-side table filter on category page if present
  const filterInput = document.getElementById('sku-filter');
  const productRows = document.querySelectorAll('#product-rows tr');

  if (filterInput && productRows.length > 0) {
    filterInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      productRows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
});
