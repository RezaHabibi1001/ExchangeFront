import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Home/Home.css";
import axios from "axios";
export function Home() {
  const navigate = useNavigate();
  const [crud, setCrud] = useState();
  const [searchedValue, setSearchedValue] = useState("");
  const [currentTarafHesab, setCurrentTarafHesab] = useState("");

  const [items, setItems] = useState([]);
  const [cardToCard, setcardToCard] = useState(false);
  const [normaHavala, setNormalHavala] = useState(false);
  const [havalaTypeSelected, setHavalaTypeSelected] = useState("");

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const [editRow, setEditRow] = useState();
  const [editPopUp, setEditPopUp] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/");
    }
    const loadAllRemittances = async () => {
      try {
        const res = await axios.get("http://localhost:4000/remittances");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadAllRemittances();
  }, [crud]);
  let havalaData = {};
  const [info, setInfo] = useState({
    havalaNumber1: "",
    havalaNumber2: "",
    customerName: "",
    fromCity: "",
    toCity: "",
    havalaAmount: "",
    purchasedPrice: "",
    sellPrice: "",
    safeAmount: "",
  });
  const handleNormalHavala = async (e) => {
    e.preventDefault();
    const date = new Date();

    havalaData = {
      tarafHesab: e.target.tarafHesab.value,
      havala_number1: e.target.havala_number1.value,
      havala_number2: e.target.havala_number2.value,
      from_card1: null,
      from_card2: null,
      to_card: null,
      from_city: e.target.from_city.value,
      to_city: e.target.to_city.value,
      fullName: e.target.fullName.value,
      havala_amount: e.target.havala_amount.value,
      fromMoney_toMoney: e.target.fromMoney_toMoney.value,
      purchased_price: e.target.purchased_price.value,
      sell_price: e.target.sell_price.value,
      commision_amount: e.target.commision_amount.value,
      safe_amount: e.target.safe_amount.value,
      havala_date: date.toISOString(),
    };
    try {
      await axios.post("http://localhost:4000/createHavala", havalaData);
      setCrud(Math.random());
    } catch (err) {
      console.log(err);
    }
    // setItems([havalaData, ...items]);
    setNormalHavala(false);
  };
  const handleCardtoCard = async (e) => {
    e.preventDefault();
    const date = new Date();

    havalaData = {
      tarafHesab: e.target.tarafHesab.value,
      havala_number1: e.target.havala_number1.value,
      havala_number2: null,
      from_card1: e.target.from_card1.value,
      from_card2: e.target.from_card2.value,
      to_card: e.target.to_card.value,
      from_city: e.target.from_city.value,
      to_city: e.target.to_city.value,
      fullName: e.target.fullName.value,
      havala_amount: e.target.havala_amount.value,
      fromMoney_toMoney: e.target.fromMoney_toMoney.value,
      purchased_price: e.target.purchased_price.value,
      sell_price: e.target.sell_price.value,
      commision_amount: 0,
      safe_amount: e.target.safe_amount.value,
      havala_date: date.toISOString(),
    };
    try {
      await axios.post("http://localhost:4000/createHavala", havalaData);
      setCrud(Math.random());
    } catch (err) {
      console.log(err);
    }
    // setItems([havalaData, ...items]);
    setcardToCard(false);
  };

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };
  const handleTarafHesabFilter = (e) => {
    setCurrentTarafHesab(e.target.value);
  };

  const handleDelete = async (ID) => {
    try {
      await axios.delete("http://localhost:4000/remittances/" + ID);
      setDeleteSuccess(true);
      setCrud(Math.random());
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  //  This  function is for uodating a Havala
  const handleEdit = async (e) => {
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
      setEditPopUp(false);
    } catch (err) {
      console.log(err);
    }
    // setData([...filteredRows, updatedRow]);
  };
  return (
    <div className="container">
      <Header />
      <SideBar />
      {editPopUp ? (
        <div className="addNormalHavala-content">
          <div className="addNormalHavala-header">
            <img
              src="close.png"
              alt="close"
              onClick={() => setEditPopUp(false)}
            />
            <span>ویراییش حواله</span>
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={handleEdit}>
            <div className="addNormalHavala-body">
              <select
                defaultValue={editRow.tarafHesab}
                name="tarafHesab"
                id="tarafHesab"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">طرف حساب را انتخاب نمایید</option>
                <option value="noori">عمه نوری</option>
                <option value="mohammad">محمد</option>
                <option value="akbar">اکبر</option>
              </select>
              <input
                type="text"
                name="havala_number1"
                id="havala_number1"
                defaultValue={editRow.havala_number1}
                placeholder="نمبر حواله اول "
                className="addNormalHavala-body-input"
              />
              {editRow.havala_number2 ? (
                <input
                  type="text"
                  name="havala_number2"
                  id="havala_number2"
                  defaultValue={editRow.havala_number2}
                  placeholder="نمبر حواله دوم "
                  className="addNormalHavala-body-input"
                />
              ) : null}
              {editRow.from_card1 ? (
                <select
                  defaultValue={editRow.from_card1}
                  name="from_card1"
                  id="from_card1"
                  className="addCardToCard-body-input currency-type"
                >
                  <option value="">کارت را انتخاب نمایید</option>
                  <option value="saderat">بانک صادرات</option>
                  <option value="mellat">بانک ملت</option>
                  <option value="sepehr">بانک سپهر</option>
                  <option value="ilam">بانک ایلام </option>
                </select>
              ) : null}
              {editRow.from_card2 ? (
                <input
                  type="text"
                  name="from_card2"
                  id="from_card2"
                  defaultValue={editRow.from_card2}
                  placeholder="شماره کارت مبدا "
                  className="addNormalHavala-body-input"
                />
              ) : null}
              {editRow.to_card ? (
                <input
                  type="text"
                  name="to_card"
                  id="to_card"
                  defaultValue={editRow.to_card}
                  placeholder="شماره کارت مقصد "
                  className="addNormalHavala-body-input"
                />
              ) : null}
              <input
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={editRow.fullName}
                placeholder="نام مشتری"
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="from_city"
                id="from_city"
                defaultValue={editRow.from_city}
                placeholder="از شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="to_city"
                id="to-city"
                defaultValue={editRow.to_city}
                placeholder="به شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <select
                defaultValue={editRow.fromMoney_toMoney}
                id="fromMoney_toMoney"
                name="fromMoney_toMoney"
                className="addNormalHavala-body-input currency-type"
              >
                <option value="ya">یورو .... افغانی</option>
                <option value="yt">یورو .... تومان</option>
                <option value="yd">یورو .... دالر</option>
                <option value="yk">یورو .... کالدار</option>
                <option value="yl">یورو .... لیره</option>
                <option value="da">دالر .... افغانی</option>
                <option value="dt">دالر .... تومان</option>
                <option value="dy">دالر .... یورو</option>
                <option value="dk">دالر .... کالدار</option>
                <option value="dl">دالر .... لیره</option>
              </select>
              <input
                type="text"
                name="havala_amount"
                id="havala_amount"
                defaultValue={editRow.havala_amount}
                placeholder="مبلغ حواله"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="purchased_price"
                id="purchased_price"
                defaultValue={editRow.purchased_price}
                placeholder="قیمت خرید"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="sell_price"
                id="sell_price"
                defaultValue={editRow.sell_price}
                placeholder="قیمت فروش"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="commision_amount"
                id="commision_amount"
                defaultValue={editRow.commision_amount}
                placeholder="مبلغ کمیشن به افغانی"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="safe_amount"
                id="safe_amount"
                defaultValue={editRow.safe_amount}
                placeholder="مقدار مفاد"
                className="addNormalHavala-body-input"
              />
              <input
                type="submit"
                value="ثبت حواله"
                className="addNormalHavala-body-button"
                name="submit"
              />
            </div>
          </form>
        </div>
      ) : null}
      {normaHavala ? (
        <div className="addNormalHavala-content">
          <div className="addNormalHavala-header">
            <img
              src="close.png"
              alt="close"
              onClick={() => setNormalHavala(false)}
            />
            <span>افزودن حواله جدید</span>
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={handleNormalHavala}>
            <div className="addNormalHavala-body">
              <select
                name="tarafHesab"
                id="tarafHesab"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">طرف حساب را انتخاب نمایید</option>
                <option value="noori">عمه نوری</option>
                <option value="mohammad">محمد</option>
                <option value="akbar">اکبر</option>
              </select>
              <input
                type="text"
                name="havala_number1"
                id="havala_number1"
                defaultValue={info.havalaNumber1}
                placeholder="نمبر حواله اول "
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="havala_number2"
                id="havala_number2"
                defaultValue={info.havalaNumber2}
                placeholder="نمبر حواله دوم "
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={info.customerName}
                placeholder="نام مشتری"
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="from_city"
                id="from_city"
                defaultValue={info.fromCity}
                placeholder="از شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="to_city"
                id="to-city"
                defaultValue={info.toCity}
                placeholder="به شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <select
                id="fromMoney_toMoney"
                name="fromMoney_toMoney"
                className="addNormalHavala-body-input currency-type"
              >
                <option value="ya">یورو .... افغانی</option>
                <option value="yt">یورو .... تومان</option>
                <option value="yd">یورو .... دالر</option>
                <option value="yk">یورو .... کالدار</option>
                <option value="yl">یورو .... لیره</option>
                <option value="da">دالر .... افغانی</option>
                <option value="dt">دالر .... تومان</option>
                <option value="dy">دالر .... یورو</option>
                <option value="dk">دالر .... کالدار</option>
                <option value="dl">دالر .... لیره</option>
              </select>
              <input
                type="text"
                name="havala_amount"
                id="havala_amount"
                defaultValue={info.havalaAmount}
                placeholder="مبلغ حواله"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="purchased_price"
                id="purchased_price"
                valdefaultValueue={info.purchasedPrice}
                placeholder="قیمت خرید"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="sell_price"
                id="sell_price"
                // defaultValue={info.sellPrice}
                placeholder="قیمت فروش"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="commision_amount"
                id="commision_amount"
                // defaultValue={info.sellPrice}
                placeholder="مبلغ کمیشن به افغانی"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="safe_amount"
                id="safe_amount"
                defaultValue={info.safeAmount}
                placeholder="مقدار مفاد"
                className="addNormalHavala-body-input"
              />
              <input
                type="submit"
                value="ثبت حواله"
                className="addNormalHavala-body-button"
                name="submit"
              />
            </div>
          </form>
        </div>
      ) : null}
      {cardToCard ? (
        <div className="addNormalHavala-content">
          <div className="addNormalHavala-header">
            <img
              src="close.png"
              alt="close"
              onClick={() => setcardToCard(false)}
            />
            <span>افزودن حواله جدید</span>
            <img src="bills.png" alt="logo" />
          </div>
          <form onSubmit={handleCardtoCard}>
            <div className="addNormalHavala-body">
              <select
                id="tarafHesab"
                name="tarafHesab"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">طرف حساب را انتخاب نمایید</option>
                <option value="noori">عمه نوری</option>
                <option value="mohammad">محمد</option>
                <option value="akbar">اکبر</option>
              </select>
              <input
                type="text"
                name="havala_number1"
                id="havala_number1"
                defaultValue={info.havalaNumber1}
                placeholder="نمبر حواله اول "
                className="addNormalHavala-body-input"
              />
              <select
                name="from_card1"
                id="from_card1"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">کارت را انتخاب نمایید</option>
                <option value="saderat">بانک صادرات ---</option>
                <option value="mellat">بانک ملت --- </option>
                <option value="sepehr">بانک سپهر ---</option>
                <option value="ilam">بانک ایلام --- </option>
              </select>
              <input
                type="text"
                name="from_card2"
                id="from_card2"
                defaultValue={info.havalaNumber1}
                placeholder="شماره کارت مبدا "
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="to_card"
                id="to_card"
                defaultValue={info.havalaNumber2}
                placeholder="شماره کارت مقصد"
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={info.customerName}
                placeholder="نام مشتری"
                className="addNormalHavala-body-input"
              />
              <input
                type="text"
                name="from_city"
                id="from_city"
                defaultValue={info.fromCity}
                placeholder="از شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="to_city"
                id="to-city"
                defaultValue={info.toCity}
                placeholder="به شهر "
                className="addNormalHavala-body-input"
              />{" "}
              <select
                id="fromMoney_toMoney"
                name="fromMoney_toMoney"
                className="addNormalHavala-body-input currency-type"
              >
                <option value="ya">یورو .... افغانی</option>
                <option value="yt">یورو .... تومان</option>
                <option value="yd">یورو .... دالر</option>
                <option value="yk">یورو .... کالدار</option>
                <option value="yl">یورو .... لیره</option>
                <option value="da">دالر .... افغانی</option>
                <option value="dt">دالر .... تومان</option>
                <option value="dy">دالر .... یورو</option>
                <option value="dk">دالر .... کالدار</option>
                <option value="dl">دالر .... لیره</option>
              </select>
              <input
                type="text"
                name="havala_amount"
                id="havala_amount"
                defaultValue={info.havalaAmount}
                placeholder="مبلغ حواله"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="purchased_price"
                id="purchased_price"
                valdefaultValueue={info.purchasedPrice}
                placeholder="قیمت خرید"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="sell_price"
                id="sell_price"
                // defaultValue={info.sellPrice}
                placeholder="قیمت فروش"
                className="addNormalHavala-body-input"
              />{" "}
              <input
                type="text"
                name="safe_amount"
                id="safe_amount"
                defaultValue={info.safeAmount}
                placeholder="مقدار مفاد"
                className="addNormalHavala-body-input"
              />
              <input
                type="submit"
                value="ثبت حواله"
                className="addNormalHavala-body-button"
                name="submit"
              />
            </div>
          </form>
        </div>
      ) : null}

      <div className="content">
        <div className="havala-container">
          <div className="hawala-header">
            <div className="search-container">
              <input
                type="seach"
                name="searchCard"
                placeholder={"جستجوی حواله"}
                className="search"
                onChange={handleSearch}
              />
            </div>
            <select
              onChange={handleTarafHesabFilter}
              className="havala-select-search"
            >
              <option value="">همه موارد</option>

              <option value="noori">حساب عمه نوری</option>
              <option value="akbar">حساب اکبر</option>
              <option value="mohammad">حساب محمد</option>
            </select>
            {deleteSuccess ? (
              <span style={{ fontWeight: "bold", color: "#fff" }}>
                حواله حذف شد
              </span>
            ) : null}
            <span
              className="add-havala btn-user"
              onClick={() => setcardToCard(true)}
            >
              کارت به کارت
            </span>
            <span
              className="add-havala btn-user"
              onClick={() => setNormalHavala(true)}
            >
              حواله جدید
            </span>
          </div>

          <div className="havala-content">
            <div className="table-container">
              <table className="home-table">
                <thead>
                  <tr>
                    <th className="">شماره</th>
                    <th className="">نمبر حواله اول</th>
                    <th className="">نمبر حواله دوم</th>
                    <th className=""> کارت مبدا</th>
                    <th className=""> کارت مقصد</th>

                    <th className="">نام مشتری</th>
                    <th className="">از شهر - به شهر</th>
                    <th className="">مبلغ</th>
                    <th className=""> خرید - فروش</th>

                    <th className="">مفاد</th>
                    <th className="">تاریخ حواله</th>
                    <th className="">تنظیمات</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((havala, index) => {
                    if (havala?.tarafHesab?.includes(currentTarafHesab)) {
                      if (havala.fullName.includes(searchedValue)) {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{havala.havala_number1}</td>
                            <td>{havala.havala_number2}</td>
                            <td>
                              {havala.from_card1
                                ? havala.from_card1
                                : havala.from_card2}
                            </td>
                            <td>{havala.to_card}</td>
                            <td>{havala.fullName}</td>
                            <td>{havala.from_city + " - " + havala.to_city}</td>
                            <td>{havala.havala_amount}</td>
                            <td>
                              {havala.purchased_price +
                                " - " +
                                havala.sell_price}
                            </td>

                            <td>{havala.safe_amount}</td>
                            <td>{havala.havala_date.slice(0, 10)}</td>

                            <td className="home-action">
                              <img
                                src="edit.png"
                                alt="edit"
                                onClick={() => {
                                  setEditRow(havala);
                                  setEditPopUp(true);
                                }}
                              />
                              <img
                                src="delete.png"
                                alt="delete"
                                onClick={() => handleDelete(havala.ID)}
                              />
                            </td>
                          </tr>
                        );
                      }
                    }
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
