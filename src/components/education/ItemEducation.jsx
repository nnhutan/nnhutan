
const ItemEducation = ({ url, university, time, major, courses }) => {
  return (
    <div className="item-education">
      <div className="top d-flex align-items-center justify-content-between">
        <a href={url} className="university btn btn-link text-decoration-none " target="_blank" rel="noopener noreferrer">{university}</a>
        <span className="time">{time}</span>
      </div>
      <span className="major">{major}</span>
      <div className="courses d-flex align-items-start ms-5">
        <span className="d-flex me-2"><i className="bi bi-dot"></i><span className="">Course:</span></span>
        <span className="detail">{courses}</span>
      </div>
    </div>
  )
}

export default ItemEducation
