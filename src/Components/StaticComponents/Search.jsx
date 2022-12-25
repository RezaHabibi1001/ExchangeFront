import "../../Styles/StaticComponents/Search.css"
export function Search(props) {
    const searchPlaceHolder = props.searchPlaceHolder
    return(
        <div className="search-container">
            <input type="seach" placeholder={searchPlaceHolder} className="search"/>
        </div>
    )
}