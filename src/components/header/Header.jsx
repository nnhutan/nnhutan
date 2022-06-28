import './Header.scss'
import InfoItem from './InfoItem'
import Data from './data'


const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-item-center h-100">
        <div className="left-info d-flex flex-column justify-content-end">
          {
            Data.LeftInfo.map((item, index) => <InfoItem {...item} key={index} />)
          }
        </div>

        <div className="middle-info d-flex flex-column align-items-center justify-content-center">
          <h2 className="fullname">DINH NHU TAN</h2>
          <div className="avatar">
            <img src="https://avatars.githubusercontent.com/u/75310135?v=4" alt="my self" className="" />
          </div>
        </div>

        <div className="right-info d-flex flex-column justify-content-end">
          {
            Data.RightInfo.map((item, index) => <InfoItem {...item} key={index} />)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
