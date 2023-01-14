import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/About/About.css";

export function About() {
  return (
    <div className="container">
      <Header />
      <SideBar />

      <div className="content">
        <div className="about-container">
          <div className="about-text">
            این اپلیکشن حسابداری توسط رضا حبیبی دیزاین و طراحی شده است این
            اپلیکشن حسابداری توسط رضا حبیبی دیزاین و طراحی شده استاین اپلیکشن
            حسابداری توسط رضا حبیبی دیزاین و طراحی شده استاین اپلیکشن حسابداری
            توسط رضا حبیبی دیزاین و طراحی شده استاین اپلیکشن حسابداری توسط رضا
            حبیبی دیزاین و طراحی شده استاین اپلیکشن حسابداری توسط رضا حبیبی
            دیزاین و طراحی شده استاین اپلیکشن حسابداری توسط رضا حبیبی دیزاین و
            طراحی شده استاین اپلیکشن حسابداری توسط رضا حبیبی دیزاین و طراحی شده
            استاین اپلیکشن حسابداری توسط رضا حبیبی دیزاین و طراحی شده استاین
            اپلیکشن حسابداری توسط رضا حبیبی دیزاین و طراحی شده است
          </div>
          <div className="about-card">
            <img
              src="profileReza.jpeg"
              alt="user"
              className="about-card-image"
            />
            <span className="about-card-fullname">رضا حبیبی</span>
            <span className="about-card-description">
              طراح و سازنده نرم افزار کامپیوتر , نرم افزار موبایل و ویب سایت
            </span>
            <div className="about-social-container">
              <a href="https://github.com/RezaHabibi1001">
                <img
                  src="002-github.png"
                  alt="github"
                  className="social-icon"
                />
              </a>
              <a href="https://www.facebook.com/reza.habibi.98434">
                <img
                  src="001-facebook.png"
                  alt="facebook"
                  className="social-icon"
                />
              </a>
              <a href="https://twitter.com/RezaHabbibi1001">
                <img
                  src="005-twitter.png"
                  alt="twitter"
                  className="social-icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/reza-habibi-1a7b99238/">
                <img
                  src="007-linkedin.png"
                  alt="linked in"
                  className="social-icon"
                />
              </a>
            </div>
            <div className="about-card-footer">
              <span className="about-card-footer-skill">HTML</span>
              <span className="about-card-footer-skill">CSS</span>
              <span className="about-card-footer-skill">JAVASCRIPT</span>
              <span className="about-card-footer-skill">REACT.JS</span>
              <span className="about-card-footer-skill">REACT-NATIVE</span>
              <span className="about-card-footer-skill">NODE.JS</span>
              <span className="about-card-footer-skill">EXPRESS</span>
              <span className="about-card-footer-skill">GRAPHQL</span>
              <span className="about-card-footer-skill">MONGODB</span>
              <span className="about-card-footer-skill">MYSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
