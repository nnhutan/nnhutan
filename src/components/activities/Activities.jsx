import './Activities.scss'
import TitleBody from '../titleBody/TitleBody'
import ItemActivity from './ItemActivity.jsx'

const Data = [
  {
    event: "Jobfair 2020",
    time: "HCM, Jan 2020",
    activities: "Play game blabla...."
  },
  {
    event: "Jobfair 2021",
    time: "HCM, Jan 2021",
    activities: "Play game blablae..."
  }
]

const Activities = () => {
  return (
    <div className="activities mt-4">
      <TitleBody icon="bi bi-image-alt" title="Activities" />
      <div className="list ps-2 ps-lg-5">
        {
          Data.map((item, index) => <ItemActivity {...item} key={index} />)
        }
      </div>
    </div>
  )
}

export default Activities
