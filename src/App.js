import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import Opportunity from "./Pages/Opportunity";
import Certifications from "./Pages/Certifications";
import References from "./Pages/References";

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/opportunity' element={<Opportunity />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/references' element={<References />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
