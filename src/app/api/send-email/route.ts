
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_7w4PwWYH_6FTjuyZoahT1jQsuKZoXncwE');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the request data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email and message are required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Send notification email to site owner
    const ownerEmailResult = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Use your verified domain in production
      to: 'manishoraon608@gmail.com', // Your email address
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>', // Use your verified domain in production
      to: email,
      subject: 'Thank you for contacting me',
      text: `
        Hi ${name},

        Thank you for reaching out. I've received your message and will get back to you as soon as possible.

        For your records, here's a copy of your message:
        "${message}"

        Best regards,
        Manish
      `,
    });

    if (ownerEmailResult.error || userEmailResult.error) {
      console.error('Resend API error:', ownerEmailResult.error || userEmailResult.error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error in send-email handler:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
