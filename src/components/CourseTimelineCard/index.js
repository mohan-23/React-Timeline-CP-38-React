import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseCard} = props
  const {courseTitle, description, tagsList, duration} = courseCard

  const renderListItems = list => {
    const {name} = list
    return (
      <li>
        <p className="list-item">{name}</p>
      </li>
    )
  }

  return (
    <div className="course-container">
      <div className="heading-time">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="time-days">
          <AiFillClockCircle />
          <p className="days">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="lists">
        {tagsList.map(eachList => renderListItems(eachList))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
