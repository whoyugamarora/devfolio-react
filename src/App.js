import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
import Opportunity from "./Pages/Opportunity";
import Certifications from "./Pages/Certifications";
import References from "./Pages/References";
import CoverLetter from "./Pages/CoverLetter";

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
          <Route path='/coverletter' element={<CoverLetter />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
