import React from 'react';
import Navbar from '@/sections/NavBar/NavBar';
import './navbar.css';

/* Navi component: Provides a navigation layout with sections for "About Me," "My Journey," and "Contact Me." */
function Navi() {
  return (
    <div>
      {/* Include the navigation bar at the top of the page. */}
      <Navbar />

      {/* About Me section with some padding to avoid overlap with the navbar. */}
      <section className="content-section" id="about" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>About Me</h2>
          {/* Your content goes here */}
        </div>
      </section>

      {/* My Journey section with similar padding and structure. */}
      <section className="content-section" id="timeline" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>My Journey</h2>
          {/* Your content goes here */}
        </div>
      </section>

      {/* Contact Me section for user interactions or inquiries. */}
      <section className="content-section" id="contact" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>Contact Me</h2>
          {/* Your content goes here */}
        </div>
      </section>
    </div>
  );
}

export default Navi;
