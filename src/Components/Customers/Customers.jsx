import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import"../../Styles/Customers/Customers.css"
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
                <div className="customers-content">
                <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="customer-code">ردیف</th>
                        <th className="customer-name">نام</th>
                        <th className="customer-company">کمپنی</th>
                        <th className="customer-address">آدرس</th>
                        <th className="customer-phone">مویابل</th>
                        <th className="customer-province">ولایت</th>
                        <th className="customer-accounting">الباقی</th>
                        <th className="customer-action">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>احمد</td>
                        <td>نوین فارما</td>
                        <td>مارکت ابن سینا</td>
                        <td>0093790883362</td>
                        <td>هرات</td>
                        <td>2053040</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>45524354363</td>
                    </tr>
                </tfoot>
            </table>
        </div>
                </div>
            </div>
            </div>
        </div>
    )
}