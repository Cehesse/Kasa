//REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//SASS
import "./sass/main.scss";

//PAGES
import Home from "./pages/Home"
import Error from "./pages/Error"
import About from "./pages/About"
import Accomodation from "./pages/Accomodation"

//LAYOUT
import Header from "./layout/Header"
import Footer from "./layout/Footer"

//ROUTE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/Kasa">
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Accomodation/:Number" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);