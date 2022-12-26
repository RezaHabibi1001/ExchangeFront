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
                    <table className="table">
                        <thead>
                            <tr className="heading">
                                <th>شماره</th>
                                <th>نوعیت</th>
                                <th>نام</th>
                                <th>کمپنی</th>
                                <th>کشور</th>
                                <th>تعداد</th>
                                <th>قیمت</th>
                                <th>جمله</th>
                                <th>تاریخ انقضاء</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>کپسول</td>
                                <td>آموکسی سیلین 500 ملی</td>
                                <td>فارابی</td>
                                <td>ایرانی</td>
                                <td>20000</td>
                                <td>250</td>
                                <td>5000000</td>
                                <td>2022 / 4/ 1</td>
                                <td>ویرایش / حذف</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}