import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterAs() {
  const [checkAssociate, setCheckAssociate] = useState(false);
  const [checkStandard, setCheckStandard] = useState(false);
  const [regType, setRegType] = useState('');

  return (
    <form
      className='px-5 pt-10 py-5 font-montserrat text-gray-700 lg:max-w-3xl lg:m-auto'
      onSubmit={e => e.preventDefault()}
    >
      <h1 className='text-2xl font-bold lg:text-center lg:mb-2'>Register as</h1>
      <p className='text-sm lg:text-center'>
        Please select the case that applies to you.
      </p>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5 mb-10 cursor-pointer lg:mt-10 mt-5'>
        <div
          className={`border-2  rounded-md px-3 py-4 bg-pink-50 lg:w-96 ${
            checkAssociate ? 'border-pink-700' : 'border-gray-300'
          }`}
          onClick={() => {
            setCheckAssociate(true);
            setCheckStandard(false);
            setRegType('associate');
          }}
        >
          <input
            type='radio'
            name='reg_type'
            value={'associate'}
            required
            checked={checkAssociate}
            onChange={() => {}}
          />
          <h2 className='font-semibold'>Associate membership</h2>
          <p className='text-sm'>This includes students or recent graduates</p>
        </div>

        <div
          className={`border-2  rounded-md px-3 py-4 bg-blue-100 lg:w-96 ${
            checkStandard ? 'border-blue-700' : 'border-gray-300'
          }`}
          onClick={() => {
            setCheckAssociate(false);
            setCheckStandard(true);
            setRegType('standard');
          }}
        >
          <input
            type='radio'
            name='reg_type'
            value='standard'
            checked={checkStandard}
            onChange={() => {}}
          />
          <h2 className='font-semibold'>
            Standard membership | Professional membership
          </h2>
          <p className='text-sm'>
            This includes practicing and grand fathering physiologist
          </p>
        </div>
      </div>

      <div className='text-right'>
        <Link to={`/register/${regType}`}>
          <button
            disabled={regType === '' ? true : false}
            className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md disabled:from-pink-200 disabled:cursor-not-allowed disabled:to-blue-200'
          >
            {regType === '' ? 'Select one' : 'Continue'}
          </button>
        </Link>
      </div>
    </form>
  );
}
