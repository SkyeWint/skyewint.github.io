'use client';

import { useState } from 'react';
import { blue, pink } from '../utils/colors';
import { allTimezones, useTimezoneSelect } from 'react-timezone-select';
import { sendEmail } from '../api/email';

const topics = {
  execFn: {
    label: 'Addressing Executive Functioning Challenges',
    isProgram: true,
    isQuestion: false,
  },
  flexible: {
    label: 'Flexible Coaching Appointments & Continued Support',
    isProgram: true,
    isQuestion: false,
  },
  services: {
    label: 'Question about services',
    isProgram: false,
    isQuestion: true,
  },
  website: {
    label: 'Website feedback',
    isProgram: false,
    isQuestion: true,
  },
  animals: {
    label: 'I have cute animals to share!',
    isProgram: false,
    isQuestion: false,
  },
  spam: {
    label: 'Solicitation or Sales: Note that there will be no response',
    isProgram: false,
    isQuestion: false,
  },
};

const references = {
  empty: '--',
  recommendation: 'Recommendation from friend/family',
  search: 'Search engine such as Google',
  socialMedia: 'Social media',
  video: 'Video or livestream',
  other: 'Other',
};

type TopicName = keyof typeof topics;
type ReferenceType = keyof typeof references;

export interface ContactFormData {
  topic: TopicName;
  firstName: string;
  lastName: string;
  firstNameLegal: string;
  lastNameLegal: string;
  reference: ReferenceType;
  referenceDetail: string;
  email: string;
  phoneCc: string;
  phone: string;
  timezone: string;
  availability: string;
  question: string;
  expectations: string;
  pastExperience: string;
  challenges: string;
  difficulties: string;
  links: string;
}

const emptyContactFormData: ContactFormData = {
  topic: 'execFn',
  firstName: '',
  lastName: '',
  firstNameLegal: '',
  lastNameLegal: '',
  reference: 'empty',
  referenceDetail: '',
  email: '',
  phoneCc: '',
  phone: '',
  timezone: '',
  availability: '',
  question: '',
  expectations: '',
  pastExperience: '',
  challenges: '',
  difficulties: '',
  links: '',
};

const FORM_FIELD_CONTAINER_CLASS = 'flex flex-col';
const INPUT_FORMAT_CLASS =
  'bg-white border-pink-300 hover:border-pink-700 focus:ring-pink-500 focus:border-pink-500 transition duration-150 border-1 rounded-lg p-2';

const Contact = () => {
  const [contactFormData, setContactFormData] = useState(emptyContactFormData);
  const { options: timezones } = useTimezoneSelect({
    labelStyle: 'original',
    timezones: {
      ...allTimezones,
    },
  });

  const handleChange =
    (field: keyof ContactFormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { value } = event.target;

      setContactFormData((data) => ({
        ...data,
        [field]: value,
      }));
    };

  const handleTopicChange = handleChange('topic');
  const handleReferenceChange = handleChange('reference');
  const handleReferenceDetailChange = handleChange('referenceDetail');
  const handlePhoneCcChange = handleChange('phoneCc');
  const handlePhoneChange = handleChange('phone');
  const handleTimezoneChange = handleChange('timezone');
  const handleAvailabilityChange = handleChange('availability');
  const handleQuestionChange = handleChange('question');
  const handleExpectationsChange = handleChange('expectations');
  const handlePastExperienceChange = handleChange('pastExperience');
  const handleChallengesChange = handleChange('challenges');
  const handleDifficultiesChange = handleChange('difficulties');
  const handleLinksChange = handleChange('links');

  const handleSubmit = () => {
    const formData = new FormData();

    for (const [k, v] of Object.entries(contactFormData)) {
      formData.set(k, v);
    }

    console.log(formData);
    sendEmail(formData);
  };

  return (
    <div className={`flex flex-col justify-center justify-items-center`}>
      <section
        className={`w-full flex text-justify justify-center p-8 ${blue}`}
      >
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
        </div>
      </section>
      <section className={`w-full flex justify-center p-8 ${pink}`}>
        <form
          className="w-xs lg:w-3xl sm:w-xl flex flex-col gap-5"
          // onSubmit={handleSubmit}
          action={handleSubmit}
        >
          <div className={FORM_FIELD_CONTAINER_CLASS}>
            <label htmlFor="topic">
              What would you like to contact me about?
            </label>
            <select
              className={`${INPUT_FORMAT_CLASS} h-10`}
              id="topic"
              onChange={handleTopicChange}
              value={contactFormData.topic}
            >
              {Object.entries(topics).map(([topicName, topic]) => (
                <option key={topicName} value={topicName}>
                  {topic.label}
                </option>
              ))}
            </select>
          </div>

          <div className={FORM_FIELD_CONTAINER_CLASS}>
            <p>How should I address you?</p>

            <div className={FORM_FIELD_CONTAINER_CLASS}>
              <label htmlFor="firstName">First name*</label>
              <input id="firstName" className={INPUT_FORMAT_CLASS} />
              <label htmlFor="lastName">Last name*</label>
              <input id="lastName" className={INPUT_FORMAT_CLASS} />
            </div>

            {topics[contactFormData.topic].isProgram ? (
              <div className={FORM_FIELD_CONTAINER_CLASS}>
                <label htmlFor="firstNameLegal">
                  Legal first name (if different)
                </label>
                <input id="firstNameLegal" className={INPUT_FORMAT_CLASS} />
                <label htmlFor="lastNameLegal">
                  Legal last name (if different)
                </label>
                <input id="lastNameLegal" className={INPUT_FORMAT_CLASS} />
              </div>
            ) : null}
          </div>

          <div className={FORM_FIELD_CONTAINER_CLASS}>
            <label htmlFor="email">Email address*</label>
            <input id="email" className={INPUT_FORMAT_CLASS} />
          </div>

          <div className={FORM_FIELD_CONTAINER_CLASS}>
            <label htmlFor="phoneCc">Phone number</label>
            <div className="flex">
              <input
                id="phoneCc"
                className={`${INPUT_FORMAT_CLASS} w-12`}
                onChange={handlePhoneCcChange}
                value={contactFormData.phoneCc}
              />

              <div className="p-2">-</div>

              <input
                id="phone"
                className={`${INPUT_FORMAT_CLASS} w-full`}
                onChange={handlePhoneChange}
                value={contactFormData.phone}
              />
            </div>
          </div>

          <div className={FORM_FIELD_CONTAINER_CLASS}>
            <label htmlFor="reference">How did you find me?</label>
            <select
              className={`${INPUT_FORMAT_CLASS} h-10`}
              id="reference"
              onChange={handleReferenceChange}
              value={contactFormData.reference}
            >
              {Object.entries(references).map(([type, label]) => (
                <option key={type} value={type}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {['socialMedia', 'video', 'other'].includes(
            contactFormData.reference
          ) ? (
            <div className={FORM_FIELD_CONTAINER_CLASS}>
              <label htmlFor="referenceDetail">
                {contactFormData.reference === 'other'
                  ? 'Please specify:'
                  : 'Which one?'}
              </label>
              <input
                className={`${INPUT_FORMAT_CLASS} h-10`}
                id="referenceDetail"
                onChange={handleReferenceDetailChange}
                value={contactFormData.referenceDetail}
              />
            </div>
          ) : null}

          {topics[contactFormData.topic].isProgram ? (
            <>
              <div className={FORM_FIELD_CONTAINER_CLASS}>
                <label htmlFor="timezone">Time zone*</label>
                <select
                  id="timezone"
                  className={`${INPUT_FORMAT_CLASS} inline`}
                  onChange={handleTimezoneChange}
                  value={contactFormData.timezone}
                >
                  {timezones.map((timezone) => (
                    <option key={timezone.value} value={timezone.value}>
                      {timezone.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={FORM_FIELD_CONTAINER_CLASS}>
                <label htmlFor="availability">Availability (hours)*</label>
                <input
                  id="availability"
                  className={INPUT_FORMAT_CLASS}
                  onChange={handleAvailabilityChange}
                  value={contactFormData.availability}
                />
              </div>

              <div className={FORM_FIELD_CONTAINER_CLASS}>
                <label htmlFor="expectations">
                  What are your expectations going into coaching?*
                </label>
                <textarea
                  id="expectations"
                  className={INPUT_FORMAT_CLASS}
                  onChange={handleExpectationsChange}
                  value={contactFormData.expectations}
                />
              </div>

              <div className={FORM_FIELD_CONTAINER_CLASS}>
                <label htmlFor="pastExperience">
                  Have you done personal development work or coaching before?*
                </label>
                <textarea
                  id="pastExperience"
                  className={INPUT_FORMAT_CLASS}
                  onChange={handlePastExperienceChange}
                  value={contactFormData.pastExperience}
                />
              </div>

              {contactFormData.topic === 'execFn' ? (
                <div className={FORM_FIELD_CONTAINER_CLASS}>
                  <label htmlFor="challenges">
                    Are there any specific executive functioning challenges you
                    would like to address with me?*
                  </label>
                  <textarea
                    id="challenges"
                    className={INPUT_FORMAT_CLASS}
                    onChange={handleChallengesChange}
                    value={contactFormData.challenges}
                  />
                </div>
              ) : null}

              {contactFormData.topic === 'flexible' ? (
                <div className={FORM_FIELD_CONTAINER_CLASS}>
                  <label htmlFor="difficulties">
                    Are there any specific executive functioning challenges you
                    would like to address with me?*
                  </label>
                  <textarea
                    id="difficulties"
                    className={INPUT_FORMAT_CLASS}
                    onChange={handleDifficultiesChange}
                    value={contactFormData.difficulties}
                  />
                </div>
              ) : null}
            </>
          ) : null}

          {topics[contactFormData.topic].isQuestion ? (
            <div className={FORM_FIELD_CONTAINER_CLASS}>
              <label htmlFor="question">What would you like to ask?*</label>
              <textarea
                id="question"
                className={INPUT_FORMAT_CLASS}
                onChange={handleQuestionChange}
                value={contactFormData.question}
              />
            </div>
          ) : null}

          {contactFormData.topic === 'animals' ? (
            <div className={FORM_FIELD_CONTAINER_CLASS}>
              <label htmlFor="links">Link me the cuties!!*</label>
              <textarea
                id="links"
                className={INPUT_FORMAT_CLASS}
                placeholder="lol"
                onChange={handleLinksChange}
                value={contactFormData.links}
              />
            </div>
          ) : null}

          <button className="border-">Send message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
