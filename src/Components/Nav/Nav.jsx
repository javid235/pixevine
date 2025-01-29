import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menuIcon.svg'
import closeIcon from '../../assets/close.svg'
import { motion, AnimatePresence } from 'framer-motion'
import './Nav.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation() // Get current path

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className={`navbar-cont`}>
      {/* Mobile View */}
      <div className='navbarM'>
        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Link to='/'>
            <img className='logo-main' src={logo} alt='Logo' />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: '200%' }}
          animate={{ x: '0%' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <img src={menuIcon} alt='Menu Icon' onClick={toggleMenu} />
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                initial={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  top: 0,
                  right: 0,
                  position: 'absolute',
                }}
                animate={{ width: '100vw', height: '100vh', borderRadius: 0 }}
                exit={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  top: 30,
                  right: 30,
                  opacity: 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='navbar-linksM'
              >
                <motion.div
                  initial={{ y: '-20px', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-20px', opacity: 0 }}
                  transition={{ delay: 1 }}
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '60px',
                    paddingRight: '18px',
                    justifyContent: 'end',
                  }}
                >
                  <motion.img
                    src={closeIcon}
                    onClick={toggleMenu}
                    alt=''
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </motion.div>

                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                  { to: '/Portfolio', label: 'Portfolio' },
                  { to: '/Services', label: 'Services' },
                  { to: '/contact', label: 'Contact' },
                ].map(({ to, label }) => (
                  <motion.li
                    key={to}
                    initial={{ y: '-20px', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-20px', opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to={to}
                      className={location.pathname === to ? 'active' : ''}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className='navbar'>
        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Link to='/'>
            <img className='logo-main' src={logo} alt='Logo' />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: '200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ul className='navbar-links'>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/Portfolio', label: 'Portfolio' },
              { to: '/Services', label: 'Services' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Nav
