import TitleBody from '../titleBody/TitleBody'
import './Skill.scss'

const Data = {
  tools_languages: "C, C++, Python, JavaScript, PHP, HTML, CSS, SASS, LaTeX, Vim, Ruby",
  technologies: "React.js, Node.js, Express.js, MySQL, MongoDB, Git, Bootstrap, Tailwind, Rails"
}

const Skill = () => {
  return (
    <div className="skill mt-4">
      <TitleBody icon="bi bi-lightning-fill" title="Skills" />
      <div className="list ps-md-5">
        <div className="tools-language row">
          <span className="title col-12 col-lg-2">Tools, Languages:</span>
          <span className="content col-12 col-lg-10">{Data.tools_languages}</span>
        </div>
        <div className="tech row">
          <span className="title col-12 col-lg-2">
            Technologies:
          </span>
          <span className="content col-12 col-lg-10">{Data.technologies}</span>
        </div>
      </div>
    </div>
  )
}

export default Skill
