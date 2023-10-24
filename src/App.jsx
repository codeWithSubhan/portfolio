import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Testimonial from './components/testimonial/Testimonial';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    setTimeout(() => {
      toast('you are welcome', { icon: '👋' });
    }, 2000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} end />
          <Route path='about' element={<Testimonial />} />
          <Route path='skills' element={<Skills />} />
          <Route path='qualification' element={<Qualification />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
        <ScrollUp />
      </BrowserRouter>
    </>
  );
}

export default App;
