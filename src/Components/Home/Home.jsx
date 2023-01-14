import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/Home/Home.css";

export function Home() {
  const [addPopUp, setAddPopUp] = useState(false);
  const [data, setData] = useState([
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",

      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      havala_type: "کارت به کارت",
      number_havala: "1001",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      safe: 30,
      havala_date: "2022-03-07",
    },
  ]);
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
              placeholder="نمبر حواله اول "
              className="addDrug-body-input"
            />
            <input
              type="text"
              name="sendNumber"
              placeholder="نمبر حواله دوم "
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
              placeholder="از شهر "
              className="addDrug-body-input"
            />{" "}
            <input
              type="text"
              name="sendNumber"
              placeholder="به شهر "
              className="addDrug-body-input"
            />{" "}
            <select className="addDrug-body-input currency-type">
              <option>یورو .... افغانی</option>
              <option>یورو .... تومان</option>
              <option>یورو .... دالر</option>
              <option>یورو .... کالدار</option>
              <option>یورو .... لیره</option>
              <option>دالر .... افغانی</option>
              <option>دالر .... تومان</option>
              <option>دالر .... یورو</option>
              <option>دالر .... کالدار</option>
              <option>دالر .... لیره</option>
            </select>
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
                    <th className="home-code">شماره</th>
                    <th className="home-number">نمبر حواله</th>
                    <th className="home-fullname">نام مشتری</th>
                    <th className="home-fromCity">از شهر</th>
                    <th className="home-toCity">به شهر</th>
                    <th className="home-havalaAmount">مبلغ حواله</th>
                    <th className="home-purchased"> خرید به افغانی</th>
                    <th className="home-sell"> فروش به افغانی</th>
                    <th className="home-safe">مقدار مفاد</th>
                    <th className="home-date">تاریخ حواله</th>
                    <th className="home-setting">تنظیمات</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((havala, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{havala.number_havala}</td>
                        <td>{havala.fullName}</td>
                        <td>{havala.from_city}</td>
                        <td>{havala.to_city}</td>
                        <td>{havala.havala_amount}</td>
                        <td>{havala.purchased_price}</td>
                        <td>{havala.sell_price}</td>
                        <td>{havala.safe}</td>
                        <td>{havala.havala_date}</td>

                        <td className="home-action">
                          <img src="edit.png" alt="edit" />
                          <img src="delete.png" alt="delete" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
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
