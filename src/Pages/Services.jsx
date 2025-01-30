import React from 'react'
import ServiceCard from '../Components/servcard/Service-card'
import icon1 from '../assets/logoIcon.svg'
import icon2 from '../assets/webIcon.svg'
import icon3 from '../assets/packageIcon.svg'
import icon4 from '../assets/brandIcon.svg'


const Services = () => {
  return (
    <section className='Services-container'>
      <div className='card1'>
        <ServiceCard
          header='Logo Design'
          subheader='Monitors activity to identify project roadblocks'
          icon={icon1}
          borderColor='#74CD92'
        />
      </div>
      <div className='card2'>
        <ServiceCard
          header='Website Design'
          subheader='Scans our talent network to create the optimal team for your project'
          icon={icon2}
          borderColor='#74CD92'
        />
      </div>
      <div className='card3'>
        <ServiceCard
          header='Packaging Design'
          subheader='Scans our talent network to create the optimal team for your project'
          icon={icon3}
          borderColor='#74CD92'
        />
      </div>
      <div className='card4'>
        <ServiceCard
          header='Brand & Identity 
Design'
          subheader='Regularly evaluates our talent to ensure quality'
          icon={icon4}
          borderColor='#74CD92'
        />
      </div>
    </section>
  )
}

export default Services