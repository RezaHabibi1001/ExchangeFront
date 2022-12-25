import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Drugs/Drugs.css"
import { Button } from "../StaticComponents/Button";
export function Drugs() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
            <div className="drugs-container">
                <div className="drugs-header">
                    <Search  searchPlaceHolder="جستجوی دارو"/>
                    <span className="btn-print">چاپ</span>
                    <span className="btn-print">ثبت دارو</span>
                    <span className="btn-print">ثبت نوعیت</span>
                    <span className="btn-print">لیست نوعیت</span>
                    <span className="btn-print">لیست داروها</span>
                </div>
            </div>
            </div>
        </div>
    )
}