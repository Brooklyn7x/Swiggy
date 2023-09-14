import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App"; // Update the import path
import About from "./About"; // Update the import path
import Contact from "./Contact"; // Update the import path
import Error from "./Error"; // Update the import path
import Body from "./Body";

export const Ro = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Ro;
