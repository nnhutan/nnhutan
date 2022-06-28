
const ItemProject = ({ name, org, role, time, source, demo, features, technologies }) => {
  return (
    <div className="item-project mb-3">
      <div className="top">
        <div className="title">
          <span className="name fs-5">{name}</span>
          <span className="org">{org}</span>
        </div>
        <div className="title">
          <span className="role">{role}</span>
          <span className="time">{time}</span>
        </div>
      </div>

      <div className="detail ps-5">
        <span className="row">
          <span className="detail-title col-2">
            <span className=""><i className="bi bi-dot"></i></span>
            <span>Features:</span>
          </span>
          <span className="content col-10">{features}</span>
        </span>

        <span className="row">
          <span className="detail-title col-2">
            <span className=""><i className="bi bi-dot"></i></span>
            <span>Technologies:</span>
          </span>
          <span className="content col-10">{technologies}</span>
        </span>

        <span className="row">
          <span className="detail-title col-2">
            <span className=""><i className="bi bi-dot"></i></span>
            <span>Source code:</span>
          </span>
          {
            source.includes('http') ? <a className="content col-10 text-decoration-none text-info" role="button" target="_blank" rel="noopener noreferrer" href={source}>{source}</a> : <span className="content col-10">{source}</span>
          }
        </span>

        <span className="row">
          <span className="detail-title col-2">
            <span className=""><i className="bi bi-dot"></i></span>
            <span>Demo:</span>
          </span>
          {
            demo.includes('http') ? <a className="content col-10 text-decoration-none text-info" role="button" target="_blank" rel="noopener noreferrer" href={demo}>{demo}</a> : <span className="content col-10">{demo}</span>
          }
        </span>
      </div>
    </div>
  )
}

export default ItemProject
