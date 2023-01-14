import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Safe/Safe.css";

export function Safe() {
  return (
    <div className="container">
      <Header />
      <SideBar />

      <div className="content">
        <div className="drugs-container">
          <div className="drugs-header">
            <div className="tarafhesab-container">
              <span>طرف حساب</span>
              <select className="safe-select-box">
                <option>سادات</option>
                <option>اکبر</option>
                <option>عمه نوری</option>
              </select>
            </div>
            <div className="profit-container">
              <span>مفاد بر اساس</span>
              <select className="safe-select-box">
                <option>مفاد امروز</option>
                <option>مفاد دیروز</option>
                <option>هفت روز قبل</option>
                <option>یک ماه قبل</option>
              </select>
            </div>
            <div className="money-safe">
              <span className="money-safe-label">صندوق مفاد</span>
              <span className="money-safe-value">4543 یورو</span>
            </div>
          </div>
          <div className="safe-content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="drug-code">شماره</th>
                    <th className="drug-type">نمبر حواله</th>
                    <th className="drug-total">مقدار مفاد</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
          <div className="safe-footer">
            <input type="button" value=" < " className="safe-footer-backward" />
            <input type="button" value=" > " className="safe-footer-forward" />
          </div>
        </div>
      </div>
    </div>
  );
}
