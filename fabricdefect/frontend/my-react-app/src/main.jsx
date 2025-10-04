import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/responsive.css';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
