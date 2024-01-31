import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home/Home.jsx';
import User from './Component/UserEntry/User.jsx';
import UserLogin from './Component/UserLogin/UserLogin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:'/signup',
    element:<User></User>
  },
  {
    path:'/login',
    element:<UserLogin></UserLogin>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);