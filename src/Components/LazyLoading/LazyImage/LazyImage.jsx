import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Skeleton from '../Skeleton/Skeleton'

const LazyImage = ({ src, alt, to }) => {
  return (
    <Link to={to}>
      <div className='item'>
        <LazyLoadImage
          className='item-img'
          src={src}
          alt={alt}
          placeholder={<Skeleton />}
        />
      </div>
    </Link>
  )
}

export default LazyImage
