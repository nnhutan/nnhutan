import TitleBody from '../titleBody/TitleBody'
import ItemProject from './ItemProject'
import './Project.scss'

const Data = [
  {
    name: "Social crawler",
    org: "Lixibox's external service",
    role: "Web app",
    time: "Apr 2022 – Jun 2022",
    features: "Get data of social posts like Facebook, Instagram, Tiktok",
    technologies: "Figma, Rails, Bootstrap, Digital Ocean",
    source: "Not available",
    demo: "https://socialcrawler.online/"
  },
  {
    name: "Web Phone",
    org: "Personal project",
    role: "Web app",
    time: "Mar 2022 – Apr 2022",
    features: "Make a call to a Vietnamese subscriber",
    technologies: "Figma, React.js, Jssip",
    source: "https://github.com/nnhutan/webphone.git",
    demo: "https://webphonecalls.online/"
  },
  {
    name: "Cashmin",
    org: "Mobile Development Course",
    role: "Frontend team - Hybrid app",
    time: "Jan 2022 – Apr 2022",
    features: "Revenue and expenditure management",
    technologies: "Figma, ReactNative, Node.js, Express.js, MongoDB",
    source: "https://github.com/bungio20k/cashmin.git",
    demo: "Not available"
  },
  {
    name: "Smart Home System",
    org: "Multidisciplinary project course",
    role: "Frontend and Backend team - Web app",
    time: "Jan 2022 – Apr 2022",
    features: "Measure temp, humid, gas warning, auto turn on and off lights, open and close the door",
    technologies: "Figma, IoT devices, Python, React.js, Node.js, Express.js, MongoDB",
    source: "https://github.com/nnhutan/smarthome.git",
    demo: "https://homesmart.netlify.app/"
  },
  {
    name: "HCMUT Note",
    org: "Synthetic project of software engineering Course",
    role: "Frontend and Backend team - Web app",
    time: "Sep 2021 – Nov 2021",
    features: "Create, add, edit and delete notes",
    technologies: "Moqups, Bootstrap, React.js, Node.js, Express.js, MongoDB",
    source: "https://github.com/bungio20k/hcmut-note.git",
    demo: "https://hcmut-note.herokuapp.com/"
  },
  {
    name: "The Bell Store",
    org: "Web Programming Course",
    role: "Frontend and Backend team - Web app",
    time: "Sep 2021 – Dec 2021",
    features: "A product management web about phones, recommending and selling products",
    technologies: "Bootstrap, React.js, PHP, MySQL",
    source: "https://github.com/nnhutan/TheBellApp.git",
    demo: "Not available"
  },
  {
    name: "Restaurant POS",
    org: "Software Engineering",
    role: "Frontend team - Web app",
    time: "Sep 2021 – Dec 2021",
    features: "Manage the restaurant’s table, menu, dishes, order, payment",
    technologies: "Figma, Bootstrap, React.js, Node.js, Express.js, MongoDB",
    source: "Not available",
    demo: "Not available"
  },
]

const Project = () => {
  return (
    <div className="project mt-4">
      <TitleBody icon="bi bi-briefcase-fill" title="Projects" />
      <div className="list ps-2 ps-lg-5">
        {
          Data.map((item, index) => <ItemProject {...item} key={index} />)
        }
      </div>
    </div>
  )
}

export default Project
