import React from 'react'
import './HomeAbout.css'
import homeAboutImg from '../../assets/homeAbout.png'
import arrow from '../../assets/HaboutArrow.svg'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className='home-about-cont'>
      <div className='home-about'>
        <div className='h-about-top'>
          <img className='home-about-img' src={homeAboutImg} alt='' />
          <div className='h-about-title'>
            <h1>
              Who <span className='text-highlight'>Are</span> we
            </h1>
            <p>
              At pixevine, we bring your ideas to life with tailored design
              solutions that captivate and inspire. From logos and branding to
              packaging and digital content, we provide creative services
              designed to elevate your vision.
            </p>
          </div>
        </div>
        <div className='h-about-bottom'>
          <p>
            Discover how we craft impactful designs that connect with your
            audience.
          </p>
          <Link to='/about'>
            <button>
              Learn More About Us <img src={arrow} alt='' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
