import Link from 'next/link';
import { blue, pink } from '../utils/colors';

const Tos = () => {
  return (
    <div
      className={`flex flex-col justify-center justify-items-center text-justify`}
    >
      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl text-xl">
          <h1 className="text-center text-2xl mb-4">
            Skyfox Personal Development & Coaching Website Terms of Use (Simple)
          </h1>

          <h6 className="text-center text-sm mb-6">
            Last updated: September 08, 2025
          </h6>

          <p className="mb-4">
            This is the simplified Terms of Use for the Skyfox Personal
            Development & Coaching website (skyfoxcoaching.com). You can
            download the full detailed Terms of Use{' '}
            <Link href="/skyfox-tos.pdf" target="_blank">
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
              Don&apos;t send violent, spam/junk, offensive, discriminatory,
              abusive, threatening, harassing, illegal, or otherwise unsavory
              messages through the contact form.
            </li>
            <li>
              Do not scrape website data, including for AI training purposes.
            </li>
            <li>
              We&apos;re not perfect and there may be errors on the website or
              it may not be updated instantly. Error corrections and updates
              will be done as soon as possible.
            </li>
            <li>
              While we will try our best to prevent it, we can&apos;t guarantee
              the website will not have errors (or that a hacker won&apos;t
              somehow inject a computer virus or malware) and to use the
              website, you understand that you are at sole risk for interacting
              with the website.
            </li>
            <li>
              These terms of use may be updated at any time. Any updates will be
              reflected on this page.
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

export default Tos;
