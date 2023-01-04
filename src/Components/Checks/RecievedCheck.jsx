import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";

import "../../Styles/Checks/RecievedCheck.css"
export function RecievedCheck() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content">
            <div className="recievedCheck-container">
            <div className="checks-header">
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn">اصلاح سند</span>
                    <span className="btn btn-save">ثبت نوعیت</span>
            </div>
            <div className="checks">
                <form action="#">
                    
                </form>
            </div>
            </div>

            </div>
        </div>
    )
}