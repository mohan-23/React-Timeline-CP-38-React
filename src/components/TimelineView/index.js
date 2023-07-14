import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="body-cart">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="span">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL" items={timelineItemsList}>
            {timelineItemsList.map(eachList => {
              if (eachList.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard courseCard={eachList} key={eachList.id} />
                )
              }
              return (
                <ProjectTimelineCard projectCard={eachList} key={eachList.id} />
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
