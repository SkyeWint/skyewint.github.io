'use client';
import HeroCard from '../components/common/heroCard';
import pages from '../components/navigation/pages';
import { useIsUserFromTheUsCaOrAusContext } from '../context/IsUserFromTheUsAuOrCaContext';
import { blue, pink } from '../utils/colors';

const WorkWithMe = () => {
  const { userIsFromTheUsCaOrAus } = useIsUserFromTheUsCaOrAusContext();

  return (
    <div className="flex flex-col justify-center justify-items-center text-justify">
      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl flex flex-col items-center text-center">
          <h1 className="text-5xl py-2">How does coaching work, anyway?</h1>
        </div>
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl flex flex-col items-center text-xl">
          <p className="pb-4">
            Coaching is a relationship built on teamwork. We meet regularly
            (once per week or less regularly on an as-needed basis) to discuss
            where you&apos;re at in developing your chosen skills and handling
            whatever challenges brought you to work with me. We&apos;ll talk
            about why exactly you&apos;re having the troubles you are and work
            on productive introspection and reflection. In addition, we&apos;ll
            establish specific techniques and strategies that can be applied to
            help you through your challenges, working together to personalize
            them to your specific needs. No matter where you&apos;re at, going
            through coaching with me will be a place for you to better
            understand yourself and build confidence in how you approach the
            world.
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center ${pink} p-6`}>
        <div className="w-3xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Basic details for coaching sessions:
          </h3>

          <ul className="list-disc text-lg p-2 md:p-0">
            <li>
              {userIsFromTheUsCaOrAus
                ? 'I provide coaching to clients in the US in addition to other countries, from my home in the Netherlands.'
                : 'I am based in the Netherlands and provide coaching for clients in any country.'}
            </li>
            <li>Coaching sessions are conducted in English.</li>
            <li>Typical sessions are 60 minutes long.</li>
            <li>
              If you feel anxious or otherwise have trouble appearing on camera
              or speaking out loud, I am happy to accommodate for you.
            </li>
          </ul>
        </div>
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Ready to start your journey?
          </h3>
          <p className="text-xl tracking-wide pb-4">
            Please complete the intake questions on the contact page thoroughly.
            I will personally review your responses and consider how I can best
            assist you.
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <HeroCard
          href={pages.contact.url}
          imgUrl="/journey-320.webp"
          text="Book your first coaching session now!"
        />
      </section>

      <section className={`w-full flex justify-center ${pink} p-6`}>
        <div className="w-3xl text-xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Addressing Executive Functioning Challenges
          </h3>

          <p className="pb-4">
            Does it feel like you get stuck, forgetting or feeling unable to do
            important things like cooking, cleaning, or spending time with
            friends? Does the time seem to slip by and you only realize it too
            late? Do you end up spending money on ordering food or eating too
            many snacks, going past your financial budget?
          </p>

          <p className="pb-4">
            If you answered &quot;yes&quot; to any of these questions, this
            coaching program is exactly what you need. A course of 12 regular
            weekly appointments will keep you accountable to your goals and help
            you build lasting productive habits over the full program period. If
            you have mental conditions such as ADHD or Autism, you can rest
            assured that you will build personalized strategies not only through
            tried and tested methods, but with understanding by a coach that has
            their own life experience handling similar challenges.
          </p>

          <p>
            Program schedule: 12 weeks at regular times, 12 Individual,
            Hour-long Coaching Sessions
          </p>
          <p className="w-full">
            Program price:{' '}
            <strong>
              {userIsFromTheUsCaOrAus
                ? '$1200 ($100 per session)'
                : '€1000 ($83.33 per session)'}
            </strong>
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl text-xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Flexible Coaching Appointments & Continued Support
          </h3>

          <p className="pb-4">
            For those who would like support and coaching in another area of
            their lives, to maintain meetings after completing a program for
            assistance in maintaining progress during or after times of
            difficulty, or to have appointments on a more infrequent basis than
            weekly, this option provides flexibility and allows scheduling on a
            per-appointment basis.
          </p>

          <p>
            Program scheduling: Individual coaching sessions, typically weekly,
            biweekly, or monthly.
          </p>

          <p className="w-full pb-4">
            Per-session price:{' '}
            <strong>
              {userIsFromTheUsCaOrAus ? '$120' : '€100'} per session
            </strong>
          </p>

          <p>
            If you&apos;re ready to bring your life on track, I&apos;m ready to
            help. My coaching is available for you any time, offering lived
            experience, effective techniques, and empathetic support to help you
            live your best life!
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center ${pink} p-6`}>
        <div className="w-3xl text-xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            Introductory Session
          </h3>

          <p className="pb-4">
            Do you think going through coaching with me will be good for you,
            but you aren&apos;t quite sure how to start or want to get a sample
            of how well we communicate in an actual session?
          </p>

          <p className="pb-4">
            No problem! This half-price intro session will involve getting to
            know each other, going through how coaching works and what I&apos;ll
            bring to the table, as well as hearing out your general struggles -
            as much as you feel willing to talk about them!
          </p>

          <p className="w-full">
            Price: <strong>{userIsFromTheUsCaOrAus ? '$60' : '€50'}</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkWithMe;
