import ItemEducation from './ItemEducation'
import TitleBody from '../titleBody/TitleBody'
import './Education.scss'

const Data = [
  {
    url: "https://www.hcmut.edu.vn/vi",
    university: "Ho Chi Minh City University of Technology – VNU HCM",
    time: "Aug 2019 - Present",
    major: "Computer Science Major",
    courses: "OOP in C++, Algorithms, Operating Systems, Data Structures, Computer Networking, Software Engineering, Mobile Development, Web Programming, Principle of Programming Language"
  },
  {
    url: "http://thpttranhungdao.edu.vn/",
    university: "Tran Hung Dao High School - Le Thuy, Quang Binh",
    time: "2016 - 2019",
    major: "A10",
    courses: "I have learned a lot of things here."
  }
]

const Education = () => {
  return (
    <div className="education">
      <TitleBody icon="bi bi-mortarboard-fill" title="Education" />
      <div className="list ps-lg-5 ps-2">
        {
          Data.map((item, index) => <ItemEducation {...item} key={index} />)
        }
      </div>
    </div>
  )
}

export default Education
