import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import GeneralLP from "./pages/generalLP";
import Singapore from "./pages/singapore";
import ScrollToTopButton from './components/comman/ScrollToTopButton';
import './App.css';


function App() {
  return (
    <div className="home">
        <Singapore />
        <ScrollToTopButton />
    </div>
  );
}

export default App;
