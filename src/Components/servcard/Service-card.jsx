import React from 'react'
import './style2.css'

const ServiceCard = ({ header, subheader, icon }) => {
  return (
    <div className='service-card-new'>
      <div className='service-card-cont'>
        <div style={{width: '100%'}}>
          <header className='service-header'>{header}</header>
          <p className='service-subheader'>{subheader}</p>
        </div>

        <img className='icon' itemType='svg' src={icon} alt='service icon' />
      </div>
    </div>
  )
}

export default ServiceCard
