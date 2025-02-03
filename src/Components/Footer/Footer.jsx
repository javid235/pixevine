import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoFooter.svg'
import insta from '../../assets/insta.svg'
import behance from '../../assets/behance.svg'
import facebook from '../../assets/facebook.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo Section */}
        <div className='footer-brand'>
          <img src={logo} alt='pixevine Logo' className='footer-logo' />
        </div>

        {/* Get in Touch Section */}
        <div className='footer-contact'>
          <h4>GET IN TOUCH</h4>
          <p>pixevine.info@gmail.com</p>
          <div className='footer-socials'>
            <a
              href='https://www.instagram.com/pixevine/'
              target='_blank'
              aria-label='Instagram'
            >
              <img src={insta} alt='' />
            </a>
            <a
              href='https://www.behance.net/pixevineDesign'
              target='_blank'
              aria-label='YouTube'
            >
              <img src={behance} alt='' />
            </a>
            <a href='#facebook' target='_blank' aria-label='Facebook'>
              <img src={facebook} alt='' />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='footer-links'>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/Services'>Services</Link>
            </li>
            <li>
              <Link to='/Portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Privacy and Terms Section */}
        <div className='footer-terms'>
          <ul>
            <li>
              <a href='#privacy-policy'>Privacy Policy</a>
            </li>
            <li>
              <a href='#terms-of-service'>Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='footer-bottom'>
        <p>CEO - Javid | Co-Founder - Farid</p>
      </div>
    </footer>
  )
}

export default Footer
