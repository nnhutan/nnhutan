import "./Activities.scss";
import TitleBody from "../titleBody/TitleBody";
import ItemActivity from "./ItemActivity.jsx";

const Activities = ({ data }) => {
  return (
    <div className="activities mt-4">
      <TitleBody icon="bi bi-image-alt" title="Activities" />
      <div className="list ps-2 ps-lg-5">
        {data.body &&
          data.body.activities.map((item, index) => (
            <ItemActivity {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Activities;
