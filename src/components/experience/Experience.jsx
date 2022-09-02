import ItemExperience from "./ItemExperience";
import TitleBody from "../titleBody/TitleBody";
import "./Experience.scss";

const Experience = ({ data }) => {
  return (
    <div className="experience">
      <TitleBody icon="bi bi-briefcase-fill" title="Work Experience" />
      <div className="list ps-lg-5 ps-2">
        {data.body &&
          data.body.work_experiences.map((item, index) => (
            <ItemExperience {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
