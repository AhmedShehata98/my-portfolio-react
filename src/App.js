import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header";
import DataContentProvider from "./contexts/dataContentContext";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Portfolio from "./components/portoflio/Portfolio";
import Servcies from "./components/services/Servcies";
import LoadingModule from "./components/layout/LoadingModule";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  const loadingModulePortal = ReactDOM.createPortal(
    <LoadingModule />,
    document.getElementById("loadingRoot")
  );

  useEffect(() => {
    setTimeout(() => {}, 2000);
    if (document.readyState === "complete") {
      setPageLoaded(true);
    }
    window.addEventListener("load", setPageLoaded(true));

    return () => {
      window.removeEventListener("load", setPageLoaded(true));
    };
  }, []);

  return (
    <DataContentProvider>
      {pageLoaded === false ? loadingModulePortal : null}
      <Header />
      <Home />
      <About />
      <Servcies />
      <Skills />
      <Portfolio />
      <Contacts />
    </DataContentProvider>
  );
}

export default App;
