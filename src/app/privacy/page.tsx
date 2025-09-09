import Link from 'next/link';
import { blue, pink } from '../utils/colors';

const Privacy = () => {
  return (
    <div
      className={`flex flex-col justify-center justify-items-center text-justify`}
    >
      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl text-xl">
          <h1 className="text-center text-2xl mb-4">
            Skyfox Personal Development & Coaching Privacy Policy (Simple)
          </h1>

          <h6 className="text-center text-sm mb-6">
            Last updated: September 07, 2025
          </h6>

          <p className="mb-4">
            This is the simplified Privacy Policy for the Skyfox Personal
            Development & Coaching website (skyfoxcoaching.com). You can
            download the full detailed privacy policy{' '}
            <Link href="/skyfox-pp.pdf" target="_blank">
              <u>
                <strong>here</strong>
              </u>
            </Link>
            , but this page will give you an overview of the important parts!
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center p-8 ${pink}`}>
        <div className="w-3xl text-xl">
          <ul className="list-disc text-lg">
            <li>
              We collect no analytics or usage data and do not include any
              cookies on this website, either our own or third party cookies.
            </li>
            <li>
              Data you submit using the contact form at{' '}
              <Link href="/contact" target="/blank">
                <u>skyfoxcoaching.com/contact</u>
              </Link>{' '}
              is collected in order to respond to you or otherwise handle any
              request you make using the form.
            </li>
            <li>
              Your data is kept as long as required to handle contracts,
              potential legal requests, or other necessary business functions.
            </li>
            <li>
              Your data is kept safe using appropriate security measures (in
              other words, end-to-end encryption on an email and local storage
              on a work computer with security such as antivirus to prevent
              unauthorized access).
            </li>
            <li>
              This privacy policy may be updated at any time. Any updates will
              be reflected on this page.
            </li>
          </ul>
        </div>
      </section>

      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl text-xl">
          <p>
            And that&apos;s it! If you want to read the full terms of use, feel
            free to.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
