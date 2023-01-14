import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Safe/Safe.css";
import { useState } from "react";
export function Safe() {
  const [shouldSecure, setShouldSecure] = useState(false);
  return (
    <div className="container">
      <Header />
      <SideBar />

      <div className="content">
        <div className="safe-container">
          <div className="safe-header">
            <div className="tarafhesab-container">
              <span>طرف حساب</span>
              <select className="safe-select-boxes">
                <option>عمه نوری</option>
                <option>اکبر</option>
                <option>محمد</option>
              </select>
            </div>
            <div className="profit-container">
              <span>مفاد بر اساس</span>
              <select className="safe-select-boxes">
                <option>مفاد امروز</option>
                <option>مفاد دیروز</option>
                <option>هفت روز قبل</option>
                <option>یک ماه قبل</option>
              </select>
            </div>
            <div className="money-safe">
              <span className="money-safe-label">صندوق مفاد</span>
              {shouldSecure ? (
                <span className="money-safe-value">4543 یورو</span>
              ) : (
                <span className="money-safe-value"> . . . . </span>
              )}
              <img
                src={shouldSecure ? "stack.png" : "close.png"}
                alt="secureImage"
                className="safe-secure-image"
                onClick={() => setShouldSecure(!shouldSecure)}
              />
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
