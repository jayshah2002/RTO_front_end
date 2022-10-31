import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>

  );
}

export default App;
