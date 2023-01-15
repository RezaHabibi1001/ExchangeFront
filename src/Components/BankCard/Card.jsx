import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/BankCard/Card.css";

export function Card() {
  const [addPopUp, setAddPopUp] = useState(false);
  const [data, setData] = useState([
    {
      id: "1",
      backName: "بانک صادارت",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",
      existance: "4485845",
    },
    {
      id: "2",
      backName: "باک ملت",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",

      existance: "4485845",
    },
    {
      id: "3",
      backName: "بانک سپهر",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",

      existance: "4485845",
    },
    {
      id: "4",
      backName: "بانک ملت",
      cardNumber: "32897384",
      hesabNumber: "378394738874",

      shabaNumber: "9234829038490238490",
      existance: "4485845",
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
            <select className="addDrug-body-input currency-type">
              <option>معمولی</option>
              <option>کارت به کارت</option>
            </select>
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
          <div className="card-header">
            <Search searchPlaceHolder="جستجوی حواله" />
            <span
              className="add-newDard btn-user"
              onClick={() => setAddPopUp(true)}
            >
              افزودن کارت
            </span>
          </div>
          <div className="havala-content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="mycard-code">شماره</th>
                    <th className="mycard-name">نام کارت</th>
                    <th className="mycard-number">شماره کارت</th>
                    <th className="mycard-shaba">شماره شبا</th>
                    <th className="mycard-hesab">شماره حساب</th>

                    <th className="mycard-existance">موجودی کارت</th>

                    <th className="mycard-setting">تنظیمات</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((havala, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{havala.backName}</td>
                        <td>{havala.cardNumber}</td>
                        <td>{havala.shabaNumber}</td>
                        <td>{havala.existance}</td>
                        <td>{havala.hesabNumber}</td>

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
