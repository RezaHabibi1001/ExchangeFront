import "../../Styles/StaticComponents/Card.css"
export function Card(props) {
    const cardTitle = props.cardTitle
    const cardCount = props.cardCount
    const cardImg = props.cardImg
    return(
        <div className="card">
            <span className="card-title">{cardTitle}</span>
            <img src={cardImg} alt="card-icon" />
            <span className="card-counter">{cardCount}</span>
        </div>
    )
}