import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import PageTitle from './components/PageTitle/PageTitle';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

import './app.css';

export default function App() {
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const placeholder = document.querySelector('.tags-wrapper');
    const tags = document.querySelector('.tags');

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isSticky = scrollY >= navbarHeight;
      tags.style.top = isSticky ? `${navbarHeight}px` : '0';
      placeholder.style.height = isSticky ? `${tags.offsetHeight}px` : '0';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <PageTitle />
      <Section />
      <Footer />
    </div>
  );
}
