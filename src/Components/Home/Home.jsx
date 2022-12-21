import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/StaticComponents/Global.css"
export function Home() {
    return(
        <div className="home-container">
            <Header />
            <SideBar />
            <div className="content">
                this is content
            </div>
        </div>
    )
}