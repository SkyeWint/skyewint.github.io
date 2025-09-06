import { blue, pink } from '../utils/colors';

const About = () => {
  return (
    <div
      className={`flex flex-col justify-center justify-items-center text-justify`}
    >
      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl flex flex-col">
          <div className="flex h-75 items-center justify-between bg-[url(/skyfox2.webp)] bg-no-repeat bg-size-[17rem] bg-right">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-4xl text-center font-semibold">My values</h2>

              <div className="flex flex-col items-center">
                <p className="text-xl py-2">
                  For my entire adult life, I&apos;ve believed in the importance
                  of self-care and accommodation, balanced with personal
                  discipline and working effectively. Throughout my work in
                  university, personal volunteering, and my professional career,
                  these values have stuck with me and developed into a nuanced
                  outlook on navigating a difficult world.
                </p>
              </div>
            </div>

            <div className="md:w-sm lg:w-2xs shrink-0">&nbsp;</div>
          </div>
        </div>
      </section>

      <section className={`w-full flex justify-center ${blue} p-6`}>
        <div className="w-3xl flex flex-col items-center text-xl">
          <p className="pb-4">
            Having practically grown up on the internet, I know exactly how much
            it can disrupt living a stable and healthy lifestyle. I believe in
            encouraging people to set their own personal boundaries and develop
            their own individualized methods to self-accommodate and control the
            risks internet culture can bring.
          </p>

          <p className="pb-4">
            For over 4 years, I&apos;ve volunteered and put effort into building
            healthy and mutually supportive communities and friendships. I bring
            my values into every type of work I do and every relationship I
            have, to become a better friend, partner, and coach.
          </p>
        </div>
      </section>

      <section className={`w-full flex justify-center ${pink} p-6`}>
        <div className="w-3xl flex flex-col items-center">
          <h3 className="text-3xl text-center font-semibold tracking-wide pb-4">
            My Experience & Background
          </h3>

          <p className="text-xl tracking-wide pb-4">
            I provide substantial professional and volunteered experience
            working with LGBTQIA+ and neurodiverse people, particularly those
            with ADHD, Autism, PTSD, and mood disorders such as depression and
            bipolar disorder. While coaching is not a substitute for therapy, I
            can provide coaching that accommodates for these identities and
            conditions effectively and compassionately. Here is a short summary
            of my experience:
          </p>

          <ul className="list-disc text-lg">
            <li>
              Direct service provider for individuals with developmental and
              intellectual disabilities at Independent Environments Inc.
            </li>

            <li>
              Owner and major contributor to community resources of The Neuro
              Cafe, an online mutual support group for autistic individuals on
              the instant chat app Discord. You can join it{' '}
              <u>
                <a href="https://discord.gg/3SPYDceugv">here</a>
              </u>
            </li>

            <li>
              Bachelor&apos;s Degree in Psychology with a focus in
              psychopathology studies, including conducting a guest lecture
              about Autism Spectrum Disorder and associated challenges.
            </li>

            <li>
              Personal experience as a person with Autism and ADHD, having
              handled my own challenges effectively.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
