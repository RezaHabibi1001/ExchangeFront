import "../../Styles/StaticComponents/Button.css"
export function Button(props) {
    const buttonText = props.buttonText
    const buttonIcon = props.buttonIcon
    return(
        <div className="button-container">
            <img className="btn-icon" src={buttonIcon} alt="button-icon" />
            <span className="btn-text">{buttonText}</span>
        </div>
    )
}