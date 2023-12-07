import { Link } from 'react-router-dom';
import stethoscope from '../assets/stethoscope.png';

export default function Hero() {
  return (
    <header className='lg:h-[calc(100vh-128px)] h-[calc(100vh-105px)] flex justify-center flex-col gap-y-6 px-6 lg:px-10 text-center font-montserrat mb-20 relative'>
      <h1 className='text-[1.625rem] lg:text-[5rem] lg:leading-[5rem] text-blue-950 font-semibold lg:font-medium uppercase'>
        Nigerian <span className='block'>Clinical Physiologist</span>
        <span className='block capitalize text-base text-pink-700 lg:text-4xl'>
          health professional association
        </span>
      </h1>
      <p className='text-sm lg:text-base lg:max-w-2xl lg:mx-auto'>
        Join a professional association where all clinical Physiologists
        register, unite, promote, and maintain global standard of clinical
        Physiological practice in Nigeria.
      </p>
      <div>
        <Link
          to='/register/select'
          className='inline-block lg:hidden bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md lg:rounded-none font-semibold font-open-sans'
        >
          Register
        </Link>
      </div>
      <img
        src={stethoscope}
        alt='Picture of a stethoscope'
        className='lg:h-[calc(100vh-128px)] h-[calc(100vh-105px)] absolute right-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-20 blur-[px]'
      />
    </header>
  );
}
