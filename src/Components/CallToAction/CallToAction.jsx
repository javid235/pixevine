import React from 'react'
import './CallToAction.css'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='cta-cont'>
      <div className='cta'>
        <div className='title'>
          <h1>
            Have a <span className='text-highlight'>Project</span> in mind?
          </h1>
        </div>
        <p>Let’s talk about how we can make it exceptional.</p>
        <Link to='/contact'>
          <button>Contact Now</button>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction
