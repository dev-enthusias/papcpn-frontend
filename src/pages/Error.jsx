import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='font-bold text-center'>
        <p>Ops! Something went wrong</p>
        <p>{error.message}</p>
      </div>
    </div>
  );
}
