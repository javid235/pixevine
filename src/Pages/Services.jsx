import React, { useEffect } from 'react'
import { animate, scroll } from 'motion'
import ServiceCard from '../Components/servcard/Service-card'
import icon1 from '../assets/logoIcon.svg'
import icon2 from '../assets/webIcon.svg'
import icon3 from '../assets/packageIcon.svg'
import icon4 from '../assets/brandIcon.svg'
const Services = ({gradient}) => {
  const servicesData = [
    {
      header: 'Logo Design',
      subheader:
        '• Custom logo designs tailored to your brand identity\n• 2-6 initial concepts depending on the package\n• Revisions and final files in multiple formats (JPG, PNG, PDF, SVG, AI)',
      icon: icon1,
    },
    {
      header: 'Website Design',
      subheader:
        '• Custom landing pages or full website designs\n• Mobile and desktop responsive layouts\n• Interactive prototypes and developer handovers',
      icon: icon2,
    },
    {
      header: 'Packaging Design',
      subheader:
        '• Unique packaging designs for labels, boxes, or bags\n• 2-5 revisions based on the selected package\n• Print-ready files and 3D mockups for product previews',
      icon: icon3,
    },
    {
      header: 'Brand & Identity Design',
      subheader:
        '• Logo, business card, and letterhead design\n• Social media kit (profile, cover, and templates)\n• Full brand guidelines (colors, fonts, logo usage)',
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
        <div
          style={{
            background: gradient
              ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 84%, rgba(37, 92, 55, 0.46) 125%, rgba(80, 200, 120, 1) 126%)'
              : gradient,
          }}
        >
          <h2 className='service-head'>
            Our<span className='text-highlight'> Services</span>
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
