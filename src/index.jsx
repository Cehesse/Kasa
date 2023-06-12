import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
/* import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Error from './components/Error' */

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
{/*         <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)