
const ItemEducation = ({ url, university, time, major, courses }) => {
  return (
    <div className="item-education">
      <div className="top d-lg-flex align-items-center justify-content-between">
        <a href={url} className="university btn btn-link text-decoration-none text-start p-0" target="_blank" rel="noopener noreferrer">{university}</a>
        <span className="time">{time}</span>
      </div>
      <span className="major">{major}</span>
      <div className="courses d-flex flex-column flex-md-row align-items-start ms-md-5">
        <span className="d-flex"><i className="bi bi-dot"></i><span className="">Course:</span></span>
        <span className="detail ms-md-2 ms-3">{courses}</span>
      </div>
    </div>
  )
}

export default ItemEducation
