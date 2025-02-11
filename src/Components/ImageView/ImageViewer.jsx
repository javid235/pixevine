import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import close from '../../assets/close.svg'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'
import full from '../../assets/full.svg'
import './ImageViewer.css'

const ImageViewer = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isLargeImage, setIsLargeImage] = useState(null) 

  const images = props.images

   useEffect(() => {
     const img = new Image()
     img.src = images[currentIndex]
     img.onload = () => {
       setIsLargeImage(img.naturalHeight >= 1100) // Check source image height
     }
   }, [currentIndex, images])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }
  return (
    <AnimatePresence>
      {isFullScreen ? (
        <motion.div
          key='fullscreen'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='fullscreen'
        >
          {/* <div className='full-close-cont'>
            <button className='fullsrn-btn-full' onClick={toggleFullScreen}>
              <img src={close} alt='Close' />
            </button>
          </div> */}
          <div className='full-image-cont'>
            <div style={{ width: '100%', padding: '30px 10px', position:'relative'}}>
              <p style={{ textAlign: 'center' }}>
                {props.name} {props.title}
              </p>
              <button className='fullsrn-btn-full' onClick={toggleFullScreen}>
                <img src={close} alt='Close' />
              </button>
            </div>
            <div className='image-full'>
              {images.map((img, i) => {
                return <img className='img-full-new' src={img} />
              })}
              <div style={{ width: '100%', padding: '40px 20px 60px 20px' }}>
                <p style={{ textAlign: 'center' , color:'#828282'}}>Designed By Javid</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className='image-view'>
          {isLargeImage ? (
            <div className='image-view-img-web-cont'>
              <img
                className='image-view-img-web'
                src={images[currentIndex]}
                alt='Image View'
              />
            </div>
          ) : (
            <img
              className='image-view-img'
              src={images[currentIndex]}
              alt='Image View'
            />
          )}

          <div className='image-navbar'>
            {images.length != 1 ? (
              <div className='image-nav'>
                <button className='left-btn' onClick={handlePrev}>
                  <img
                    className='left-btn-img'
                    src={leftArrow}
                    alt='Previous'
                  />
                </button>
                <div className='image-count'>
                  {images.map((item, i) => (
                    <div
                      key={i}
                      className={i === currentIndex ? 'img-sel' : 'img'}
                    ></div>
                  ))}
                </div>
                <button className='right-btn' onClick={handleNext}>
                  <img className='right-btn-img' src={rightArrow} alt='Next' />
                </button>
              </div>
            ) : (
              <></>
            )}

            <div className='full-btn-cont'>
              <button className='fullsrn-btn' onClick={toggleFullScreen}>
                <img src={full} alt='Fullscreen' />
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ImageViewer
