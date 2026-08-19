document.addEventListener('DOMContentLoaded', () => {
  const rfqForm = document.getElementById('rfq-form');
  const rfqStatus = document.getElementById('rfq-status');
  const submitBtn = document.getElementById('rfq-submit-btn');

  if (!rfqForm) return;

  rfqForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      sku: document.getElementById('sku')?.value || '11-1',
      name: document.getElementById('name')?.value || '',
      company: document.getElementById('company')?.value || '',
      email: document.getElementById('email')?.value || '',
      finish: document.getElementById('finish')?.value || 'Standard',
      notes: document.getElementById('notes')?.value || '',
    };

    // UI Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        Sending Quote...
        <span class="material-symbols-outlined text-[18px] animate-spin">sync</span>
      `;
    }

    if (rfqStatus) {
      rfqStatus.classList.add('hidden');
      rfqStatus.className = 'mb-4 p-4 rounded text-technical-data font-technical-data';
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        throw new Error(`Invalid response from server (${response.status}). ${responseText ? responseText.slice(0, 100) : ''}`);
      }

      if (response.ok && result.success) {
        if (rfqStatus) {
          rfqStatus.classList.remove('hidden');
          rfqStatus.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-800');
          rfqStatus.textContent = 'Quote request submitted successfully! An engineering representative will contact you shortly.';
        }
        rfqForm.reset();
      } else {
        throw new Error(result.error || 'Failed to submit quote request.');
      }
    } catch (error) {
      if (rfqStatus) {
        rfqStatus.classList.remove('hidden');
        rfqStatus.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-800');
        rfqStatus.textContent = `Error: ${error.message}`;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          SUBMIT QUOTE REQUEST
          <span class="material-symbols-outlined text-[18px]">send</span>
        `;
      }
    }
  });
});
