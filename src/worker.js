export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API route for RFQ quote / Contact request
    if (url.pathname === '/api/quote' || url.pathname === '/api/rfq') {
      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const { sku, finish, email, phone, notes, name, company } = body;

          const apiKey = 
            env?.RESEND_API_KEY || 
            (typeof globalThis !== 'undefined' ? globalThis.RESEND_API_KEY : undefined) ||
            (typeof process !== 'undefined' && process.env ? process.env.RESEND_API_KEY : undefined);

          if (!apiKey) {
            return new Response(JSON.stringify({ 
              success: false, 
              error: 'RESEND_API_KEY is not configured in Cloudflare environment. Please email us directly at sales@njenterprisesgroup.in or reach out on WhatsApp.' 
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
              subject: `Inquiry / RFQ: ${sku || 'Product Inquiry'} - ${company || name || 'Client'}`,
              html: `
                <h2>New Inquiry Received</h2>
                <ul>
                  <li><strong>Product / Inquiry Type:</strong> ${sku || 'General Inquiry'}</li>
                  <li><strong>Option / Source:</strong> ${finish || 'Standard'}</li>
                  <li><strong>Name:</strong> ${name || 'N/A'}</li>
                  <li><strong>Company:</strong> ${company || 'N/A'}</li>
                  <li><strong>Client Email:</strong> ${email || 'N/A'}</li>
                  <li><strong>Client Phone:</strong> ${phone || 'N/A'}</li>
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
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (error) {
          return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }
      return new Response('Method Not Allowed', { status: 405 });
    }

    // Serve static frontend assets from dist/
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      // Fallback to custom 404 page
      const notFoundUrl = new URL('/404.html', request.url);
      const notFoundResponse = await env.ASSETS.fetch(notFoundUrl);
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers
      });
    }

    return response;
  }
};
