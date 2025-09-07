'use server';
// import { NextResponse } from 'next/server';
import mailgun from 'mailgun-js';

const mailgunClient = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export const sendEmail = async (formData: FormData) => {
  console.log({ formData });
  // return;
  const fromEmail = formData.get('email') as string;
  const toEmail = 'hiitsluna5@gmail.com';
  const senderName = 'Your Sender Name';
  const emailSubject = 'Your Email Subject';
  const replyToEmail = 'your_reply_to_email@your.domain.com';

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    sender: senderName,
    subject: emailSubject,
    replyTo: replyToEmail,
    text: JSON.stringify(formData),
  };

  try {
    if (toEmail) {
      mailgunClient.messages().send(mailOptions, async (error, body) => {
        console.log(body);

        if (body.message === 'Queued. Thank you.') {
          console.log('');
          console.log('##################################');
          console.log('Email To :::', toEmail);
          console.log('Status ::: SUCCESS');
          console.log('Date :::', new Date().toLocaleString());
          console.log('##################################');
          console.log('');
        } else {
          console.log('');
          console.log('##################################');
          console.log('Email To :::', toEmail);
          console.log('Status ::: FAILED');
          console.log('Date :::', new Date().toLocaleString());
          console.log('Response :::');
          console.log(body);
          console.log('##################################');
          console.log('');
        }
      });
    }

    console.log('email sent!');
    // return NextResponse.json(
    //   { message: 'Email sent successfully' },
    //   { status: 200 }
    // );
  } catch (error) {
    console.log(error);

    // return NextResponse.json(
    //   { message: `Internal Server Error ${error}` },
    //   { status: 500 }
    // );
  }
};
