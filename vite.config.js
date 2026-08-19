import fs from 'fs';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { Resend } from 'resend';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Automatically discover all HTML entry points in the root directory
  const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
  const inputs = {};
  htmlFiles.forEach(file => {
    const key = file.replace(/\.html$/, '');
    inputs[key] = resolve(__dirname, file);
  });

  return {
    build: {
      rollupOptions: {
        input: inputs
      }
    },
    plugins: [
      {
        name: 'api-quote-dev-server',
        configureServer(server) {
          server.middlewares.use('/api/quote', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

                  if (!apiKey || apiKey === 're_xxxxxxxxx') {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({
                      success: false,
                      error: 'RESEND_API_KEY is not set or still default in .env file. Please update .env with your real Resend API key.'
                    }));
                    return;
                  }

                  const resend = new Resend(apiKey);
                  const result = await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: 'sahilss2652@gmail.com',
                    subject: `New RFQ: ${data.sku || 'Enclosure Product'} - ${data.company || data.name || 'Client'}`,
                    html: `
                      <h2>New Quote Request Received</h2>
                      <ul>
                        <li><strong>SKU:</strong> ${data.sku || 'N/A'}</li>
                        <li><strong>Selected Finish / Option:</strong> ${data.finish || 'Standard'}</li>
                        <li><strong>Name:</strong> ${data.name || 'N/A'}</li>
                        <li><strong>Company:</strong> ${data.company || 'N/A'}</li>
                        <li><strong>Client Email:</strong> ${data.email || 'N/A'}</li>
                        <li><strong>Notes / Requirements:</strong> ${data.notes || 'None'}</li>
                      </ul>
                    `
                  });

                  if (result.error) {
                    throw new Error(result.error.message || 'Resend API returned an error.');
                  }

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } catch (error) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: error.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ]
  };
});
