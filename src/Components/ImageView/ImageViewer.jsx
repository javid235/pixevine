import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import close from '../../assets/close.svg'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'
import full from '../../assets/full.svg'
import './ImageViewer.css'

const ImageViewer = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const images = props.images

  const handleInteraction = () => {
    setIsVisible(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

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
          <div className='full-close-cont'>
            <button className='fullsrn-btn-full' onClick={toggleFullScreen}>
              <img src={close} alt='Close' />
            </button>
          </div>
          <div className='full-image-cont'>
            <button
              className='left-btn-full'
              onClick={() => {
                handlePrev()
                handleInteraction()
              }}
            >
              <img
                className='left-btn-img-full'
                src={leftArrow}
                alt='Previous'
              />
            </button>
              <img
                className='image-full'
                src={images[currentIndex]}
                alt='Full View'
              />
            <button
              className='right-btn-full'
              onClick={() => {
                handleNext()
                handleInteraction()
              }}
            >
              <img className='right-btn-img-full' src={rightArrow} alt='Next' />
            </button>
          </div>
          {isVisible && (
            <div className='count-cont'>
              <div className='image-count-full'>
                {images.map((item, i) => (
                  <div
                    key={i}
                    className={i === currentIndex ? 'img-sel' : 'img'}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ) : (
        <div className='image-view'>
          <img
            className='image-view-img'
            src={images[currentIndex]}
            alt='Image View'
          />
          <div className='image-navbar'>
            <div className='image-nav'>
              <button className='left-btn' onClick={handlePrev}>
                <img className='left-btn-img' src={leftArrow} alt='Previous' />
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
