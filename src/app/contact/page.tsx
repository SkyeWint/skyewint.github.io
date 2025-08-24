import { blue, pink } from '../utils/colors';

const About = () => {
  return (
    <div
      className={`flex flex-col justify-center justify-items-center text-justify ${pink}`}
    >
      <section className={`w-full flex justify-center p-8 ${blue}`}>
        <div className="w-3xl flex flex-col">
          <div className="flex h-75 items-center justify-between bg-[url(/skyfox2.webp)] bg-no-repeat bg-size-[17rem] bg-right">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xl py-2">
                Want more information about my coaching services? Any questions
                or concerns about the website? Want to send me cute animal
                pictures or a cute animal video? Simply fill out the form below
                to get in touch!
              </p>
            </div>

            <div className="md:w-sm lg:w-2xs shrink-0">&nbsp;</div>
          </div>

          <div>asdasjdkasjd</div>
        </div>
      </section>
    </div>
  );
};

export default About;
