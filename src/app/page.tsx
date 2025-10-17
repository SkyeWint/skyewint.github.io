import HeroCard from './components/common/heroCard';
import pages from './components/navigation/pages';
import { blue, pink } from './utils/colors';

const Home = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center">
      <section className={`w-full flex justify-center md:p-8 ${blue}`}>
        <div className="flex flex-col">
          <div className="flex h-125 md:h-75 relative items-center bg-[url(/skyfox3.webp)] bg-no-repeat md:bg-size-[17rem] bg-center md:bg-left bg-cover">
            <div className="hidden md:block md:w-sm lg:w-2xs shrink-0">
              &nbsp;
            </div>

            <div className="z-1 flex flex-col drop-shadow-md drop-shadow-black md:drop-shadow-none text-center text-white md:text-sky-950 items-center gap-35 md:gap-3">
              <h1 className="text-8xl md:text-[9rem] leading-[9rem] font-normal">
                Skyfox
              </h1>

              <div className="md:w-md flex flex-col items-center">
                <h2 className="text-4xl font-light tracking-wider py-2">
                  Personal Development & Coaching
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`w-full flex flex-col md:flex-row justify-center p-8 ${pink}`}
      >
        <HeroCard
          href={pages.about.url}
          imgUrl="/pic-in-frame-320.webp"
          text="Learn About Skye"
          pink
        />

        <HeroCard
          href={pages.booking.url}
          imgUrl="/journey-320.webp"
          text="Start Your Journey"
          pink
        />
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Empowering People of All Backgrounds to Thrive
          </h3>

          <ul className="list-disc text-lg p-2 md:p-0">
            <li>
              Accommodating and empowering for LGBTQ+ and neurodiverse people
            </li>

            <li>Break free from unhealthy habits and living patterns</li>

            <li>Reach your goals in stable and sustainable ways</li>

            <li>
              Take back your time and money from addictive and toxic media
            </li>
          </ul>
        </div>
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl flex flex-col gap-4 items-center font-semibold text-xl text-center ">
          <p>
            Everyone has the ability to make their lives better, to make their
            days brighter, to feel less stress from unfinished tasks. Sometimes
            we all just need a little push and a little support to get ourselves
            there.
          </p>

          <p>
            <em>I can be the support you need.</em>
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center ${pink} p-6`}>
        <div className="w-3xl flex flex-col gap-4 items-center text-xl text-center ">
          <div className="flex flex-col gap-2">
            <p>
              <em>
                &quot;Seldom in life do you meet someone with as much patience
                and understanding. Ms. Moore has helped me time and time again,
                with a calm, kind, guiding hand for over a decade now. I was
                quite lucky to have someone as knowledgeable and kind with me
                when I needed it.&quot;
              </em>
            </p>

            <p>
              - Beckett Ellis; <em>Georgia, United States</em>
            </p>
          </div>

          <div>
            <p>
              <em>
                &quot;I was feeling stuck in a rut, but Skye&apos;s coaching
                services helped me out of my funk. Their pragmatic approach to
                care was really refreshing and I always felt supported.
                It&apos;s like having your own sidekick. I made way more
                progress on my executive dysfunction in the first 2 sessions
                then I did in entire packages of therapy. I&apos;d recommend
                them to anyone in a heartbeat!&quot;
              </em>
            </p>

            <p>
              - Cleo Andersen; <em>Washington, United States</em>
            </p>
          </div>
        </div>
      </section>

      <section
        className={`w-full flex flex-col md:flex-row justify-center p-8 ${blue}`}
      >
        <HeroCard
          href={pages.booking.url}
          imgUrl="/journey-320.webp"
          text="Start Your Journey"
        />
      </section>
    </div>
  );
};

export default Home;
