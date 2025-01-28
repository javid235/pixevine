import React, { useState, useEffect } from 'react'
import works from '../assets/work'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='portfolio-cont'>
      <div className='portfolio'>
        <h1>Portfolio</h1>
        <div className='cato-grid-cont'>
          <h2 className='text-highlight'>Branding</h2>
          <div className='items-grid'>
            {works.map((item, i) => {
              if (item.title === 'Branding') {
                return (
                  <Link key={i} to={`/projects/${item.id}`}>
                    <div className='item'>
                      <img className='item-img' src={item.thumbnail} alt='' />
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
        <div className='cato-grid-cont'>
          <h2 className='text-highlight'>Ui Design</h2>
          <div className='items-grid'>
            {works.map((item, i) => {
              if (item.title === 'Ui Design') {
                return (
                  <Link key={i} to={`/projects/${item.id}`}>
                    <div className='item'>
                      <img className='item-img' src={item.thumbnail} alt='' />
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
        <div className='cato-grid-cont'>
          <h2 className='text-highlight'>Package Design</h2>
          <div className='items-grid'>
            {works.map((item, i) => {
              if (item.title === 'Package Design') {
                return (
                  <Link key={i} to={`/projects/${item.id}`}>
                    <div className='item'>
                      <img className='item-img' src={item.thumbnail} alt='' />
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
