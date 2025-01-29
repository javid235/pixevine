import React from 'react'
import aboutBg from '../assets/aboutBg.png'
import aboutLogo from '../assets/aboutlogo.svg'
import aboutImg1 from '../assets/aboutImg1.png'
import aboutImg2 from '../assets/aboutImg2.png'
import aboutImg3 from '../assets/aboutImg3.png'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-cont'>
      <div className='about-banner'>
        <img className='about-logo' src={aboutLogo} alt='' />
        <img className='about-bg-img' src={aboutBg} alt='' />
      </div>
      <div className='about'>
        <div className='about-div1'>
          <div className='div1-txt'>
            <h4>
              Welcome to <img className='about-txt-logo' src={logo} alt='' />
            </h4>
            <p>
              Your trusted partner for exceptional graphic design services. We
              are dedicated to bringing your ideas to life with creativity,
              precision, and a deep understanding of design principles.
            </p>
          </div>
          <img className='about-img-1' src={aboutImg1} alt='' />
        </div>

        <div className='about-div3'>
          <img className='about-img-2' src={aboutImg2} alt='' />
          <div className='div2-txt'>
            <h4>
              Tailored <span className='text-highlight'>Design</span> Solutions
            </h4>
            <p>
              At pixevine, we specialize in providing high-quality design
              solutions tailored to meet your specific needs. From logo creation
              and branding to packaging, social media content, and beyond, we
              are here to help you communicate your vision effectively.
            </p>
          </div>
        </div>

        <div className='about-div2'>
          <div className='div2-txt'>
            <h4>
              Designs with <span className='text-highlight'>Impact</span>
            </h4>
            <p>
              We pride ourselves on delivering designs that not only look
              stunning but also align with your goals and connect with your
              audience. Whether you’re building a new brand or enhancing an
              existing one, our personalized approach ensures every project is
              unique and impactful.
            </p>
          </div>
          <img className='about-img-2' src={aboutImg3} alt='' />
        </div>

        <div className='cta'>
          <div className='title'>
            <h1>
              Let’s <span className='text-highlight'>Craft</span> Your Vision
            </h1>
          </div>
          <p>
            Let pixevine turn your ideas into visuals that inspire and elevate
            your brand. We’re here to support your journey with designs crafted
            with care and precision.
          </p>
          <Link to='/contact'>
            <button>Contact Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
