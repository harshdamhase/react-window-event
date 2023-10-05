import React from "react";
import  ReactDOM  from "react-dom/client";
import Home from './View/Home/Home'
import About from "./View/About/About";
import Contact from "./View/Contact/Contact"

function App()
{
    const path = window.location.pathname;
    switch (path) {
        case "/":
          return <Home />;
        case "/about":
          return <About />;
        case "/contact":
          return <Contact />;
        default:
          return <h1>404 Page Not Found</h1>;
    }   
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
<App/>

    </>
);