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

  window.onscroll = function() {scrollProgress()};

  function scrollProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div className="app">
      <Navbar />
      <div className="progress-header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <PageTitle />
      <Section />
      <Footer />
    </div>
  );
}
