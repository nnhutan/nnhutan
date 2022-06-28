import './Body.scss'
import Education from '../education/Education'
import Skill from '../skill/Skill'
import Project from '../project/Project'
import Interests from '../interests/Interests'
import Activities from '../activities/Activities'

const Body = () => {
  return (
    <div className="body container py-4">
      <Education />
      <Skill />
      <Project />
      <Interests />
      <Activities />
      <div className="author text-center">©2022 Dinh Nhu Tan</div>
    </div>
  )
}

export default Body
