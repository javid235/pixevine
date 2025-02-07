import React from 'react'
import CallToAction from '../Components/CallToAction/CallToAction'
import ImageViewer from '../Components/ImageView/ImageViewer'
import works from '../assets/data/work'
import { useParams } from 'react-router-dom'




const ProjectDetail = () => {
  const {id} = useParams();
  const work = works.find((item) => item.id === parseInt(id))
  if(!work){
    return <p>not found</p>
  }
  return (
    <>
      <div className='project-detail-cont'>
        <div className='project-detail'>
          <div className='title'>
            <h1>
              {work.name} <span className='text-highlight'>{work.title}</span>
            </h1>
          </div>
          <ImageViewer title={work.title} images={work.images} />
          <div className='about-project'>
            <h2>
              About this <span className='text-highlight'>{work.title}</span>
            </h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{work.details}</p>
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  )
  
}

export default ProjectDetail