import "../../Styles/StaticComponents/Global.css";
import "../../Styles/Login/Login.css";
export function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-header-container">
          <img src="factors.png" alt="loginImage" className="login-image" />
          <span className="login-header">ورود به سیستم حسابداری</span>
          <img src="factors.png" alt="loginImage" className="login-image" />
        </div>
        <input type="text" placeholder="شماره تماس" className="login-input" />
        <input type="password" placeholder="رمز عبور" className="login-input" />
        <input type="button" value="ورود به برنامه" className="login-button" />
      </div>
    </div>
  );
}
