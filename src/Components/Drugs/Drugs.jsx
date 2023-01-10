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
                    <span className="btn btn-print">چاپ</span>
                    <span className="btn btn-save">ثبت دارو</span>
                    <span className="btn btn-save">ثبت نوعیت</span>
                    <span className="btn ">لیست نوعیت ها</span>
                    <span className="btn ">لیست داروها</span>
                </div>
                <div className="drugs-content">
                <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="drug-code">ردیف</th>
                        <th className="drug-type">نوعیت</th>
                        <th className="drug-name">نام</th>
                        <th className="drug-company">کمپنی</th>
                        <th className="drug-contery">کشور</th>
                        <th className="drug-count">تعداد</th>
                        <th className="drug-cost">قیمت</th>
                        <th className="drug-total">جمع</th>
                        <th className="drug-action">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
                        <td className="action">
                            <img src="edit.png" alt="edit" />
                            <img src="delete.png" alt="delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>کپسول</td>
                        <td>آموکسی500</td>
                        <td>فارابی</td>
                        <td>ایرانی</td>
                        <td>1000</td>
                        <td>350</td>
                        <td>350000</td>
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