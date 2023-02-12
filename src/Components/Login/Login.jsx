import "../../Styles/StaticComponents/Global.css";
import "../../Styles/Login/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    phone: "782504970",
    password: "102030",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      phone: e.target.phone.value,
      password: e.target.password.value,
    };
    if (
      loginData.phone === user.phone &&
      loginData.password === user.password
    ) {
      localStorage.setItem("login", true);
      navigate("/home");
    } else {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="login-container">
          <div className="login-header-container">
            <img src="factors.png" alt="loginImage" className="login-image" />
            <span className="login-header">ورود به سیستم حسابداری</span>
            <img src="factors.png" alt="loginImage" className="login-image" />
          </div>
          {loginError ? (
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              شماره تماس یا رمز عبور اشتباه است
            </span>
          ) : null}
          <input
            type="text"
            name="phone"
            placeholder="شماره تماس"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="login-input"
          />

          <input
            type="submit"
            value="ورود به برنامه"
            className="login-button"
          />
        </div>
      </form>
    </div>
  );
}
