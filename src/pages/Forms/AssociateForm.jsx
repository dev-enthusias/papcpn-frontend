import React from 'react';
import { Form, useActionData } from 'react-router-dom';
import associate from '../../assets/associate.jpeg';

export async function action({ request }) {
  const formData = await request.formData();
  const cred = Object.fromEntries(formData);

  const res = await fetch('/api/register/associate', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cred),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Error processing form data:');
    throw error
  }

  return data;
}

export default function AssociateForm() {
  const result = useActionData();
  console.log(result);

  const titleOptions = [
    { value: 'mr', label: 'Mr' },
    { value: 'mrs', label: 'Mrs' },
    { value: 'master', label: 'Master' },
    { value: 'miss', label: 'Miss' },
    { value: 'rev', label: 'Rev' },
    { value: 'prof', label: 'Prof' },
    { value: 'dr', label: 'Dr' },
  ];

  // prettier-ignore
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom','Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta','Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Federal Capital Territory','Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau','Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
  ];

  // prettier-ignore
  const modalityOptions = [
    'Please select modality', 'Cardiac Physiology', 'Cardiac Pulmonary Physiology', 'Clinical Exercise/Sports Physiology', 'Gastro - Intestinal Physiology', 'Human Reproductive Physiology', 'Neuro Physiology','Physiologist in Paramedical/Emergency Services', 'Renal Physiology (Dialysis)', 'Respiratory Physiology',
  ];

  return (
    <section className='py-10 px-6 lg:px-10 flex justify-between h-[104vh]'>
      <Form
        className=' px-5 font-montserrat text-gray-700 w-3/5 h-full overflow-y-scroll no-scrollbar'
        method='post'
      >
        <p className='text-sm mb-2'>
          Be a recognised member of the PAPCPN body
        </p>
        <h1 className='text-2xl font-bold'>Associate membership</h1>
        <p className='text-sm mb-5'>Please fill in all the information</p>

        <div className='mb-4'>
          <label htmlFor='title' className='block font-medium mb-1'>
            Title
          </label>
          <select
            name='title'
            id='title'
            required
            className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
          >
            {titleOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium mb-1'>
            Full name
          </label>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              placeholder='First name'
              id='name'
              name='first_name'
              required
              className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
            />
            <input
              type='text'
              placeholder='Middle name'
              id='name'
              name='middle_name'
              required
              className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
            />
            <input
              type='text'
              placeholder='Last name'
              id='name'
              name='last_name'
              required
              className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
            />
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            placeholder='user@example.com'
            id='email'
            name='email'
            required
            className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none w-full'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='dob' className='block font-medium mb-1'>
            Date of birth
          </label>
          <input
            type='date'
            id='dob'
            name='dob'
            required
            className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none w-full'
          />
        </div>

        <div className='flex gap-2 mb-4 max-[358px]:flex-col'>
          <div className='w-full'>
            <label htmlFor='phone' className='block font-medium mb-1'>
              Mobile
            </label>
            <input
              type='number'
              placeholder='+2349070070777'
              id='phone'
              name='mobile_number'
              required
              className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none w-full'
            />
          </div>

          <div className='w-full'>
            <label htmlFor='w_phone' className='block font-medium mb-1'>
              Whatsapp <span className='text-red-500 text-xs'>(optional)</span>
            </label>
            <input
              type='number'
              placeholder='+2349070070777'
              id='w_phone'
              name='whatsapp_number'
              className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none w-full'
            />
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='address' className='block font-medium mb-1'>
            Address
          </label>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              placeholder='Current home address'
              id='address'
              name='cur_address'
              required
              className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
            />
            <input
              type='text'
              placeholder='Nearest bus stop'
              name='bus_stop'
              required
              className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none'
            />
            <div className='flex gap-2'>
              <input
                type='text'
                placeholder='Town/City'
                name='city'
                required
                className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-1/2'
              />
              <select
                name='state'
                required
                className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-start-2 w-1/2'
              >
                <option value=''>Select a state</option>
                {nigerianStates.map(state => (
                  <option key={state.toLowerCase()} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='modality' className='block font-medium mb-1'>
            Modality
          </label>
          <select
            id='modality'
            name='modality'
            required
            className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-full'
          >
            {modalityOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor='uni' className='block font-medium mb-1'>
            University attended or attending
          </label>
          <input
            type='text'
            name='university'
            id='uni'
            required
            className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-full'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='hod' className='block font-medium mb-1'>
            Name of current HOD{' '}
            <span className='text-red-500 text-xs'>(optional)</span>
          </label>
          <input
            type='text'
            name='hod'
            id='hod'
            className='appearance-none border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-full'
          />
        </div>

        <div className='mb-8 flex gap-2 items-start'>
          <input type='checkbox' required id='declaration' className='mt-1' />
          <label htmlFor='declaration' className='text-xs'>
            I have read and understand the above statements regarding the PAPCPN
            official website and I pledge that I will promote and keep to the
            standard/code of ethics of PAPCPN and rules that governs all members
            of PAPCPN.
          </label>
        </div>

        <div className='mb-2'>
          <button className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md disabled:from-pink-200 disabled:cursor-not-allowed disabled:to-blue-200'>
            Proceed to payment
          </button>
        </div>
      </Form>

      <div className='w-2/5'>
        <img src={associate} alt='Associate member of PAPCPN' />
      </div>
    </section>
  );
}
