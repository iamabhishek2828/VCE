import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/ScrollFix.css";

// import Switch from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import LoadingPage from "./LoadingPage";
import Homepage from "./components/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Services",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: "/Homepage",
      element: (
        <>
          <Navbar />
          <Homepage />
        </>
      ),
    },
  ]);

  useEffect(() => {
    // Force enable scrolling on component mount
    document.documentElement.style.overflow = "visible";
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflow = "visible";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    document.body.style.height = "auto";
    document.body.style.maxHeight = "none";

    // Remove any conflicting styles
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.overflow = "visible";
      rootElement.style.height = "auto";
      rootElement.style.minHeight = "100vh";
    }
  }, []);

  return (
    <div
      className="no-scroll-override"
      style={{ overflow: "visible", height: "auto", minHeight: "100vh" }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
