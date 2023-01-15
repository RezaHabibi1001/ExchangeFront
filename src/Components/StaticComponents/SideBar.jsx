import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../Styles/StaticComponents/SideBar.css";
import { Button } from "./Button";
import { DropDownButton } from "./DropDownButton";
export function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sideBar-container">
      <Link to={"/market"} style={{ textDecoration: "none" }}>
        <Button buttonText="موجودی" buttonIcon="users.png" />
      </Link>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <Button buttonText="لیست حواله ها" buttonIcon="factors.png" />
      </Link>
      <Link to={"/card"} style={{ textDecoration: "none" }}>
        <Button buttonText="کارت ها" buttonIcon="factors.png" />
      </Link>
      <Link to={"/safe"} style={{ textDecoration: "none" }}>
        <Button buttonText="صندوقچه" buttonIcon="stacks.png" />
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <Button buttonText="درباره ما" buttonIcon="users.png" />
      </Link>
    </div>
  );
}
