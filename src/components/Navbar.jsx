import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='flex justify-between items-center font-montserrat font-semibold px-6 py-1 lg:px-10 lg:py-2 top-0 left-0 w-full z-50 shadow-sm shadow-gray-200'>
      <div className='h-24 w-24 lg:w-28 lg:h-28'>
        <Link to={'/'}>
          <img
            src='/logo.png'
            alt='Papcpn logo'
            className='object-cover w-full h-full'
          />
        </Link>
      </div>

      <ul
        className={`lg:flex lg:items-center lg:gap-10 ${
          openMenu
            ? `flex flex-col items-start gap-10 top-[105px] absolute left-1/2 -translate-x-1/2 rounded-2xl w-4/5 bg-blue-950 text-white px-5 pt-5 z-50 pb-10`
            : 'hidden'
        }`}
      >
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/standard'>Standard</Link>
        </li>
        <li>
          <Link to='/contact'>Contact us</Link>
        </li>
        <li>
          <Link
            to='/register/select'
            className='lg:ml-12 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md lg:rounded-none font-open-sans'
          >
            Register
          </Link>
        </li>
      </ul>

      <button
        className='lg:hidden text-2xl border rounded-full p-2 bg-gradient-to-bl from-pink-500 to-blue-500 text-white'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </nav>
  );
}
