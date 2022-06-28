
const ItemActivity = ({ event, time, activities }) => {
  return (
    <div className="item-activity">
      <div className="top d-flex align-items-lg-center justify-content-between flex-lg-row flex-column">
        <span className="event">{event}</span>
        <span className="time">{time}</span>
      </div>

      <div className="detail ps-lg-5 ps-2">
        <span className="row">
          <span className="title col-12 col-lg-2">Main activities:</span>
          <span className="content col-12 col-lg-10">{activities}</span>
        </span>
      </div>
    </div>
  )
}

export default ItemActivity
