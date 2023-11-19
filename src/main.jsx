import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProviders from "./Providers/AuthProviders";
import Orders from "./Components/Orders";
import Private from "./Route/Private";
import Profile from "./Components/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/profile",
        element: (
          <Private>
            <Profile></Profile>
          </Private>
        ),
      },
      {
        path: "/orders",
        element: (
          <Private>
            <Orders></Orders>
          </Private>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProviders>
  </React.StrictMode>
);
