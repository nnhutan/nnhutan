import "./Body.scss";
import Education from "../education/Education";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Interests from "../interests/Interests";
import Activities from "../activities/Activities";
import Experience from "../experience/Experience";

const Body = ({ data }) => {
  return (
    <div className="body container py-4">
      <Education data={data} />
      <Experience data={data} />
      <Skill data={data} />
      <Project data={data} />
      <Interests data={data} />
      <Activities data={data} />
      <div className="author text-center">©2022 Dinh Nhu Tan</div>
    </div>
  );
};

export default Body;
