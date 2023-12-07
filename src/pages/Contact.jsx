import Navbar from '../components/Navbar';

import { BsWhatsapp } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Navbar />

      <main class='px-6 lg:px-10 pt-10 text-blue-950'>
        <div class='md:w-1/2'>
          <h1 class='text-4xl font-semibold mb-2'>
            Get in touch with us for more enquiries
          </h1>
          <p class='mb-5'>
            If you need help or have more questions we are here for you
          </p>
        </div>

        <div class='sm:flex sm:justify-between items-center mb-10'>
          <form class='sm:w-2/5 rounded-xl p-5 h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <ul>
              <li class='mb-8'>
                <span class='px-2 mb-2 border border-blue-950 rounded-full inline-block'>
                  01
                </span>
                <div class='flex flex-col border-b border-b-blue-950 pb-2'>
                  <label for='name' class='mb-2 block'>
                    What's your name?
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='fullname'
                    placeholder='Type your full name'
                    class='block w-full focus:outline-none bg-transparent text-gray-700'
                    required
                  />
                </div>
              </li>

              <li class='mb-8'>
                <span class='px-2 mb-2 border border-blue-950 rounded-full inline-block'>
                  02
                </span>
                <div class='flex flex-col border-b border-b-blue-950 pb-2'>
                  <label for='email' class='mb-2 block'>
                    What's your email address?
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Type your email'
                    class='appearance-none block w-full focus:outline-none bg-transparent'
                  />
                </div>
              </li>

              <li class='mb-8'>
                <span class='px-2 mb-2 border border-blue-950 rounded-full inline-block'>
                  03
                </span>
                <div class='flex flex-col border-b border-b-blue-950 pb-2'>
                  <label for='number' class='mb-2 block'>
                    What's your phone number?
                  </label>
                  <input
                    type='number'
                    id='number'
                    name='phone-no'
                    placeholder='Type your phone number'
                    class='appearance-none block w-full focus:outline-none bg-transparent'
                    required
                  />
                </div>
              </li>

              <li class='mb-8'>
                <span class='px-2 mb-2 border border-blue-950 rounded-full inline-block'>
                  04
                </span>
                <div class='flex flex-col border-b border-b-blue-950 pb-2'>
                  <label for='message' class='mb-2 block'>
                    What's your question?
                  </label>
                  <input
                    type='text'
                    id='message'
                    name='message'
                    placeholder='Type your full name'
                    class='appearance-none block w-full focus:outline-none bg-transparent'
                    required
                  />
                </div>
              </li>

              <li>
                <button class='flex items-center py-2 border bg-blue-950 text-white rounded-full px-4 capitalize'>
                  send message
                  <span class='mt-2 ml-2'>
                    <ion-icon name='arrow-redo-outline'></ion-icon>
                  </span>
                </button>
              </li>
            </ul>
          </form>

          <div class='sm:w-2/5'>
            <section class='mb-8'>
              <h3 class='uppercase mb-2 font-semibold text-pink-700'>
                call us
              </h3>
              <a href='tel:+2348163690134' class='block'>
                +234 816 369 0134
              </a>
              <a href='tel:+2348035077332'>+234 803 507 7332 </a>
            </section>

            <section class='mb-8'>
              <h3 class='uppercase mb-2 font-semibold text-pink-700'>
                papcpn offices
              </h3>
              <address class='not-italic mb-2'>
                Kogi Office | Clinical Electrophysiology Unit, Federal Teaching
                Hospital, Lokoja, Kogi State.
              </address>
              <address class='not-italic'>
                PAPCPN Secretariat | 19 Enugu Onitsha Road By Nkpor Junction,
                Anambra State. Postal Code; 434101
              </address>
            </section>

            <section>
              <h3 class='uppercase mb-2 font-semibold text-pink-700'>
                Socials
              </h3>
              <div class='flex gap-3'>
                <Link
                  to='https://wa.me/+2349028875005'
                  target='_blank'
                  class='p-2'
                >
                  <span>
                    <BsWhatsapp className='text-2xl' />
                  </span>
                </Link>
                <Link
                  to='https://www.facebook.com/profile.php?id=100070572992076&mibextid=ZbWKwL'
                  target='_blank'
                  class='p-2'
                >
                  <span>
                    <CgFacebook className='text-2xl' />
                  </span>
                </Link>
                <Link
                  to='https://twitter.com/Clinical_Phy_NG'
                  target='_blank'
                  class='p-2'
                >
                  <span>
                    <RiTwitterXFill className='text-2xl' />
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
