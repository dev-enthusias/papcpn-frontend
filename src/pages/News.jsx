import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import flyer from '../assets/flyer.jpeg';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <div>
      <Navbar />

      <main className='px-6 py-10 lg:px-10'>
        <section>
          <h1 className='uppercase text-4xl mb-12 font-bold text-blue-950'>
            News
          </h1>
          <hr class='border-none h-1 bg-gradient-to-r from-violetred to-10% to-steelblue from-10% mb-2' />

          <article className='flex flex-col lg:flex-row items-center gap-x-12 text-gray-600 border text-[0.9rem] bg-green-100'>
            <div className='w-1/3'>
              <img src={flyer} alt='Conference flyer' />
            </div>
            <div className='w-3/5'>
              <h2 className='mb-4 text-2xl font-semibold text-green-900'>
                1st Annual Scientific National Conference 2023
              </h2>

              <p className='mb-4'>
                We are pleased to invite you to the 1st Annual Scientific
                National Conference PAPCPN. The conference will be held on{' '}
                <b>25th - 28th of October 2023</b> by 8:00AM at ASUU NAU
                Secretariat Awka Anambra State. The conference will feature
                presentations from leading experts in the field of clinical
                physiology, and notable professors in the field of Physiology as
                keynotes speakers as well as opportunities for networking,
                professional development and panel discussion. We are inviting
                all the Clinical Physiologists in Nigeria, members of our
                association, non-members of our association, researchers ,
                graduate, undergraduate Physiologists and other Health
                Professionals to attend the conference.
              </p>
              <p>
                Registration is now open.{' '}
                <Link to='/conference' className='underline hover:text-green-500'>Click here</Link> to register
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
