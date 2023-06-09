import { Link } from "react-router-dom";
import "../../Styles/StaticComponents/Global.css";
import "../../Styles/StaticComponents/Header.css";
export function Header() {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <img src="turn-off.png" alt="خروج" />
      </Link>
      <span className="header-heading">سیستم حسابداری صرافی</span>
      <Link to={"#"}>
        <img
          src="factors.png"
          alt="لوگو"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
    </div>
  );
}
