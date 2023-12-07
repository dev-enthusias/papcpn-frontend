import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className='text-sm text-white bg-blue-950'>
      <div className='lg:flex lg:flex-row-reverse items-start lg:gap-x-4 mb-'>
        <article className='bg-blue-900 px-6 pb-5 py-10 mb-10 lg:mb-0 lg:w-2/5'>
          <h3 className='uppercase font-bold text-xl mb-4'>
            subscribe to papcpn newsletter
          </h3>
          <p className='mb-6'>
            The newsletter from PAPCPN, including new job opening from across
            the physiology profession...
          </p>

          <form className='mb-6'>
            <div className='mb-2'>
              <input
                type='text'
                name='subscriber-name'
                placeholder='Full Name...'
                required
                className='appearance-none w-full p-2 focus:outline-none placeholder:text-white bg-transparent border border-white'
              />
            </div>

            <div className='mb-4'>
              <input
                type='text'
                required
                name='subscriber-email'
                placeholder='Your Email...'
                className='appearance-none w-full p-2 focus:outline-none placeholder:text-white bg-transparent border border-white'
              />
            </div>

            <button className='bg-white text-blue-900 px-6 py-3 font-bold capitalize'>
              Subscribe
            </button>
          </form>

          <p className='text-[.7rem]'>
            By subscribing to our mailing list, you agree to us contacting you
            by email with the PAPCPN news and update. We will never share your
            information.
          </p>
        </article>

        <section className='lg:grid lg:grid-cols-2 lg:pt-10 lg:px-10 px-6 gap-x-4 leading-7'>
          <section className='mb-8'>
            <h3 className='text-lg font-semibold'>Contact Details</h3>
            <hr className='border-none h-1 bg-gradient-to-r from-pink-500 to-20% to-white from-20% mb-2' />
            <div className='mb-4'>
              <h3 className='capitalize mb-1 font-medium'>call us</h3>
              <Link
                to='tel:+2348163690134'
                className='flex items-center gap-x-2'
              >
                <FiPhone className='text-lg' />
                +234 816 369 0134
              </Link>
              <Link
                to='tel:+2348035077332'
                className='flex items-center gap-x-2'
              >
                <FiPhone className='text-lg' />
                +234 803 507 7332
              </Link>
              <Link
                to='https://wa.me/09028875005'
                className='flex items-center gap-x-2'
              >
                <BsWhatsapp className='text-lg' />
                +234 902 887 5005
              </Link>
            </div>
            <div>
              <h3 className='font-medium mb-1 capitalize'>PAPCPN offices</h3>
              <address className='mb-2 not-italic'>
                <span className='flex items-center gap-x-2'>
                  <HiOutlineBuildingOffice2 className='text-lg' /> PAPCPN
                  Secretariat:
                </span>
                N0: 19 Enugu Onitsha Road By Nkpor Junction, Anambra State.
                Postal Code; 434101
              </address>
              <address className='mb-2 not-italic'>
                <span className='flex items-center gap-x-2'>
                  <HiOutlineBuildingOffice2 className='text-lg' /> Kogi Office:
                </span>
                Clinical Electrophysiology Unit, Federal Teaching Hospital,
                Lokoja, Kogi State.
              </address>
            </div>
            <div className='mb-2'>
              <p>
                <span>IT</span>: 160813
              </p>
              <p className='sm:mb-2'>
                <span>Incorporation</span>: Under Federal Republic of Nigeria,
                Abuja.
              </p>
            </div>
          </section>

          <section className='mb-10'>
            <section>
              <h3 className='text-lg font-semibold'>Useful Links</h3>
              <hr className='border-none h-1 bg-gradient-to-r from-pink-500 to-20% to-white from-20% mb-4' />

              <ul className='capitalize leading-7 flex-col flex mb-5'>
                <li className='hover:underline'>
                  <Link to='./index.html'>Home</Link>
                </li>
                <li className='hover:underline'>
                  <Link to='./src/pages/news.html'>news</Link>
                </li>
                <li className='hover:underline'>
                  <Link to='./src/pages/about.html'>about us</Link>
                </li>
                <li className='hover:underline'>
                  <Link to='./src/pages/standard.html'>standard</Link>
                </li>
                <li className='hover:underline'>
                  <Link to='./src/pages/contact.html'>contact us</Link>
                </li>
              </ul>
            </section>

            <section>
              <h3 className='font-semibold text-lg'>Socials</h3>
              <hr className='border-none h-1 bg-gradient-to-r from-pink-500 to-20% to-white from-20% mb-4' />
              <div className='flex gap-3 items-start'>
                <Link
                  to='https://wa.me/+2349028875005'
                  className='bg-blue-800 p-1 inline-block'
                >
                  <BsWhatsapp className='text-2xl' />
                </Link>
                <Link
                  to='https://www.facebook.com/profile.php?id=100070572992076&mibextid=ZbWKwL'
                  className='bg-blue-800 p-1 inline-block'
                >
                  <CgFacebook className='text-2xl' />
                </Link>
                <Link
                  to='https://twitter.com/Clinical_Phy_NG'
                  className='bg-blue-800 p-1 inline-block'
                >
                  <RiTwitterXFill className='text-2xl' />
                </Link>
              </div>
            </section>
          </section>
        </section>
      </div>

      <div className='px-6 lg:px-10 py-3 text-gray-400'>
        <p>© {new Date().getFullYear()} Nigerian Clinical Physiologists</p>
      </div>
    </footer>
  );
}
