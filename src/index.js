import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
// import Renting from './pages/Renting';
import About from './pages/About/';
import Error404 from './pages/Error404';
import ProductDetail from './pages/ProductDetail'; // Assurez-vous d'importer ProductDetail depuis le bon emplacement

import './index.css';
import App from './App';
import Header from './components/Header'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/renting" element={<Renting />} /> */}
        <Route path="/404/" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
