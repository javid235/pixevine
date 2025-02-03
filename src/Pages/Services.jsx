import React, { useEffect } from 'react'
import { animate, scroll } from 'motion'
import ServiceCard from '../Components/servcard/Service-card'
import icon1 from '../assets/logoIcon.svg'
import icon2 from '../assets/webIcon.svg'
import icon3 from '../assets/packageIcon.svg'
import icon4 from '../assets/brandIcon.svg'
const Services = () => {
  const servicesData = [
    {
      header: 'Logo Design',
      subheader: 'Monitors activity to identify project roadblocks',
      icon: icon1,
    },
    {
      header: 'Website Design',
      subheader:
        'Scans our talent network to create the optimal team for your project',
      icon: icon2,
    },
    {
      header: 'Packaging Design',
      subheader:
        'Scans our talent network to create the optimal team for your project',
      icon: icon3,
    },
    {
      header: 'Brand & Identity Design',
      subheader: 'Regularly evaluates our talent to ensure quality',
      icon: icon4,
    },
  ]

  useEffect(() => {
    const items = document.querySelectorAll('.service-card-new')

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate('.img-group', {
        transform: [`none`, `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector('.img-group-container') }
    )

    // Progress bar animation
    scroll(animate('.progress', { scaleX: [0, 1] }), {
      target: document.querySelector('.img-group-container'),
    })
  }, [])

  return (
    <article id='gallery'>
      <section className='img-group-container'>
        <div>
          <h2 className='service-head'>
            Our <span className='text-highlight'>Services</span>
          </h2>
          <ul className='img-group'>
            {servicesData.map((item, i) => (
              <ServiceCard
                key={i}
                header={item.header}
                subheader={item.subheader}
                icon={item.icon}
              />
            ))}
          </ul>
          <div className='progress'></div>
        </div>
      </section>
    </article>
  )
}

export default Services
