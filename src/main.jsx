import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import RegisterAs from './pages/Forms/RegisterAs';
import AssociateForm, {
  action as asssoicateAction,
} from './pages/Forms/AssociateForm';
import StandardForm, {
  action as standardAction,
} from './pages/Forms/StandardForm';
import ConferenceForm from './pages/Forms/ConferenceForm';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Error from './pages/Error';
import './index.css';
import Standard from './pages/Standard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/conference',
    element: <ConferenceForm />,
  },
  {
    path: '/register',
    element: <Register />,
    children: [
      {
        path: '/register/select',
        element: <RegisterAs />,
      },
      {
        path: '/register/associate',
        element: <AssociateForm />,
        action: asssoicateAction,
      },
      {
        path: '/register/standard',
        element: <StandardForm />,
        action: standardAction,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/standard',
    element: <Standard />,
  },
  {
    path: '/news',
    element: <News />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
