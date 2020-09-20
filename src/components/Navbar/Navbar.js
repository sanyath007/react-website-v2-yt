import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import Button from '../Button/Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth < 960) {
      console.log('window width is less than 960');
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              lavish
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-links" onClick={closeMobileMenu}>Products</Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/signup' className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='signin' className="btn-link" onClick={closeMobileMenu}>
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                    >SIGN UP</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
