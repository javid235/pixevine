import React from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import ProjectDetail from './Pages/ProjectDetail'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div>
        <Nav />
        <MainRoutes />
        <Footer />
      </div>
    </HashRouter>
  )
}

// Component to add AnimatePresence for Routes
const MainRoutes = () => {
  const location = useLocation()

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <main>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/about'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path='/portfolio'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <Portfolio />
              </motion.div>
            }
          />
          <Route
            path='/services'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path='/contact'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path='/projects/:id'
            element={
              <motion.div
                variants={pageTransition}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2 }}
              >
                <ProjectDetail />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export default App
