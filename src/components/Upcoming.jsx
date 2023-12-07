import { Link } from 'react-router-dom';

export default function Upcoming() {
  return (
    <div className='max-w-5xl mx-auto bg-blue-950 text-gray-200 px-5 pt-10 pb-5 rounded-3xl text-sm'>
      <h2 className='text-2xl mb-4 font-semibold'>
        PAPCPN National Conference
      </h2>
      <p className='mb-6'>
        We are thrilled to announce that the Professional Association of
        Practicing Clinical Physiologists in Nigeria (PAPCPN) will be organizing
        its 1st Annual Scientific National Conference. The conference will take
        place on the 26th day of October 2023 at Awka, Anambra State. We
        cordially invite you to join us for this significant event.
      </p>
      <Link
        to='/conference'
        className='inline-block border border-transparent bg-blue-700 w-full lg:w-auto text-center lg:px-5 py-3 rounded-3xl text-white font-semibold lg:rounded-xl hover:bg-transparent transition-all duration-700 hover:border-white'
      >
        Conference Registration
      </Link>
    </div>
  );
}
