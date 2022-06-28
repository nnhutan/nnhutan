
const ItemActivity = ({ event, time, activities }) => {
  return (
    <div className="item-activity">
      <div className="top d-flex align-items-center justify-content-between">
        <span className="event">{event}</span>
        <span className="time">{time}</span>
      </div>

      <div className="detail ps-5">
        <span className="row">
          <span className="title col-2">Main activities:</span>
          <span className="content col-10">{activities}</span>
        </span>
      </div>
    </div>
  )
}

export default ItemActivity
