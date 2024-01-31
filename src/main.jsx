import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home/Home.jsx';
import ProductFeatures from './Component/ProductFeatures/ProductFeatures.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);