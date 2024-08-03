import React from 'react';
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS (includes Popper.js)
import logo from '../images/SENANI-removebg-preview (1).png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [bgColor, setBgColor] = useState('transparent'); // Default background color

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 90) { // Change this value as needed
      setBgColor('white'); // Set to a different color when scrolled
    } else {
      setBgColor('transparent'); // Set to initial color when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      style={{ boxShadow: 'none', backgroundColor: bgColor, color: '#233241' }}
      className="header_pactronHeader__DjB52 navbar navbar-expand-lg navbar-light fixed-top"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            alt="Pactron Logo"
            fetchPriority="high"
            width="160"
            height="60"
            decoding="async"
            className="undefined"
            style={{ color: 'transparent' }}
            src={logo}
          />
        </Link>
        <button
          aria-controls="pactronNav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#pactronNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="pactronNav">
          <div className="ms-auto header_pactronNav__q0P3M navbar-nav">
          <Link to="/" className="nav-link">Home</Link>

            <div className="header_servicesDropdown__84AKF nav-item dropdown">
              <Link
                id="servicesDropdown"
                aria-expanded="false"
                role="button"
                className="dropdown-toggle nav-link"
                tabIndex="0"
                to="#"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/semiconductor">Semiconductor Service</Link></li>
                <li><Link className="dropdown-item" to="/technological-services">Technological Service</Link></li>
                <li><Link className="dropdown-item" to="/system-soln">System Solutions</Link></li>
              </ul>
            </div>
            <Link to="/about-us" className="nav-link">About us</Link>
            <Link to="/contact" className="header_navButton__zcho_ nav-link">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
