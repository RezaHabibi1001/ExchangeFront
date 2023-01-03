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
                <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="stack-code">ردیف</th>
                        <th className="stack-name">نام</th>
                        <th className="stack-type">نوعیت</th>
                        <th className="stack-address">آدرس</th>
                        <th className="stack-action">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>گدام اول</td>
                        <td>شربت</td>
                        <td>مارکت ابن سینا</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
                </div>
            </div>
            </div>
        </div>
    )
}