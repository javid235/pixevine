import React from 'react'
import './Service.style.css'

const ServiceCard = ({ header, subheader, icon }) => {
  return (
    <div className='service-card-new'>
      <div className='service-card-cont'>
        <div>
          <header className='service-header'>{header}</header>
          <p className='service-subheader'>{subheader}</p>
        </div>

        <img className='icon' src={icon} alt='service icon' />
      </div>
    </div>
  )
}

export default ServiceCard
