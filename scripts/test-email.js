import 'dotenv/config';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey || apiKey === 're_xxxxxxxxx') {
  console.error('❌ Error: Please set your actual RESEND_API_KEY in .env before running this test.');
  process.exit(1);
}

const resend = new Resend(apiKey);

async function testEmail() {
  console.log('🚀 Sending test email via Resend API...');
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sahilss2652@gmail.com',
      subject: 'Test RFQ Notification - NJ Enterprises',
      html: `
        <h2>Test Email from NJ Enterprises Website</h2>
        <p>If you received this email, your Resend API key is working correctly!</p>
        <ul>
          <li><strong>SKU:</strong> 11-1</li>
          <li><strong>Selected Option:</strong> Standard Gray (RAL 7035)</li>
          <li><strong>Client Email:</strong> sahilss2652@gmail.com</li>
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
