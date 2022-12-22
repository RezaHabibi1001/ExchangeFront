import "../../Styles/StaticComponents/Card.css"
export function Card() {
    return(
        <div className="card">
            <span className="card-title">دارو ها</span>
            <img src="logo192.png" alt="card-icon" />
            <span className="card-counter">2000</span>
        </div>
    )
}