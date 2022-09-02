import TitleBody from "../titleBody/TitleBody";
import ItemProject from "./ItemProject";
import "./Project.scss";

const Project = ({ data }) => {
  return (
    <div className="project mt-4">
      <TitleBody icon="bi bi-clipboard2-check-fill" title="Projects" />
      <div className="list ps-2 ps-lg-5">
        {data.body &&
          data.body.projects.map((item, index) => (
            <ItemProject {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Project;
