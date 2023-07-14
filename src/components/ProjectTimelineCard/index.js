import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectCard} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectCard

  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="title-time">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="time">
          <AiFillCalendar />
          <p className="hours">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
