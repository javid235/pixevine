import React, { useEffect } from 'react'
import bestWorks from '../assets/data/bestworks'
import WorksCard from '../Components/WorkCard/WorksCard'
import CallToAction from '../Components/CallToAction/CallToAction'
import { Link } from 'react-router-dom'
import useMeasure from 'react-use-measure'
import { useMotionValue } from 'motion/react'
import { animate } from 'motion'
import { motion } from 'framer-motion'
import HomeAbout from '../Components/HomeAbout/HomeAbout'
import Services from './Services'

const Home = () => {
  let [ref, {width}]= useMeasure()
  const xTranslation = useMotionValue(0);

  useEffect (()=>{
    let controls
    let finalPosition = - width - 100 
    console.log(finalPosition)
    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 8,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    })

    return controls.stop
  }, [xTranslation, width])

  return (
    <>
      <div className='home-cont'>
        <div className='home'>
          <div className='left-home'></div>
          <div className='right-home'>
            <motion.h2
              initial={{ opacity: 0, y: '-30px' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Transforming Ideas into Visual Masterpieces.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ delay: 1, duration: 0.5 }}
              className='logo-text'
            >
              All Graphic Design Services Available !
            </motion.p>

            <Link to='/contact'>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Contact Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className='home-ser-cont'>
        <motion.div
          className='home-service'
          ref={ref}
          style={{ x: xTranslation }}
        >
          <h2>Brand Design</h2>
          <h2>Ux/Ui Design</h2>
          <h2>Social media</h2>
          <h2>Package Design</h2>

          <h2>Brand Design</h2>
          <h2>Ux/Ui Design</h2>
          <h2>Social media</h2>
          <h2>Package Design</h2>

          <h2>Brand Design</h2>
          <h2>Ux/Ui Design</h2>
          <h2>Social media</h2>
          <h2>Package Design</h2>
        </motion.div>
      </div>

      <HomeAbout />

      <Services/>

      <div className='works-cont'>
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true}} // Animates when 50% of the element is in view
          transition={{ delay: 0.3, duration: 1 }}
          style={{ marginBottom: '35px' }}
          className='title'
        >
          <h1>
            Our <span className='text-highlight'>Best</span> Works
          </h1>
        </motion.div>
        <div className='works'>
          {bestWorks.map((item, i) => {
            if (i % 2 == 0) {
              return (
                <motion.div
                  initial={{ opacity: 0, x: '-150px' }}
                  whileInView={{ opacity: 1, x: '0%' }}
                  viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
                  transition={{ duration: 0.5 }}
                >
                  <WorksCard
                    key={i}
                    id={item.id}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    images={item.images}
                  />
                </motion.div>
              )
            } else {
              return (
                <motion.div
                  initial={{ opacity: 0, x: '150px' }}
                  whileInView={{ opacity: 1, x: '0%' }}
                  viewport={{ once: true, amount: 0.3 }} // Animates when 50% of the element is in view
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <WorksCard
                    key={i}
                    id={item.id}
                    odd={true}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                    images={item.images}
                    thumbnail={item.thumbnail}
                  />
                </motion.div>
              )
            }
          })}
        </div>
        <div
          style={{
            background: '#ffffff1b',
            height: '2px',
            width: '100%',
            marginTop: '20px',
          }}
        ></div>
        <div className='show-more-cont'>
          <Link to='/portfolio'>
            <button className='show-more'>View All Works</button>
          </Link>
        </div>
        <div
          style={{
            background: '#ffffff1b',
            height: '2px',
            width: '100%',
          }}
        ></div>
      </div>

      <CallToAction />
    </>
  )
}

export default Home
