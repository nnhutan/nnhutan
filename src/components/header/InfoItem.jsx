
const InfoItem = ({ icon, content, type }) => {

  const openLink = () => {
    if (!type) return;
    if (type === 'email') window.open('mailto:' + content, '_blank', 'noopener,noreferrer')
    else
      window.open('https://' + content, '_blank', 'noopener,noreferrer')
  }


  return (
    <div className="info-item" onClick={openLink} role={type ? "button" : ""} >
      <span className="icon">
        <i className={icon}></i>
      </span>
      <span className="content">{content}</span>
    </div>
  )
}

export default InfoItem
