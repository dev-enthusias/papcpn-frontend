import React from 'react';
import { Form } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import conference from '../../assets/conference.jpg';

export default function ConferenceForm() {
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

  return (
    <>
      <Navbar />

      <section className='py-10 px-6 lg:px-10 flex justify-between gap-5 h-[104vh] border'>
        <Form
          className=' px-5 font-montserrat text-gray-700 w-1/2 h-full overflow-y-scroll no-scrollbar border py-5 bg-blue-100'
          method='post'
        >
          <h1 className='text-2xl font-semibold'>Conference Registration</h1>
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
            <label htmlFor='phone' className='block font-medium mb-1'>
              Mobile Contact
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
                  name='town_city'
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
            <label htmlFor='type' className='block font-medium mb-1'>
              Conference Registeration type
            </label>
            <select
              name='type'
              id='type'
              className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-full'
            >
              <option value=''>Select your level</option>
              <option value='regular'>Regular Attendee</option>
              <option value='speaker'>Presenter/Speaker</option>
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='type' className='block font-medium mb-1'>
              Register as
            </label>
            <select
              name='type'
              id='type'
              className='border border-gray-400 px-3 py-2.5 rounded-md focus:outline-none col-span-1 w-full'
            >
              <option value=''>Select your level</option>
              <option value='professional'>
                Professional Membership - ₦10000
              </option>
              <option value='graduate'>
                Graduate Associate Membership - ₦5500
              </option>
              <option value='student'>
                Student Associate Membership - ₦3500
              </option>
              <option value='non-members'>Non-members - ₦6000</option>
            </select>
          </div>

          <div className='mb-8 flex gap-2 items-start'>
            <input type='checkbox' required id='declaration' className='mt-1' />
            <label htmlFor='declaration' className='text-xs'>
              I hereby confirm that the information provided above is accurate
              and complete. I understand that my registration is not confirmed
              until the payment is received and processed.
            </label>
          </div>

          <div className='mb-2'>
            <button className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md disabled:from-pink-200 disabled:cursor-not-allowed disabled:to-blue-200'>
              Proceed to payment
            </button>
          </div>
        </Form>

        <div className='w-1/2 h-full border'>
          <img
            src={conference}
            alt='Professional member of PAPCPN'
            className='object-cover h-full w-full'
          />
        </div>
      </section>
    </>
  );
}
