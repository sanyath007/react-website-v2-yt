import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import './Navbar.css';
import Button from '../Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if(window.innerWidth < 960) {
      console.log('window width is less than 960');
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint />
            lavish
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links">Services</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links">Products</Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='/signup' className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to='signin' className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                  >SIGN IN</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
