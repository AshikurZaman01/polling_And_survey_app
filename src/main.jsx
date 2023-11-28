import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import Home from './Components/Pages/Home/Home';
import AuthProvider from './Components/Auth/AuthProvider';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Login from './Components/Pages/LoginAndRegister/Login';
import Register from './Components/Pages/LoginAndRegister/Register';
import Survey from './Components/Pages/Survey/Survey';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/survey",
        element: <Survey></Survey>
      }
    ]
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full mx-auto'>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster />
    </div>
  </React.StrictMode>,
)
