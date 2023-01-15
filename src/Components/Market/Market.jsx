import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/Market/Market.css";

export function Market() {
  const [addPopUp, setAddPopUp] = useState(false);
  const [data, setData] = useState([]);
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
        <div className="market-container">
          <div className="repository-container">
            <div className="repository-header">
              <img
                src="edit.png"
                className="repository-header-img"
                alt="edit"
              />
            </div>
            <span className="repository-title">موجودی کل</span>
            <span className="repository-amount">798789</span>
          </div>
        </div>
      </div>
    </div>
  );
}
