import React from 'react'
import arrow from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'
const WorksCard = (props) => {
  return (
    <div className={props.odd ? 'work-card-odd' : 'work-card'}>
      <div>
        <img className='work-card-img' src={props.thumbnail} alt='' />
      </div>
      <div className='work-card-details'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link to={`/projects/${props.id}`}>
          <button>
            view
            <img src={arrow} alt='' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WorksCard
