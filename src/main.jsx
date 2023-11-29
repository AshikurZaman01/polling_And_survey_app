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
import LearnMore from './Components/Pages/HowItWorks/LearnMore';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageUsers from './Components/Pages/Dashboard/Admin/ManageUsers';
import SurveyStatus from './Components/Pages/Dashboard/Admin/surveyStatus';
import ProUsers from './Components/Pages/Dashboard/Admin/ProUsers';
import SurveyResponse from './Components/Pages/Dashboard/Admin/SurveyResponse';
import AddSurvey from './Components/Pages/Dashboard/Surveyor/AddSurvey';
import FeedbackByUsers from './Components/Pages/Dashboard/Surveyor/FeedbackByUsers';
import FeedbackByAdmin from './Components/Pages/Dashboard/Surveyor/FeedbackByAdmin';
import SurveyResponseUsers from './Components/Pages/Dashboard/Surveyor/SurveyResponseUsers';
import PrivateRoute from './Components/Auth/PrivateRoute';


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
      },
      {
        path: "/learnMore",
        element: <LearnMore></LearnMore>
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
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "/dashboard/surveyStatus",
        element: <SurveyStatus></SurveyStatus>
      },
      {
        path: "/dashboard/proUsers",
        element: <ProUsers></ProUsers>
      },
      {
        path: "/dashboard/surveyResponseAdmin",
        element: <SurveyResponse></SurveyResponse>
      },

      {
        path: "/dashboard/addSurvey",
        element: <AddSurvey></AddSurvey>
      },
      {
        path: "/dashboard/feedbackByUsers",
        element: <FeedbackByUsers></FeedbackByUsers>
      },
      {
        path: "/dashboard/feedbackByAdmin",
        element: <FeedbackByAdmin></FeedbackByAdmin>
      },
      {
        path: "/dashboard/surveyResponseUsers",
        element: <SurveyResponseUsers></SurveyResponseUsers>
      }
    ]
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
