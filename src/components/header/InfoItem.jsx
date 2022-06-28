
const InfoItem = ({ icon, content, type, isRight }) => {

  const openLink = () => {
    if (!type) return;
    if (type === 'email') window.open('mailto:' + content, '_blank', 'noopener,noreferrer')
    else
      window.open('https://' + content, '_blank', 'noopener,noreferrer')
  }


  return (
    <div className="info-item d-flex align-item-center" onClick={openLink} role={type ? "button" : ""} >
      <span className={isRight ? "icon order-md-2 ms-md-2 me-2" : "icon me-2"}>
        <i className={icon}></i>
      </span>
      <span className="content">{content}</span>
    </div>
  )
}

export default InfoItem
