//REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//SASS
import './sass/main.scss';

//PAGES
import Home from './pages/Home'
import Error404 from './pages/404'
import About from './pages/About'
import Accomodation from './pages/Accommodation'

//COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

//ROUTE
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='page'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Accomodation/:Number" element={<Accomodation />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);