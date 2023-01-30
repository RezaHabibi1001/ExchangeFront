import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import { useState } from "react";
import "../../Styles/Home/Home.css";
import { useGlobal } from "../../zustand";
export function Home() {
  const [items, setItems] = useState([
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
    {
      id: "49384934",
      corporator: "mohammad",
      havala_type: "کارت به کارت",
      number_havala1: "1001",
      number_havala2: "1001",
      from_card: "4573333",
      to_card: "73847834",
      fullName: "رضا حبیبی",
      from_city: "هامبورگ",
      to_city: "کابل",
      purchased_price: 98,
      sell_price: 102,
      havala_amount: 500,
      // safe: ((sell_price - purchased_price) * havala_amount) / purchased_price,
      commision_amount: 100,
      safe: 30,
      havala_date: "2022-03-07",
    },
  ]);

  const [cardToCard, setcardToCard] = useState(false);
  const [normaHavala, setNormalHavala] = useState(false);
  const [havalaTypeSelected, setHavalaTypeSelected] = useState("");
  console.log("havalaTypeSelected", havalaTypeSelected);
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
  function handleNormalHavala(e) {
    e.preventDefault();
    const date = new Date();
    let havala_date =
      date.getFullYear() + "-" + date.getDay() + "-" + date.getDate();

    havalaData = {
      havala_type: "معمولی",
      tarafHesab: e.target.tarafHesab.value,
      havala_number1: e.target.havala_number1?.value,
      havala_number2: e.target.havala_number2?.value,
      from_card: null,
      to_card: null,
      from_city: e.target.from_city?.value,
      to_city: e.target.to_city?.value,
      fullName: e.target.fullName.value,
      havala_amount: e.target.havala_amount?.value,
      fromMoney_toMoney: e.target.fromMoney_toMoney?.value,
      purchased_price: e.target.purchased_price?.value,
      sell_price: e.target.sell_price?.value,
      commision_amount: e.target.commision_amount?.value,
      safe_amount:
        (
          (e.target.havala_amount?.value *
            (e.target.sell_price?.value - e.target.purchased_price?.value)) /
          e.target.purchased_price?.value
        ).toFixed(2) - e.target.commision_amount?.value,
      havala_date: havala_date,
    };
    console.log("normal havala ", havalaData);
    setItems([havalaData, ...items]);
    setNormalHavala(false);
  }
  function handleCardtoCard(e) {
    e.preventDefault();
    const date = new Date();
    let havala_date =
      date.getFullYear() + "-" + date.getDay() + "-" + date.getDate();
    havalaData = {
      havala_type: "کارت به کارت",
      tarafHesab: e.target.tarafHesab.value,
      havala_number1: e.target.havala_number1?.value,
      havala_number2: null,
      from_card:
        e.target.my_card?.value != ""
          ? e.target.my_card?.value
          : e.target.from_card?.value,
      to_card: e.target.to_card?.value,
      fullName: e.target.fullName.value,
      from_city: e.target.from_city?.value,
      to_city: e.target.to_city?.value,
      havala_amount: e.target.havala_amount?.value,
      fromMoney_toMoney: e.target.fromMoney_toMoney?.value,
      purchased_price: e.target.purchased_price?.value,
      commision_amount: 0,
      sell_price: e.target.sell_price?.value,
      safe_amount: e.target.safe_amount?.value,
      havala_date: havala_date,
    };
    setItems([havalaData, ...items]);
    setcardToCard(false);
    console.log(havalaData);
  }

  return (
    <div className="container">
      <Header />
      <SideBar />
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
                <option value="عمه نوری">عمه نوری</option>
                <option value="محمد">محمد</option>
                <option value="اکبر">اکبر</option>
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
                name="tarafHesab"
                id="tarafHesab"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">طرف حساب را انتخاب نمایید</option>
                <option value="عمه نوری">عمه نوری</option>
                <option value="محمد">محمد</option>
                <option value="اکبر">اکبر</option>
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
                name="my_card"
                id="my_card"
                className="addCardToCard-body-input currency-type"
              >
                <option value="">کارت را انتخاب نمایید</option>
                <option value="بانک صادرات - ۳۴۳۴۳۴۳۴">
                  بانک صادرات --- ۸۴۷۸۳۴۸۳۴۷
                </option>
                <option value="بانک ملت - ۳۴۳۴۳۴۳۴">
                  بانک ملت --- ۸۳۴۹۷۴۸۳۵۴{" "}
                </option>
                <option value="بانک سپهر - ۳۴۳۴۳۴۳۴">
                  بانک سپهر --- ۸۴۷۸۳۴۸۳۴۷
                </option>
                <option value="بانک ایلام - ۳۴۳۴۳۴۳۴">
                  بانک ایلام --- ۸۳۴۹۷۴۸۳۵۴{" "}
                </option>
              </select>
              <input
                type="text"
                name="from_card"
                id="from_card"
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
            <Search searchPlaceHolder="جستجوی حواله" />
            <select className="havala-select-search">
              <option>نمبر حواله</option>
              <option>نام مشتری</option>
              <option>تاریخ حواله</option>
            </select>
            <select className="havala-select-search">
              <option>حساب عمه نوری</option>
              <option>حساب اکبر</option>
              <option>حساب محمد</option>
            </select>

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
                    <th className="">نمبر حواله یک</th>
                    <th className="">نمبر حواله دو</th>
                    <th className="">شماره کارت مبدا</th>
                    <th className="">شماره کارت مقصد</th>

                    <th className="">نام مشتری</th>
                    <th className="">از شهر - به شهر</th>
                    <th className="">مبلغ حواله</th>
                    <th className=""> خرید - فروش</th>
                    <th className="">مبلغ کمیشن</th>

                    <th className="">مقدار مفاد</th>
                    <th className="">تاریخ حواله</th>
                    <th className="">تنظیمات</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((havala, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{havala.havala_number1}</td>
                        <td>{havala.havala_number2}</td>
                        <td>{havala.from_card}</td>
                        <td>{havala.to_card}</td>
                        <td>{havala.fullName}</td>
                        <td>{havala.from_city + " - " + havala.to_city}</td>
                        <td>{havala.havala_amount}</td>
                        <td>
                          {havala.purchased_price + " - " + havala.sell_price}
                        </td>
                        <td>{havala.payed_amount}</td>

                        <td>{havala.safe_amount}</td>
                        <td>{havala.havala_date}</td>

                        <td className="home-action">
                          <img src="edit.png" alt="edit" />
                          <img
                            src="delete.png"
                            alt="delete"
                            onClick={() => {
                              const filteredRows = items.filter((item) => {
                                if (
                                  item.havala_number1 != havala.havala_number1
                                ) {
                                  return item;
                                }
                              });

                              setItems(filteredRows);
                            }}
                          />
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
