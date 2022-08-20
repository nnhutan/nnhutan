import TitleBody from "../titleBody/TitleBody";
import "./Skill.scss";

const Skill = ({ data }) => {
  return (
    <div className="skill mt-4">
      <TitleBody icon="bi bi-lightning-fill" title="Skills" />
      <div className="list ps-md-5">
        <div className="tools-language row">
          <span className="title col-12 col-lg-2">Tools, Languages:</span>
          <span className="content col-12 col-lg-10">
            {data.body && data.body.skills.tools_languages}
          </span>
        </div>
        <div className="tech row">
          <span className="title col-12 col-lg-2">Technologies:</span>
          <span className="content col-12 col-lg-10">
            {data.body && data.body.skills.technologies}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
