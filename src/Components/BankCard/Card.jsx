import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/BankCard/Card.css";
import axios from "axios";
export function Card() {
  const [crud, setCrud] = useState("");
  const navigate = useNavigate();
  const [addCardError, setAddCardError] = useState(false);
  const [addCardSuccess, setAddCardSuccess] = useState(false);
  const [deleteCardError, setDeleteCardError] = useState(false);
  const [deleteCardSuccess, setDeleteCardSuccess] = useState(false);
  const [editCardError, setEditCardError] = useState(false);
  const [editCardSuccess, setEditCardSuccess] = useState(false);

  const [addPopUp, setAddPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [editRow, setEditRow] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    const fetchAllCards = async () => {
      try {
        const res = await axios.get("http://localhost:4000/card");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCards();
  }, [crud]);

  //  This function is for inserting a new card
  const addCard = async (e) => {
    e.preventDefault();

    let newCard = {
      cardName: e.target.cardName?.value,
      cardNumber: e.target.cardNumber?.value,
      hesabNumber: e.target.hesabNumber?.value,
      shabaNumber: e.target.shabaNumber?.value,
      existance: e.target.existance?.value,
    };

    try {
      await axios.post("http://localhost:4000/card", newCard);

      setCrud(Math.random());
      setAddCardSuccess(true);

      setTimeout(() => {
        setAddCardSuccess(false);
        setAddPopUp(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
    // setData([...data, newCard]);
  };

  //  This  function is for uodating a card
  const editCard = async (e) => {
    e.preventDefault();

    let updatedRow = {
      cardName: e.target.cardName.value,
      cardNumber: e.target.cardNumber.value,
      hesabNumber: e.target.hesabNumber.value,
      shabaNumber: e.target.shabaNumber.value,
      existance: e.target.existance.value,
    };
    try {
      await axios.put(
        "http://localhost:4000/card/" + editRow.existance,
        updatedRow
      );
      setEditCardSuccess(true);
      setCrud(Math.random());
      setTimeout(() => {
        setEditCardSuccess(false);
        setEditPopUp(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
    // setData([...filteredRows, updatedRow]);
  };

  //  This function  is  for searchnig a   card

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  //  this function is for handleing   delete api
  const handleDelete = async (existance) => {
    console.log("existance", existance);
    try {
      await axios.delete("http://localhost:4000/card/" + existance);
      setCrud(Math.random());
      setDeleteCardSuccess(true);
      setTimeout(() => {
        setDeleteCardSuccess(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header />
      <SideBar />
      {addPopUp ? (
        <div className="addDrug-content">
          <div className="my-cardHeader">
            <img
              style={{ width: "20px", height: "20px" }}
              src="close.png"
              alt="close"
              onClick={() => setAddPopUp(false)}
            />
            {addCardSuccess ? (
              <span
                style={{
                  color: "#fff",
                  border: "1px solid #6a6",
                  padding: "8px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                کارت افزوده شد
              </span>
            ) : (
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                افزودن کارت بانکی جدید
              </span>
            )}

            <img
              style={{ width: "20px", height: "20px" }}
              src="bills.png"
              alt="logo"
            />
          </div>
          <form onSubmit={addCard}>
            <div className="addDrug-body">
              <input
                type="text"
                name="cardName"
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

            {editCardSuccess ? (
              <span
                style={{
                  color: "#fff",
                  border: "1px solid #6a6",
                  padding: "8px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                کارت ویرایش شد
              </span>
            ) : (
              <span>ویرایش کارت بانکی</span>
            )}
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={editCard}>
            <div className="addDrug-body">
              <input
                defaultValue={editRow?.cardName}
                type="text"
                name="cardName"
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
            {deleteCardSuccess ? (
              <span
                style={{
                  color: "#6a6",
                  border: "1px solid #6a6",
                  padding: "8px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                کارت موفقانه حذف شد
              </span>
            ) : null}
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
                  {data?.map((card, index) => {
                    if (card.cardName.includes(searchValue)) {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{card.cardName}</td>
                          <td>{card.cardNumber}</td>
                          <td>{card.shabaNumber}</td>
                          <td>{card.hesabNumber}</td>
                          <td>{card.existance}</td>

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
                              onClick={() => handleDelete(card.existance)}
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
