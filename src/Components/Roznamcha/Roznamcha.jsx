import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";

import "../../Styles/Roznamcha/Roznamcha.css"
export function Roznamcha() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content">
                <div className="roznamcha-container">
                <div className="roznamcha-header">
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn">اسناد رسید</span>
                    <span className="btn">اسناد برد</span>
                    <span className="btn">فاکتور های فروش</span>
                    <span className="btn">فاکتور های خرید</span>
                    <span className="btn btn-save">ثبت</span>
                </div>
                </div>
            </div>
        </div>
    )
}