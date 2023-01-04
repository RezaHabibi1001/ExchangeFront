import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";

import "../../Styles/Checks/RecievedCheck.css"
export function GivenCheck() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content">
            <div className="recievedCheck-container">
            <div className="checks-header">
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn">اصلاح سند</span>
                    <span className="btn btn-save">ثبت</span>
            </div>
            <div className="checks">
                <form action="#">
                <div className="check-header">
                <span className="check-heading2">چک پرداختی</span>
                <div className="heading-group">
                    <span>شماره چک</span>
                    <span className="check-number">200</span>
                </div>
                </div>    
                <div className="group">
                    <span>تاریخ ثبت</span>
                    <input type="text" placeholder="1 / 2 / 1401"/>
                </div>
                <div className="group">
                    <span>طرف حساب</span>
                    <select name="customer" id="customer">
                        <option>احمد</option>
                        <option>احمد</option>
                        <option>احمد</option>
                        <option>احمد</option>
                        <option>احمد</option>
                    </select>
                </div>
                <div className="group">
                    <span>مبلغ</span>
                    <input type="text"/>
                </div>
                <div className="group">
                    <span>تکرار مبلغ</span>
                    <input type="text"/>
                </div>
                <div className="group">
                    <span>توضیحات</span>
                    <input type="text"/>
                </div>
                </form>
            </div>
            </div>

            </div>
        </div>
    )
}