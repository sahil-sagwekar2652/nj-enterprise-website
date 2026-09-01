export function renderWhatsAppButton() {
  // Prevent duplicate rendering
  if (document.getElementById('whatsapp-widget-container')) return;

  const container = document.createElement('div');
  container.id = 'whatsapp-widget-container';
  container.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end font-body-md select-none';

  const phoneNumber = '918976557664';
  const ownerName = 'Shrikant Naik';
  const ownerRole = 'Owner, NJ Enterprises';
  const defaultMessage = encodeURIComponent('Hello Shrikant, I am interested in Precision Enclosures from NJ Enterprises.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  container.innerHTML = `
    <!-- WhatsApp Popup Card -->
    <div id="whatsapp-popup-card" class="hidden mb-3 w-[320px] sm:w-[350px] bg-surface rounded-xl shadow-2xl border border-cad-blue/20 overflow-hidden transform transition-all duration-300 origin-bottom-right">
      <!-- Header -->
      <div class="bg-[#075E54] text-white p-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="w-11 h-11 rounded-full bg-[#128C7E] flex items-center justify-center text-white font-bold border-2 border-white/40 text-lg shadow-sm">
              SN
            </div>
            <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h4 class="font-bold text-sm tracking-wide">${ownerName}</h4>
            <p class="text-xs text-green-100">${ownerRole}</p>
            <span class="text-[11px] text-green-200 flex items-center gap-1 mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span> Online • Typically replies fast
            </span>
          </div>
        </div>
        <button id="whatsapp-close-btn" aria-label="Close WhatsApp chat popup" class="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <!-- Chat Body -->
      <div class="p-4 bg-[#ECE5DD]/40 relative min-h-[120px] flex flex-col justify-center">
        <div class="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border border-gray-200/60 max-w-[90%] text-sm text-gray-800">
          <p class="leading-relaxed">
            Hi there! 👋 Welcome to <strong>NJ Enterprises</strong>.
          </p>
          <p class="mt-1.5 text-xs text-gray-600">
            Need pricing, dimensions, or technical advice for our waterproof enclosures? Chat with me directly!
          </p>
          <span class="block text-[10px] text-gray-400 text-right mt-1">Just now</span>
        </div>
      </div>

      <!-- Footer / Action Button -->
      <div class="p-3 bg-surface border-t border-cad-blue/10">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span class="text-sm">Chat on WhatsApp</span>
        </a>
      </div>
    </div>

    <!-- Floating Circular Trigger Button -->
    <button id="whatsapp-toggle-btn" aria-label="Chat with Shrikant Naik on WhatsApp" class="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center">
      <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <!-- Tooltip on hover for desktop -->
      <span class="hidden md:group-hover:inline-block absolute right-full mr-3 bg-deep-navy text-white text-xs font-medium px-2.5 py-1.5 rounded shadow-md whitespace-nowrap">
        Chat with Shrikant Naik
      </span>
    </button>
  `;

  document.body.appendChild(container);

  // Event handlers
  const popupCard = document.getElementById('whatsapp-popup-card');
  const toggleBtn = document.getElementById('whatsapp-toggle-btn');
  const closeBtn = document.getElementById('whatsapp-close-btn');

  function togglePopup() {
    popupCard.classList.toggle('hidden');
  }

  toggleBtn.addEventListener('click', togglePopup);
  closeBtn.addEventListener('click', () => {
    popupCard.classList.add('hidden');
  });
}
