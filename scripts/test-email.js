import 'dotenv/config';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey || apiKey === 're_xxxxxxxxx') {
  console.error('❌ Error: Please set your actual RESEND_API_KEY in .env before running this test.');
  process.exit(1);
}

const resend = new Resend(apiKey);
const recipientEmail = process.env.QUOTE_RECIPIENT_EMAIL || process.env.NOTIFICATION_EMAIL || 'shrikantcn@gmail.com';
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

async function testEmail() {
  console.log(`🚀 Sending test email via Resend API to ${recipientEmail} from ${fromEmail}...`);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: 'Test RFQ Notification - PlastoGuard',
      html: `
        <h2>Test Email from PlastoGuard Website</h2>
        <p>If you received this email, your Resend API key is working correctly!</p>
        <ul>
          <li><strong>SKU:</strong> 11-1</li>
          <li><strong>Selected Option:</strong> Standard Gray (RAL 7035)</li>
          <li><strong>Client Email:</strong> shrikantcn@gmail.com</li>
        </ul>
      `,
    });
    console.log('✅ Email sent successfully!');
    console.log('Response:', data);
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
  }
}

testEmail();
