import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

import members from '../assets/members.jpeg';
import physiologist from '../assets/physiologists.jpeg';
import partner1 from '../assets/partner1.jpeg';
import flyer from '../assets/flyer.jpeg';
import executives from '../assets/executives.jpeg';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: partner1,
      caption: '',
    },
    {
      id: 2,
      image: executives,
      caption:
        'Physiological Society Of Nigeria (Psn) & Professional Association Of Practicing Clinical Physiologists In Nigeria (PAPCPN) Executives Members.',
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className='px-6 mb-20'>
        <Upcoming />
      </section>

      <section className='flex flex-col gap-y-4 lg:flex-row justify-between items-center lg:px-10 px-6 mb-20 lg:mb-32'>
        <div className='w-full lg:w-1/2 order-2'>
          <h2 className='text-xl lg:text-2xl font-semibold mb-1 lg:mb-4 text-pink-700'>
            Who is a Clinical Physiologist?
          </h2>
          <p className='text-sm lg:text-base leading-6 lg:leading-7'>
            Clinical physiologists, part of the healthcare science field within
            'Physiological Science', use advanced equipment in healthcare
            settings like hospitals and clinics to diagnose, treat, and monitor
            diseases across all age groups, even in community and educational
            settings. In Nigeria, the PAPCPN serves as a professional
            association for clinical physiologists, covering diverse
            disciplines, including cardiac, gastrointestinal, reproductive,
            neuro, renal, respiratory, exercise/sports physiology, and
            paramedical/emergency services.
          </p>
        </div>
        <div className='w-full lg:w-[30rem] order-1'>
          <img
            src={physiologist}
            alt='Some physiologist in a lab learning how to use complex equipment'
          />
        </div>
      </section>

      <section className='flex flex-col gap-y-4 lg:flex-row justify-between items-center px-6 lg:px-10 mb-20 lg:mb-32'>
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
          <h2 className='text-xl lg:text-2xl font-semibold mb-1 lg:mb-4 text-pink-700'>
            Why Become a Member?
          </h2>
          <p className='text-sm lg:text-base mb-2 leading-6 lg:leading-7'>
            By joining PAPCPN today, you will be part of a growing and
            collaborative positive change for clinical physiologists in Nigeria.
            Your association with PAPCPN signifies that you are a health
            professional that is synonymous with clinical excellence.
          </p>
          <ul className='ml-4 list-disc leading-6 text-sm lg:text-base lg:leading-7 mb-4'>
            <li>
              Obtain public recognition as a Practicing Clinical Physiologist
              (PCP)
            </li>
            <li>Be attractive to and be found by future employers</li>
            <li>Promote and enhance standards of clinical excellence</li>
          </ul>
          <Link
            to='/register/select'
            className='inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md lg:rounded-none font-open-sans'
          >
            Register
          </Link>
        </div>
        <div className='w-full lg:w-[30rem] order-1 lg:order-2'>
          <img
            src={members}
            alt='Some associate members of the PAPCPN organization'
          />
        </div>
      </section>

      <section className='flex flex-col-reverse lg:flex-row px-6 lg:px-10  justify-center items-center gap-10 mb-20 lg:mb-32'>
        <article className='flex items-center justify-center bg-white'>
          <Carousel autoSlide={true}>
            {slides.map(slide => {
              return (
                <img
                  src={slide.image}
                  alt={slide.caption}
                  key={slide.id}
                  className='min-w-[22rem] object-contain'
                />
              );
            })}
          </Carousel>
        </article>
        <article className='max-w-md bg-green-900 rounded-3xl px-5 pt-10 pb-5 text-white'>
          <h2 className='text-xl lg:text-2xl font-semibold mb-1 lg:mb-4'>
            Clinical Physiologist Register
          </h2>
          <p className='mb-6'>
            To find a Nigerian clinical physiologist registered under the PAPCPN
            association, you can search the "Public Register of Nigerian
            Clinical Physiologists."
          </p>
          <Link className='inline-block border border-transparent bg-green-700 w-full lg:w-auto text-center lg:px-5 py-3 rounded-3xl font-semibold lg:rounded-xl hover:bg-transparent transition-all duration-700 hover:border-white hover:text-white text-white'>
            Search here
          </Link>
        </article>
      </section>

      <Footer />
    </>
  );
}
