import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import secretary from '../assets/secretary.jpeg';
import provost from '../assets/provost.jpeg';
import president from '../assets/president.jpeg';
import vicepresident from '../assets/vicepresident.jpeg';
import financial from '../assets/financial.jpeg';

export default function About() {
  const executive = [
    {
      photo: president,
      name: 'Okeke Ugochukwu',
      pos: 'President',
    },
    {
      photo: vicepresident,
      name: 'Nnamdi Ejieh',
      pos: 'Vice President',
    },
    {
      photo: secretary,
      name: 'Mary Obiechina',
      pos: 'Secretary',
    },
    {
      photo: financial,
      name: 'Adewoye Oluwafemi',
      pos: 'Financial Secretary',
    },
    {
      photo: provost,
      name: 'Roy Uchefuna',
      pos: 'Provost',
    },
  ];

  const objectives = [
    'To maintain a high standard of professional ethics and discipline among members',
    'To promote legislation for the enhancement of the image of the profession, this includes the interest of the profession and professionals in Nigeria.',
    'To calculate and disseminate statistical scientific and other information relating to clinical physiology and publish such in an official journal.',
    'To advise on labour conditions relating to clinical physiologists.',
    'To promote the roles of clinical physiologists in health care delivery system in Nigeria.',
    'To unite with all certified physiologists and foster standard Clinical Physiology Practice In Nigeria.',
  ];

  return (
    <>
      <Navbar />

      <main className='mb-2 mt-6 px-6 lg:px-12'>
        <h1 className='uppercase text-4xl mb-2 font-bold text-blue-950'>
          about us
        </h1>

        <section className='grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-10 lg:gap-x-20 mb-6'>
          <article className='mb-4 sm:col-span-2 sm:row-span-2'>
            <p className='text-justify'>
              Professional Association of Practicing Clinical Physiologists in
              Nigeria is a registered health professional association that
              unite, promote and represent the whole interest of Clinical
              physiologists (also known as Medical physiologists / Human
              physiologists / Physiological scientist / Physiologists) in
              Nigeria. Our aim and objectives are as follows;
            </p>
            <ul className='ml-5 list-disc'>
              {objectives.map((obj, i) => {
                return (
                  <li className='mb-2' key={i}>
                    {obj}
                  </li>
                );
              })}
            </ul>
          </article>

          <article className='mb-4 sm:col-span-1 sm:row-span-1'>
            <h2 className='font-semibold text-xl uppercase text-pink-700'>
              MISSION
            </h2>
            <p>
              Promoting professional identity and clinical excellence for
              clinical physiologists.
            </p>
          </article>

          <article className='sm:col-span-1 sm:row-span-1'>
            <h2 className='font-semibold text-xl uppercase text-pink-700'>
              Values
            </h2>
            <p>
              Care | Integrity | Competency | Quality | Continual Improvement |
              Respect.
            </p>
          </article>
        </section>

        <section className='mb-16'>
          <h2 className='text-lg capitalize text-blue-950 font-bold mb-2'>
            Meet members of PAPCPN NEC
          </h2>
          <hr className='border-none h-1 bg-gradient-to-r from-pink-500 to-20% to-blue-900 from-20% mb-4' />

          <section className='grid sm:max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[1290px]:grid-cols-5 place-items-center gap-y-5 md:gap-y-10'>
            {executive.map(member => {
              return (
                <div className='overflow-hidden w-60 text-center lg:text-left'>
                  <div className=''>
                    <div className='h-60 w-full rounded-full lg:rounded-none overflow-hidden'>
                      <img
                        src={member.photo}
                        alt={`The ${member.pos} of PAPCPN`}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <div>
                      <h3 className='font-semibold text-[1.1rem]'>
                        {member.name}
                      </h3>
                      <p className='text-slate-400 text-sm'>{member.pos}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

//
