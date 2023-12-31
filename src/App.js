import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
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
        {
          path: "/restaurant/:resId",
          element: <Menu />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
