import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ScrollToTop from "./component/ScrollToTop/index";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;