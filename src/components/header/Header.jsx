import './Header.scss'
import InfoItem from './InfoItem'
import Data from './data'


const Header = () => {
  return (
    <header className="header">
      <div className="container h-100">
        <div className="row g-0">
          <div className="col-xl-3 left-info d-flex flex-column justify-content-end order-2 order-xl-1 col-md-6 ps-lg-0 ps-4">
            {
              Data.LeftInfo.map((item, index) => <InfoItem {...item} key={index} />)
            }
          </div>

          <div className="col-xl-6 middle-info d-flex flex-column align-items-center justify-content-center order-1 order-xl-2">
            <h2 className="fullname">DINH NHU TAN</h2>
            <div className="avatar">
              <img src="https://avatars.githubusercontent.com/u/75310135?v=4" alt="my self" className="" />
            </div>
          </div>

          <div className="col-xl-3 right-info d-flex flex-column justify-content-end order-3 align-items-md-end col-md-6 ps-lg-0 ps-4">
            {
              Data.RightInfo.map((item, index) => <InfoItem {...item} isRight={true} key={index} />)
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
