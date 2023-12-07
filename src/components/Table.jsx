export default function Register({ register, searchText }) {
  // console.log(register.data[0].university !== undefined);
  return (
    <table className='border-collapse'>
      <thead>
        <tr className='bg-purple-900 text-white text-lg'>
          <th className='font-semibold py-4 text-left px-4'>S/N</th>
          <th className='font-semibold py-4 text-left px-4'>Title</th>
          <th className='font-semibold py-4 text-left px-4'>First name</th>
          <th className='font-semibold py-4 text-left px-4'>Middle name</th>
          <th className='font-semibold py-4 text-left px-4'>Last name</th>
          <th className='font-semibold py-4 text-left px-4'>Email</th>
          {register?.data[0]?.modality !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Modality</th>
          )}
          {register?.data[0]?.physiologyType !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>
              Physiology type
            </th>
          )}
          {register?.data[0]?.curJob !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Current job</th>
          )}
          {register?.data[0]?.pastJob !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Past job</th>
          )}
          {register?.data[0]?.clinical_cp !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Clinical cp</th>
          )}
          {register?.data[0]?.clinical_np !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Clinical np</th>
          )}
          {register?.data[0]?.others !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Others</th>
          )}
          {register?.data[0]?.employment_status !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>
              Employment status
            </th>
          )}
          {register?.data[0]?.experience_level !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>
              Experience level
            </th>
          )}
          {register?.data[0]?.participation_mode !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>
              Participation mode
            </th>
          )}
          {register?.data[0]?.dob !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Date of Birth</th>
          )}
          <th className='font-semibold px-4 py-4 text-left'>Mobile number</th>
          {register?.data[0]?.whatsappNum !== undefined && (
            <th className='font-semibold px-4 py-4 text-left'>
              Whatsapp number
            </th>
          )}
          <th className='font-semibold px-4 py-4 text-left'>Bus stop</th>
          <th className='font-semibold px-4 py-4 text-left'>Address</th>
          <th className='font-semibold px-4 py-4 text-left'>Town</th>
          <th className='font-semibold py-4 text-left px-4'>State</th>
          {register?.data[0]?.university !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>University</th>
          )}
          {register?.data[0]?.hod !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>HOD</th>
          )}
          {register?.data[0]?.conference_type !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>
              Conference type
            </th>
          )}
          {register?.data[0]?.registered_as !== undefined && (
            <th className='font-semibold py-4 text-left px-4'>Registered as</th>
          )}
          <th className='font-semibold py-4 text-left px-4'>Payment status</th>
        </tr>
      </thead>
      <tbody>
        {register &&
          register.data
            .filter(person => {
              return searchText.toLowerCase() === ''
                ? register.data
                : person.fName.toLowerCase().includes(searchText) ||
                    person.lName.toLowerCase().includes(searchText);
            })
            .map((data, i) => {
              return (
                <tr
                  key={data.id}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}`}
                >
                  <td className='px-4 py-2'>{i + 1}</td>
                  <td className='px-4 py-2'>
                    {data.title[0].toUpperCase() +
                      data.title.slice(1).toLowerCase()}
                  </td>
                  <td className='px-4 py-2'>{data.fName}</td>
                  <td className='px-4 py-2'>{data.mName}</td>
                  <td className='px-4 py-2'>{data.lName}</td>
                  <td className='px-4 py-2'>{data.email}</td>
                  {data.modality && (
                    <td className='px-4 py-2'>{data.modality}</td>
                  )}
                  {data.clinical_cp && (
                    <td className='px-4 py-2'>{data.clinical_cp}</td>
                  )}
                  {data.clinical_np && (
                    <td className='px-4 py-2'>{data.clinical_np}</td>
                  )}
                  {data.others != null ? (
                    <td className='px-4 py-2'>
                      {data.others === '' ? 'N/A' : data.others}
                    </td>
                  ) : null}
                  {data.employment_status && (
                    <td className='px-4 py-2'>{data.employment_status}</td>
                  )}
                  {data.experience_level && (
                    <td className='px-4 py-2'>{data.experience_level}</td>
                  )}
                  {data.participation_mode && (
                    <td className='px-4 py-2'>{data.participation_mode}</td>
                  )}
                  {data.physiologyType && (
                    <td className='px-4 py-2'>{data.physiologyType}</td>
                  )}
                  {data.curJob && <td className='px-4 py-2'>{data.curJob}</td>}
                  {data.pastJob && (
                    <td className='px-4 py-2'>{data.pastJob}</td>
                  )}
                  {data.dob && <td className='px-4 py-2'>{data.dob}</td>}
                  <td className='px-4 py-2'>{data.mobileNum}</td>
                  {data.whatsappNum != null ? (
                    <td className='px-4 py-2'>
                      {data.whatsappNum === '' ? 'N/A' : data.whatsappNum}
                    </td>
                  ) : null}
                  <td className='px-4 py-2'>
                    {data.busStop === '' ? 'N/A' : data.busStop}
                  </td>
                  <td className='px-4 py-2'>
                    {data.address === '' ? 'N/A' : data.address}
                  </td>
                  <td className='px-4 py-2'>
                    {data.town === '' ? 'N/A' : data.town}
                  </td>
                  <td className='px-4 py-2'>
                    {data.state.includes('select') ||
                    data.state === '' ||
                    data.state.toLowerCase() === 'other'
                      ? 'N/A'
                      : data.state}
                  </td>
                  {data.university && (
                    <td className='px-4 py-2'>{data.university}</td>
                  )}
                  {data.hod != null ? (
                    <td className='px-4 py-2'>
                      {data.hod === '' ? 'N/A' : data.hod}
                    </td>
                  ) : null}
                  {data.conference_type && (
                    <td className='px-4 py-2'>
                      {data.conference_type === ''
                        ? 'N/A'
                        : data.conference_type}
                    </td>
                  )}
                  {data.registered_as && (
                    <td className='px-4 py-2'>
                      {data.registered_as === '' ? 'N/A' : data.registered_as}
                    </td>
                  )}
                  <td className='px-4 py-2'>
                    {+data.verified === 0 ? 'Not Paid' : 'Paid'}
                  </td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}
