import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Drugs/Drugs.css"
import { Button } from "../StaticComponents/Button";
import { Table } from "../StaticComponents/Table";
export function Drugs() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
            <div className="drugs-container">
                <div className="drugs-header">
                    <Search  searchPlaceHolder="جستجوی دارو"/>
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn btn-save">ثبت دارو</span>
                    <span className="btn btn-save">ثبت نوعیت</span>
                    <span className="btn ">لیست نوعیت ها</span>
                    <span className="btn ">لیست داروها</span>
                </div>
                <div className="drugs-content">
                   <Table />
                </div>
            </div>
            </div>
        </div>
    )
}