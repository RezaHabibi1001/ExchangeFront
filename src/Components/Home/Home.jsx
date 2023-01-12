import { Header } from "../StaticComponents/Header";
import { Search } from "../StaticComponents/Search";
import { SideBar } from "../StaticComponents/SideBar";
import "../../Styles/Home/Home.css";

export function Home() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <div className="addDrug-content">
        <div className="addDrug-header">
          <img src="close.png" alt="close" />
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

      <div className="content">
        <div className="drugs-container">
          <div className="drugs-header">
            <select className="select-search">
              <option>نمبر حواله</option>
              <option>نام مشتری</option>
              <option>تاریخ حواله</option>
            </select>
            <Search searchPlaceHolder="جستجوی حواله" />
            <span className="btn btn-user">حساب اکبر</span>
            <span className="btn btn-user">حساب سادات</span>
            <span className="btn btn-user">حساب عمه نوری</span>
            <span className="btn btn-save"> افزودن حواله </span>
          </div>
          <div className="drugs-content">
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
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>3</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>4</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>5</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>6</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>6</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>7</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>1001</td>
                    <td>محمد حسن</td>
                    <td>500</td>
                    <td>آلمان</td>
                    <td>یورو</td>
                    <td>98</td>
                    <td>99</td>
                    <td>40</td>
                    <td className="action">
                      <img src="edit.png" alt="edit" />
                      <img src="delete.png" alt="delete" />
                    </td>
                  </tr>
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
