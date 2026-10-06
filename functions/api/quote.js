export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { sku, finish, email, notes, name, company } = body;

    // Retrieve environment variables
    const apiKey = 
      context.env?.RESEND_API_KEY || 
      (typeof globalThis !== 'undefined' ? globalThis.RESEND_API_KEY : undefined) ||
      (typeof process !== 'undefined' && process.env ? process.env.RESEND_API_KEY : undefined);

    const recipientEmail = 
      context.env?.QUOTE_RECIPIENT_EMAIL || 
      context.env?.NOTIFICATION_EMAIL || 
      (typeof globalThis !== 'undefined' ? (globalThis.QUOTE_RECIPIENT_EMAIL || globalThis.NOTIFICATION_EMAIL) : undefined) ||
      (typeof process !== 'undefined' && process.env ? (process.env.QUOTE_RECIPIENT_EMAIL || process.env.NOTIFICATION_EMAIL) : undefined) ||
      'shrikantcn@gmail.com';

    const fromEmail = 
      context.env?.FROM_EMAIL || 
      (typeof globalThis !== 'undefined' ? globalThis.FROM_EMAIL : undefined) ||
      (typeof process !== 'undefined' && process.env ? process.env.FROM_EMAIL : undefined) ||
      'onboarding@resend.dev';

    if (!apiKey) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'RESEND_API_KEY is not configured in Cloudflare environment. Please ensure it is added under Worker Settings > Variables and Secrets (or Pages Environment Variables).' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipientEmail,
        subject: `New RFQ: ${sku || 'Enclosure Product'} - ${company || name || 'Client'}`,
        html: `
          <h2>New Quote Request Received</h2>
          <ul>
            <li><strong>SKU:</strong> ${sku || 'N/A'}</li>
            <li><strong>Selected Finish / Option:</strong> ${finish || 'Standard'}</li>
            <li><strong>Name:</strong> ${name || 'N/A'}</li>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Client Email:</strong> ${email || 'N/A'}</li>
            <li><strong>Notes / Requirements:</strong> ${notes || 'None'}</li>
          </ul>
        `
      })
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(data.message || data.error?.message || 'Failed to send email via Resend API');
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

