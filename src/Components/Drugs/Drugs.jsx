import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Drugs/Drugs.css";
import { Button } from "../StaticComponents/Button";
import { DropDownButton } from "../StaticComponents/DropDownButton";

export function Drugs() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="addDrug-content">
        <div className="addDrug-header">
          <img src="close.png" alt="close" />
          <span>افزودن حواله جدید</span>
          <img
            src="bills.png"
            alt="logo"
            styles={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="addDrug-body"></div>
        <div className="addDrug-footer"></div>
      </div>

      <div className="content">
        <div className="drugs-container">
          <div className="drugs-header">
            <select className="select-search">
              <option>نمبر حواله</option>
              <option>نام مشتری</option>
              <option>تاریخ حواله</option>
            </select>
            <Search searchPlaceHolder="جستجوی حواله" />
            <span className="btn btn-user">حساب اکبر</span>
            <span className="btn btn-user">حساب سادات</span>
            <span className="btn btn-user">حساب عمه نوری</span>
            <span className="btn btn-add">+ افزودن حواله جدید</span>
          </div>
          <div className="drugs-content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="drug-code">شماره</th>
                    <th className="drug-type">نمبر حواله</th>
                    <th className="drug-name">نام مشتری</th>
                    <th className="drug-company">مبلغ حواله</th>
                    <th className="drug-contery">کشور</th>
                    <th className="drug-count">واحد پول</th>
                    <th className="drug-cost">قیمت خرید</th>
                    <th className="drug-total">قیمت فروش</th>
                    <th className="drug-total">مقدار مفاد</th>
                    <th className="drug-action">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>3</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>4</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>5</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>6</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>6</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>7</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
