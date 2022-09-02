const ItemExperience = ({ company, time, position }) => {
  return (
    <div className="item-experience">
      <div className="top d-lg-flex align-items-center justify-content-between">
        <a
          href="#"
          className="university btn btn-link text-decoration-none text-start p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
        <span className="time">{time}</span>
      </div>
      <span className="">
        Position: <span style={{ color: "#666" }}>{position}</span>
      </span>
    </div>
  );
};

export default ItemExperience;
