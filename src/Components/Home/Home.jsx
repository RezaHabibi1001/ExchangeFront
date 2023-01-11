import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/StaticComponents/Global.css";
import "../../Styles/Home/Home.css";
import { Card } from "../StaticComponents/Card";
export function Home() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-header-container">
          <img src="factors.png" alt="loginImage" className="login-image" />
          <span className="login-header">ورود به برنامه حسابداری</span>
          <img src="factors.png" alt="loginImage" className="login-image" />
        </div>
        <input type="text" placeholder="شماره تماس" className="login-input" />
        <input type="text" placeholder="رمز عبور" className="login-input" />
        <input type="button" value="ورود به برنامه" className="login-button" />
      </div>
    </div>
  );
}
