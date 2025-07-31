import Image from 'next/image';
import Link from 'next/link';
import pages from './components/navigation/pages';
import BowSvg from './images/BowSvg';

interface HereCardProps {
  href: string;
  imgUrl: string;
  text: string;
}

const HeroCard = ({ href, imgUrl, text }: HereCardProps) => (
  <Link href={href}>
    <div className="mx-10 text-center text-2xl font-medium">
      <div className="hue-rotate-160 saturate-60 contrast-95 opacity-80">
        <Image className="sepia" alt="" src={imgUrl} width={360} height={360} />
      </div>

      <BowSvg className="m-auto scale-y-70 fill-sky-900" width={300} />

      <div className="text-center">{text}</div>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center text-sky-800 ">
      {/* <section className="w-full flex justify-center bg-linear-180 from-sky-500/20 to-sky-200/25 p-8"> */}
      <section className="w-full flex justify-center bg-sky-200 p-8">
        <div className="flex flex-col">
          <div className="flex h-75 items-center bg-[url(/skyfox.webp)] bg-no-repeat bg-size-[17rem] bg-left">
            <div className="md:w-sm lg:w-2xs">&nbsp;</div>
            <div className="flex flex-col text-center items-center gap-3">
              <h1 className="text-[9rem] leading-[9rem] font-normal">Skyfox</h1>

              <div className="w-md flex flex-col items-center">
                <h2 className="text-4xl font-light tracking-wider py-2">
                  Personal Development & Coaching
                </h2>
              </div>
            </div>
          </div>

          {/* <div className="border-dotted border-sky-900 border-b-1 my-5" /> */}

          {/* <h3 className="text-2xl text-center font-medium tracking-wide italic">
            Empowering Neurodiverse Individuals to Thrive
          </h3> */}
        </div>
      </section>

      {/* <section className="w-full h-3 bg-linear-180 from-sky-200/25 from-15% to-85% to-transparent" /> */}

      <section className="w-full flex justify-center text-pink-700  bg-pink-50 p-6">
        <div className="w-3xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide italic pb-4">
            Empowering People of all backgrounds to Thrive
          </h3>

          <ul className="list-disc text-lg">
            <li>
              Accommodating and empowering for LGBTQ+ and Neurodiverse people
            </li>
            <li>Break free from unhealthy habits and living patterns</li>
            <li>Reach your goals in stable and sustainable ways</li>
            <li>
              Take back your time and money from addictive and toxic media
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full flex justify-center bg-sky-200 p-8">
        <HeroCard
          href={pages.booking.url}
          imgUrl="/journey-320.webp"
          text="Start Your Journey"
        />

        <HeroCard
          href={pages.about.url}
          imgUrl="/tea-320.webp"
          text="Learn More"
        />
      </section>
    </div>
  );
};

export default Home;
