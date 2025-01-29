import React, { useState, useEffect } from 'react'
import works from '../assets/work'
import LazyImage from '../Components/LazyLoading/LazyImage/LazyImage'
import Skeleton from '../Components/LazyLoading/Skeleton/Skeleton' // Dummy loader

const Portfolio = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    // Preload all images
    const preloadImages = works.map((item) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = item.thumbnail
        img.onload = resolve // Resolve when image loads
        img.onerror = resolve // Resolve even if image fails to load
      })
    })

    // When all images are loaded, update state
    Promise.all(preloadImages).then(() => setImagesLoaded(true))
  }, [])

  return (
    <div className='portfolio-cont'>
      <div className='portfolio'>
        <h1>Portfolio</h1>

        {!imagesLoaded ? (
          // Show Full-page Skeleton until all images are loaded
          <div className='skeleton-grid'>
            {works.map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : (
          // Render actual images once all are loaded
          <>
            {['Branding', 'Ui Design', 'Package Design'].map((category) => (
              <div key={category} className='cato-grid-cont'>
                <h2 className='text-highlight'>{category}</h2>
                <div className='items-grid'>
                  {works
                    .filter((item) => item.title === category)
                    .map((item) => (
                      <LazyImage
                        key={item.id}
                        src={item.thumbnail}
                        alt={item.name}
                        to={`/projects/${item.id}`}
                      />
                    ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Portfolio
