import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Drugs/AddDrug.css"
export function AddDrug() {
    return(
        <div className="addDrug">
            <Header />
            <SideBar />
            <div className="content">
                <div className="addDrug-content">
                    <div className="addDrug-header">
                        <img src="close.png" alt="close" />
                        <span>ثبت داروی جدید</span>
                        <img src="logo192.png" alt="logo" />
                    </div>
                    <div className="addDrug-body">
                        body
                    </div>
                    <div className="addDrug-footer">
                        footer
                    </div>
                </div>
            </div>
        </div>
    )
}