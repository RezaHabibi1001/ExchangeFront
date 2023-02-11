import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/BankCard/Card.css";

export function Card() {
  const [addPopUp, setAddPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [editRow, setEditRow] = useState();
  const [data, setData] = useState([
    {
      id: "1",
      bankName: "بانک صادارت",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",
      existance: "4485845",
    },
    {
      id: "2",
      bankName: "باک ملت",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",

      existance: "4485845",
    },
    {
      id: "3",
      bankName: "بانک سپهر",
      cardNumber: "32897384",
      shabaNumber: "9234829038490238490",
      hesabNumber: "378394738874",

      existance: "4485845",
    },
    {
      id: "4",
      bankName: "بانک ملت",
      cardNumber: "32897384",
      hesabNumber: "378394738874",
      shabaNumber: "9234829038490238490",
      existance: "4485845",
    },
  ]);

  //  This function is for inserting a new card
  const addCard = (e) => {
    e.preventDefault();

    let newCard = {
      bankName: e.target.bankName?.value,
      cardNumber: e.target.cardNumber?.value,
      hesabNumber: e.target.hesabNumber?.value,
      shabaNumber: e.target.shabaNumber?.value,
      existance: e.target.existance?.value,
    };
    setData([...data, newCard]);
    setAddPopUp(false);
  };

  //  This  function is for uodating a card
  const editCard = (e) => {
    e.preventDefault();

    const filteredRows = data.filter((item) => {
      if (item.cardNumber != editRow.cardNumber) {
        return item;
      }
    });
    let updatedRow = {
      bankName: e.target.bankName.value,
      cardNumber: e.target.cardNumber.value,
      hesabNumber: e.target.hesabNumber.value,
      shabaNumber: e.target.shabaNumber.value,
      existance: e.target.existance.value,
    };
    setData([...filteredRows, updatedRow]);
    setEditPopUp(false);
  };

  //  This function  is  for searchnig a   card

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

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
            <span>افزودن کارت بانکی جدید</span>
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={addCard}>
            <div className="addDrug-body">
              <input
                type="text"
                name="bankName"
                placeholder="نام کارت بانکی"
                className="addDrug-body-input"
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="شماره حساب  "
                className="addDrug-body-input"
              />
              <input
                type="text"
                name="hesabNumber"
                placeholder="شماره بانکی"
                className="addDrug-body-input"
              />
              <input
                type="text"
                name="shabaNumber"
                placeholder="شماره شبا"
                className="addDrug-body-input"
              />{" "}
              <input
                type="text"
                name="existance"
                placeholder="موجودی "
                className="addDrug-body-input"
              />{" "}
              <input
                type="submit"
                value="ثبت کارت"
                className="addDrug-body-button"
              />
            </div>
          </form>
        </div>
      ) : null}
      {editPopUp ? (
        <div className="addDrug-content">
          <div className="addDrug-header">
            <img
              src="close.png"
              alt="close"
              onClick={() => setEditPopUp(false)}
            />
            <span>ویرایش کارت بانکی</span>
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={editCard}>
            <div className="addDrug-body">
              <input
                defaultValue={editRow?.bankName}
                type="text"
                name="bankName"
                placeholder="نام کارت بانکی"
                className="addDrug-body-input"
              />
              <input
                defaultValue={editRow?.cardNumber}
                type="text"
                name="cardNumber"
                placeholder="شماره حساب  "
                className="addDrug-body-input"
              />
              <input
                defaultValue={editRow?.hesabNumber}
                type="text"
                name="hesabNumber"
                placeholder="شماره بانکی"
                className="addDrug-body-input"
              />
              <input
                defaultValue={editRow?.shabaNumber}
                type="text"
                name="shabaNumber"
                placeholder="شماره شبا"
                className="addDrug-body-input"
              />{" "}
              <input
                defaultValue={editRow?.existance}
                type="text"
                name="existance"
                placeholder="موجودی "
                className="addDrug-body-input"
              />{" "}
              <input
                type="submit"
                value="ثبت تغییرات"
                className="addDrug-body-button"
              />
            </div>
          </form>
        </div>
      ) : null}
      <div className="content">
        <div className="havala-container">
          <div className="card-header">
            <div className="search-container">
              <input
                type="seach"
                name="searchCard"
                placeholder={"جستجوی کارت بانکی"}
                className="search"
                onChange={handleSearch}
              />
            </div>
            <span
              className="add-newDard btn-user"
              onClick={() => setAddPopUp(true)}
            >
              افزودن کارت
            </span>
          </div>
          <div className="card-content">
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
                  {data.map((card, index) => {
                    if (card.bankName.includes(searchValue)) {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{card?.bankName}</td>
                          <td>{card?.cardNumber}</td>
                          <td>{card?.shabaNumber}</td>
                          <td>{card?.existance}</td>
                          <td>{card?.hesabNumber}</td>

                          <td className="home-action">
                            <img
                              src="edit.png"
                              alt="edit"
                              onClick={() => {
                                setEditRow(card);
                                setEditPopUp(true);
                              }}
                            />
                            <img
                              src="delete.png"
                              alt="delete"
                              onClick={() => {
                                const filteredRows = data.filter((item) => {
                                  if (item.cardNumber != card.cardNumber) {
                                    return item;
                                  }
                                });
                                setData([...filteredRows]);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    }
                  })}
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
