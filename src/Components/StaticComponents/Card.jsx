import "../../Styles/StaticComponents/Card.css"
export function Card(props) {
    const cardTitle = props.cardTitle
    const cardCount = props.cardCount
    return(
        <div className="card">
            <span className="card-title">{cardTitle}</span>
            <img src="logo192.png" alt="card-icon" />
            <span className="card-counter">{cardCount}</span>
        </div>
    )
}