import { useEffect, useState } from 'react';
import Register from '../components/Register';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('associates');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setData(null);
    setIsLoading(true);

    const response = await fetch(
      `http://clinicalphysiologistsnigeria.org.ng/api/index.php?type=${type}`
    );
    const data = await response.json();
    setData(data);

    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [type]);

  console.log(data);

  return (
    <main className='px-2 text-sm py-6 lg:w-10/12 w lg:m-auto '>
      <h1 className='text-2xl capitalize text-center font-bold mb-8 text-purple-800'>
        {type} Register
      </h1>

      <form className='mb-2 grid grid-cols-3 gap-4'>
        <input
          type='search'
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Who do you want to search for?'
          className='border rounded-md px-2 py-2 focus:outline-none col-span-2'
        />
        <select
          onChange={e => setType(e.target.value)}
          className='border rounded-md px-2 py-2 focus:outline-none w-full'
        >
          <option value='associates'>Associate</option>
          <option value='professionals'>Professional</option>
          <option value='cpd'>CPD</option>
          <option value='conference'>Conference</option>
        </select>
      </form>

      <section className='w-full h-[80vh] border-purple-800 border-2 overflow-scroll no-scrollbar m-auto relative mb-4'>
        {isLoading || data === null ? (
          <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div role='status'>
              <svg
                aria-hidden='true'
                className='inline w-16 h-16 mr-2 text-purple-200 animate-spin dark:text-gray-400 fill-purple-800'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        ) : (
          <Register register={data} searchText={searchQuery} />
        )}{' '}
      </section>

      <section className='mb-4 flex justify-between'>
        <p className='flex flex-col bg-purple-100 rounded-md p-2'>
          <span className='font-semibold text-base text-gray-500'>
            Total registrant:
          </span>
          <span className='font-bold text-2xl text-purple-500 text-center'>
            {data?.data.length}
          </span>
        </p>
        <p className='flex flex-col bg-purple-100 rounded-md p-2'>
          <span className='font-semibold text-base text-gray-500'>
            Total paid:
          </span>
          <span className='font-bold text-2xl text-purple-500 text-center'>
            {data?.data.filter(data => data.verified === '1').length}
          </span>
        </p>
      </section>
    </main>
  );
}
