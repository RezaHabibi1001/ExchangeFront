import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Stacks/Stacks.css"
import { Table } from "../StaticComponents/Table";
export function Stacks() {
    return(
        <div className="container">
            <Header />
            <SideBar />
            <div className="content"> 
            <div className="stacks-container">
                <div className="stacks-header">
                    <Search  searchPlaceHolder="جستجوی گدام"/>
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn btn-save">ثبت گدام</span>
                    <span className="btn ">لیست گدام ها</span>
                </div>
                <div className="stacks-content">
                   <Table />
                </div>
            </div>
            </div>
        </div>
    )
}