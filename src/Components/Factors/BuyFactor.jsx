import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";

export function BuyFactor() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content">
                <div className="buyFactor-container">
                    this is buy factor
                </div>
            </div>
        </div>
    )
}