import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Users/Users.css"
import { Table } from "../StaticComponents/Table";
export function Users() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
            <div className="users-container">
                <div className="users-header">
                    <Search  searchPlaceHolder="جستجوی کاربران"/>
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn btn-save">ثبت کاریر</span>
                    <span className="btn ">لیست کاربران</span>
                </div>
                <div className="users-content">
                   <Table />
                </div>
            </div>
            </div>
        </div>
    )
}