import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/Market/Market.css";

export function Market() {
  const [marketValue, setMarketValue] = useState(3843);
  const [editPopUp, setEditPopUp] = useState(false);

  const editMarket = (e) => {
    e.preventDefault();
    setMarketValue(e.target.marketValue.value);
    setEditPopUp(false);
  };
  return (
    <div className="container">
      <Header />
      <SideBar />

      <div className="content">
        <div className="market-container">
          {editPopUp ? (
            <div className="editMarket-content">
              <div className="addDrug-header">
                <img
                  src="close.png"
                  alt="close"
                  onClick={() => setEditPopUp(false)}
                />
                <span>ویرایش موجودی مارکت</span>
                <img src="bills.png" alt="logo" />
              </div>
              <form onSubmit={editMarket}>
                <div className="addDrug-body">
                  <input
                    defaultValue={marketValue}
                    type="text"
                    name="marketValue"
                    placeholder="مقدار موجودی"
                    className="addDrug-body-input"
                  />

                  <input
                    type="submit"
                    value="ثبت تغییرات"
                    className="addDrug-body-button"
                  />
                </div>
              </form>
            </div>
          ) : null}
          <div className="repository-container">
            <div className="repository-header">
              <img
                onClick={() => setEditPopUp(true)}
                src="edit.png"
                className="repository-header-img"
                alt="edit"
              />
            </div>
            <span className="repository-title">موجودی کل</span>
            <span className="repository-amount">{marketValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
