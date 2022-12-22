import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/StaticComponents/Global.css"
import "../../Styles/Home/Home.css"
import { Card } from "../StaticComponents/Card";
export function Home() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
                <div className="card-container">
                    <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    </div>

                    <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    </div>
                  
                </div>
            </div>
        </div>
    )
}