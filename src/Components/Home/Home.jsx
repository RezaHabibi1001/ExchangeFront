import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/Home/Home.css";

export function Home() {
  const [addPopUp, setAddPopUp] = useState(false);

  return (
    <div className="container">
      <Header />
      <SideBar />
      {addPopUp ? (
        <div className="addDrug-content">
          <div className="addDrug-header">
            <img
              src="close.png"
              alt="close"
              onClick={() => setAddPopUp(false)}
            />
            <span>افزودن حواله جدید</span>
            <img src="bills.png" alt="logo" />
          </div>
          <div className="addDrug-body">
            <input
              type="text"
              name="sendNumber"
              placeholder="نمبر حواله"
              className="addDrug-body-input"
            />
            <input
              type="text"
              name="sendNumber"
              placeholder="نام مشتری"
              className="addDrug-body-input"
            />
            <input
              type="text"
              name="sendNumber"
              placeholder="کشور/ شهر "
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="واحد پول"
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="مبلغ حواله"
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="قیمت خرید"
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="قیمت فروش"
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="مقدار مفاد"
              className="addDrug-body-input"
            />
            <input
              type="button"
              value="ثبت حواله"
              className="addDrug-body-button"
            />
          </div>
        </div>
      ) : null}
      <div className="content">
        <div className="havala-container">
          <div className="hawala-header">
            <select className="havala-select-search">
              <option>حساب عمه نوری</option>
              <option>حساب اکبر</option>
              <option>حساب محمد</option>
            </select>
            <select className="havala-select-search">
              <option>نمبر حواله</option>
              <option>نام مشتری</option>
              <option>تاریخ حواله</option>
            </select>

            <Search searchPlaceHolder="جستجوی حواله" />
            <span
              className="add-havala btn-user"
              onClick={() => setAddPopUp(true)}
            >
              +
            </span>
          </div>
          <div className="havala-content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="drug-code">شماره</th>
                    <th className="drug-type">نمبر حواله</th>
                    <th className="drug-name">نام مشتری</th>
                    <th className="drug-contery">کشور / شهر</th>
                    <th className="drug-count">واحد پول</th>
                    <th className="drug-company">مبلغ حواله</th>
                    <th className="drug-cost">قیمت خرید</th>
                    <th className="drug-total">قیمت فروش</th>
                    <th className="drug-total">مقدار مفاد</th>
                    <th className="drug-action">تنظیمات</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="home-footer">
              <input
                type="button"
                value=" < "
                className="home-footer-backward"
              />
              <input
                type="button"
                value=" > "
                className="home-footer-forward"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
