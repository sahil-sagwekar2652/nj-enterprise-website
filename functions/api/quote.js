export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { sku, finish, email, notes, name, company } = body;

    // Retrieve RESEND_API_KEY from environment variables
    const apiKey = context.env?.RESEND_API_KEY || (typeof process !== 'undefined' ? process.env?.RESEND_API_KEY : null);
    if (!apiKey) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'RESEND_API_KEY is not configured in Cloudflare environment.' 
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
        from: 'onboarding@resend.dev',
        to: 'sahilss2652@gmail.com',
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

