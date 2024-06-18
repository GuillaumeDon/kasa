

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import About from './pages/About/';
import Error404 from './pages/Error404';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/404/" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
