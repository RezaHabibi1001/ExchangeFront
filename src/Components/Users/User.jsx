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
                <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="user-code">ردیف</th>
                        <th className="user-name">نام</th>
                        <th className="user-userName">نام کاربری</th>
                        <th className="user-password">پسورد</th>
                        <th className="user-type">صلاحیت</th>
                        <th className="user-action">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>         
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>yosufmohammadi</td>
                        <td>yousuf123</td>
                        <td>ادمین</td>
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