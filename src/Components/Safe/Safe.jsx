import { Header } from "../StaticComponents/Header";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Safe/Safe.css";
import { useState, useEffect } from "react";

export function Safe() {
  const [shouldSecure, setShouldSecure] = useState(false);
  const [filterTarafHesab, setFilterTarafHesab] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [data, setData] = useState([
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "noori",
      havala_date: "2023-01-22T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "noori",
      havala_date: "2023-01-23T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "noori",
      havala_date: "2023-01-31T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "noori",
      havala_date: "2023-01-30T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "akbar",
      havala_date: "2023-01-29T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "akbar",
      havala_date: "2023-01-28T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "akbar",
      havala_date: "2023-01-27T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "mohammad",
      havala_date: "2023-01-26T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "mohammad",
      havala_date: "2023-01-25T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "mohammad",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "تایتسی",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "۳۸۲۹۳۴",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "ستثیمشیتنمشستی",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "jdajkdjs sdjs",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
    {
      havala_number1: "1003",

      safe: 20,
      tarafhesab: "hsjsiajssidj",
      havala_date: "2023-01-24T11:45:26.074Z",
    },
  ]);

  useEffect(() => {
    safeAmount();
  }, [filterTarafHesab, dateFilter]);

  const safeAmount = () => {
    let sum = 0;
    data.map((item) => {
      if (item.tarafhesab?.includes(filterTarafHesab)) {
        if (item?.havala_date >= dateFilter) {
          sum = sum + item.safe;
        }
      }
    });
    return sum;
  };

  const handleTarafHesabFilter = (e) => {
    setFilterTarafHesab(e.target.value);
  };

  const handleDateFilter = (e) => {
    let today = new Date();
    if (e.target.value == "") {
      let isoDate = new Date(
        today.setDate(today.getDate() - 100000)
      ).toISOString();
      setDateFilter(isoDate);
      console.log("isoDate", isoDate);
    }
    if (e.target.value == 0) {
      let isoDate = new Date(today.setDate(today.getDate())).toISOString();
      setDateFilter(isoDate);
      console.log("isoDate", isoDate);
    }
    if (e.target.value == 1) {
      let isoDate = new Date(today.setDate(today.getDate() - 1)).toISOString();
      setDateFilter(isoDate);
      console.log("isoDate", isoDate);
    }
    if (e.target.value == 7) {
      let isoDate = new Date(today.setDate(today.getDate() - 7)).toISOString();
      setDateFilter(isoDate);
      console.log("isoDate", isoDate);
    }
    if (e.target.value == 30) {
      let isoDate = new Date(today.setDate(today.getDate() - 30)).toISOString();
      setDateFilter(isoDate);
      console.log("isoDate", isoDate);
    }
  };
  return (
    <div className="container">
      <Header />
      <SideBar />

      <div className="content">
        <div className="safe-container">
          <div className="safe-header">
            <div className="tarafhesab-container">
              <span>طرف حساب</span>
              <select
                className="safe-select-boxes"
                onChange={handleTarafHesabFilter}
              >
                <option value="">همه موارد</option>

                <option value="noori">عمه نوری</option>
                <option value="akbar">اکبر</option>
                <option value="mohammad">محمد</option>
              </select>
            </div>
            <div className="profit-container">
              <span>مفاد بر اساس</span>
              <select className="safe-select-boxes" onChange={handleDateFilter}>
                <option value="">همه روز ها</option>
                <option value="0">مفاد امروز</option>
                <option value="1">مفاد دیروز</option>
                <option value="7">هفت روز قبل</option>
                <option value="30">یک ماه قبل</option>
              </select>
            </div>
            <div className="money-safe">
              <span className="money-safe-label">صندوق مفاد</span>
              {shouldSecure ? (
                <span className="money-safe-value">{safeAmount()} یورو</span>
              ) : (
                <span className="money-safe-value"> . . . . </span>
              )}
              <img
                src={shouldSecure ? "eye.png" : "hidden.png"}
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
                    <th className="drug-type">نمیر حواله اول</th>
                    <th className="drug-total">طرف حساب</th>

                    <th className="drug-total">تاریخ حواله</th>
                    <th className="drug-total">مقدار مفاد</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((havala, index) => {
                    if (havala?.tarafhesab?.includes(filterTarafHesab)) {
                      if (havala?.havala_date >= dateFilter) {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{havala.havala_number1}</td>
                            <td>{havala.tarafhesab}</td>
                            <td>{havala.havala_date.slice(0, 10)}</td>
                            <td>{havala.safe}</td>
                          </tr>
                        );
                      }
                    }
                  })}
                </tbody>
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
