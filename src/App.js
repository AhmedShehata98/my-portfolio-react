import React from "react";
import Header from "./components/header/Header";
import DataContentProvider from "./contexts/dataContentContext";
import ColorsModeProvider from "./contexts/NightMode";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Portfolio from "./components/portoflio/Portfolio";
import Servcies from "./components/services/Servcies";

function App() {
  return (
    <DataContentProvider>
      <ColorsModeProvider>
        <Header />
        <Home />
        <About />
        <Servcies />
        <Skills />
        <Portfolio />
        <Contacts />
      </ColorsModeProvider>
    </DataContentProvider>
  );
}

export default App;
