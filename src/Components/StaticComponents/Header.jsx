import "../../Styles/StaticComponents/Global.css"
import "../../Styles/StaticComponents/Header.css"
export function Header() {
    return(
        <div className="header-container">
            <a href="#"><img src="turn-off.png" alt="خروج" /></a>
            <span className="header-heading">سیستم مدیریتی اکسیر</span>
            <a href="#"><img src="pharmacy.png" alt="لوگو" /></a>
        </div>
    )
}