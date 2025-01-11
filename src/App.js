import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Mission />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
