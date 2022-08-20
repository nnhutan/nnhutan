import ItemEducation from "./ItemEducation";
import TitleBody from "../titleBody/TitleBody";
import "./Education.scss";

const Education = ({ data }) => {
  return (
    <div className="education">
      <TitleBody icon="bi bi-mortarboard-fill" title="Education" />
      <div className="list ps-lg-5 ps-2">
        {data.body &&
          data.body.educations.map((item, index) => (
            <ItemEducation {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Education;
