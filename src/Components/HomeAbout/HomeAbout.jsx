import React from 'react'
import './HomeAbout.css'
import homeAboutImg from '../../assets/homeAbout.png'
import arrow from '../../assets/HaboutArrow.svg'

const HomeAbout = () => {
  return (
    <div className='home-about-cont'>
      <div className='home-about'>
        <div className='h-about-top'>
          <img src={homeAboutImg} alt='' />
          <div className='title'>
            <h1>
              Who <span className='text-highlight'>Are</span> we
            </h1>
            <p>
              At Craftivault, we bring your ideas to life with tailored design
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
          <button>Learn More About Us <img src={arrow} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
