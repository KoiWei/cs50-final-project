import './navbar.css';

/* Navbar component: Displays a fixed navigation bar with links to different sections of the page */
function Navbar() {
  return (
    <nav className="navbar" style={{ paddingTop: '15px' }}>
      {/* Left-aligned branding or logo */}
      <ul className="navbar-left">
        <li>
          <a href="#hero" className="home-tab" style={{ fontSize: '30px' }}>
            JW.
          </a>
          {/* 'JW.' serves as a logo or main branding for the navbar */}
        </li>
      </ul>

      {/* Right-aligned navigation links */}
      <ul className="navbar-right">
        <li>
          <a href="#about">About</a>
          {/* Link to the About section */}
        </li>
        <li>
          <a href="#experiences">Experiences</a>
          {/* Link to the Experiences section */}
        </li>
        <li>
          <a href="#projects">Projects</a>
          {/* Link to the Projects section */}
        </li>
        <li>
          <a href="#contact">Contact</a>
          {/* Link to the Contact section */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
