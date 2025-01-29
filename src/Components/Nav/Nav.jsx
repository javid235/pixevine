import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menuIcon.svg'
import { motion } from 'framer-motion'
import './Nav.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className={`navbar-cont`}>
      {/* Mobile View */}
      <div className={`navbarM  ${isMenuOpen ? 'bgcolor' : ''}`}>
        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <Link to='/'>
            <img className='logo-main' src={logo} alt='Logo' />
          </Link>
        </motion.div>
        <motion.div
        initial={{ x: '200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <img src={menuIcon} alt='Menu Icon' onClick={toggleMenu} />
          <ul className={`navbar-linksM ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <Link onClick={toggleMenu} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to='/Portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to='/Services'>
                Services
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className='navbar'>
        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <Link to='/'>
            <img className='logo-main' src={logo} alt='Logo' />
          </Link>
        </motion.div>
        <motion.div
        initial={{ x: '200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <ul className='navbar-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/Portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/Services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Nav
