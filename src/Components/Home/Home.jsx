import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";

export function Home() {
    return(
        <div className="home-container">
            <Header />
            <SideBar />
        </div>
    )
}