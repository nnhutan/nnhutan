
const TitleBody = ({ icon, title }) => {
  return (
    <div className="title-body d-flex align-items-center mb-1 fw-bold">
      <span className="icon me-2">
        <i className={icon + " fs-2"}></i>
      </span>
      <h3 className="title m-0">{title}</h3>
    </div>
  )
}

export default TitleBody
