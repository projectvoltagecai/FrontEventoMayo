

function CardE({title, image, description}) {
  return (
    <div>
        <h3>{title}</h3>
        <img src={image}></img>
        <p>{description}</p>
    </div>
  )
}

export default CardE