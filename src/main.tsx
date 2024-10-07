import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.tsx'
import './index.css'
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import MainPage from './components/MainPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "words",
        element: <div className='text-white'>words</div>,
      },
      {
        path: "practice",
        element: <div className='text-white'>practice</div>,
      },
      {
        path: "user",
        element: <div className='text-white'>user</div>,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
