document.addEventListener('DOMContentLoaded', () => {
  const rfqForm = document.getElementById('rfq-form');
  const rfqStatus = document.getElementById('rfq-status');
  const submitBtn = document.getElementById('rfq-submit-btn');

  if (!rfqForm) return;

  rfqForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const skuVal = document.getElementById('sku')?.value || document.getElementById('product-sku')?.textContent || 'Enclosure Product';
    const nameVal = document.getElementById('name')?.value || '';
    const companyVal = document.getElementById('company')?.value || '';
    const emailVal = document.getElementById('email')?.value || '';
    const finishVal = document.getElementById('finish')?.value || 'Standard';
    const notesVal = document.getElementById('notes')?.value || '';

    const formData = {
      sku: skuVal,
      name: nameVal,
      company: companyVal,
      email: emailVal,
      finish: finishVal,
      notes: notesVal,
    };

    // UI Loading state
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined text-[18px] animate-spin">sync</span>
        <span>SUBMITTING QUOTE...</span>
      `;
    }

    if (rfqStatus) {
      rfqStatus.classList.add('hidden');
      rfqStatus.className = 'mb-4 p-4 rounded-xl text-sm font-technical-data border';
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
      let result = {};
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        // non-JSON response
      }

      if (response.ok && result.success) {
        if (rfqStatus) {
          rfqStatus.classList.remove('hidden');
          rfqStatus.className = 'mb-6 p-4 rounded-xl text-sm font-technical-data bg-emerald-50 border border-emerald-300 text-emerald-900 block';
          rfqStatus.innerHTML = `
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-emerald-600 text-xl flex-shrink-0">check_circle</span>
              <div>
                <strong class="font-bold block text-emerald-950">Quote Request Submitted Successfully!</strong>
                <p class="mt-1 text-xs text-emerald-800">Thank you for your interest in <strong>${skuVal}</strong>. Our technical engineering team will review your specifications and reply to <strong>${emailVal}</strong> within 2-4 business hours.</p>
              </div>
            </div>
          `;
        }
        rfqForm.reset();
      } else {
        throw new Error(result.error || 'Server error processing request');
      }
    } catch (error) {
      if (rfqStatus) {
        const mailSubject = encodeURIComponent(`RFQ Request: ${skuVal} - ${companyVal || nameVal}`);
        const mailBody = encodeURIComponent(`Product SKU: ${skuVal}\nOption/Finish: ${finishVal}\nName: ${nameVal}\nCompany: ${companyVal}\nEmail: ${emailVal}\n\nRequirements:\n${notesVal}`);
        const mailHref = `mailto:sales@njenterprisesgroup.in?subject=${mailSubject}&body=${mailBody}`;
        const waHref = `https://wa.me/918976557664?text=${encodeURIComponent(`Hi Shrikant ji, I would like a quote for ${skuVal}. Name: ${nameVal}, Company: ${companyVal}`)}`;

        rfqStatus.classList.remove('hidden');
        rfqStatus.className = 'mb-6 p-4 rounded-xl text-sm font-technical-data bg-amber-50 border border-amber-300 text-amber-950 block';
        rfqStatus.innerHTML = `
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-amber-600 text-xl flex-shrink-0">info</span>
            <div>
              <strong class="font-bold block">Direct Factory Assistance Available</strong>
              <p class="mt-1 text-xs text-amber-900">Your quote details are ready. Please send them directly via:</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <a href="${mailHref}" class="inline-flex items-center gap-1.5 bg-deep-navy hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                  <span class="material-symbols-outlined text-sm">mail</span>
                  <span>Send via Email</span>
                </a>
                <a href="${waHref}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                  <span class="material-symbols-outlined text-sm">chat</span>
                  <span>Chat on WhatsApp (+91 8976557664)</span>
                </a>
              </div>
            </div>
          </div>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText || `
          SUBMIT QUOTE REQUEST
          <span class="material-symbols-outlined text-[18px]">send</span>
        `;
      }
    }
  });
});
