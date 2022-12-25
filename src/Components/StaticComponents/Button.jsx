import "../../Styles/StaticComponents/Button.css"
export function Button(props) {
    const buttonText = props.buttonText
    return(
        <div className="button-container">
            <img className="btn-icon" src="pill.png" alt="button-icon" />
            <span className="btn-text">{buttonText}</span>
        </div>
    )
}