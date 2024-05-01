import './index.css'

const CardItem = props => {
  const {userDetails} = props
  const {imgUrl, title, description, className} = userDetails

  return (
    <li className={className}>
      <div className = "card">
      <div className="card-container">
        <h1 className="card-name"> {title} </h1>
        <p className="card-designation"> {description} </p>
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
      </div>
    </li>
  )
}
export default CardItem
