import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Customers/Customers.css"
// import { Button } from "../StaticComponents/Button";
import { Table } from "../StaticComponents/Table";
export function Customers() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
            <div className="customers-container">
                <div className="customers-header">
                    <Search  searchPlaceHolder="جستجوی مشتری"/>
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn btn-save">ثبت مشتری</span>
                    <span className="btn ">لیست مشتریان</span>
                </div>
                <div className="drugs-content">
                   <Table />
                </div>
            </div>
            </div>
        </div>
    )
}