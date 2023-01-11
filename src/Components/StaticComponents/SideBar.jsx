import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../Styles/StaticComponents/SideBar.css";
import { Button } from "./Button";
import { DropDownButton } from "./DropDownButton";
export function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sideBar-container">
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <Button buttonText="لیست حواله ها" buttonIcon="factors.png" />
      </Link>
      {/* <DropDownButton  
            dropdownName="فاکتور ها"
            dropdownIcon ="factor.png" 
            dropdownLink={[{linkName:'فاکتور خرید',linkUrl:'/buyFactor'},{linkName:'فاکتور فروش',linkUrl:'/saleFactor'}]} 
            />
            <Link to={"/customers"} style={{textDecoration:"none"}}>
            <Button buttonText="مشتریان" buttonIcon="customer.png"/>
            </Link>
            <Link to={'/stacks'} style={{textDecoration:"none"}}>
            <Button buttonText="گدام ها" buttonIcon="stack.png"/>
            </Link>
            <DropDownButton  
            dropdownName="اسناد" 
            dropdownIcon ="bill.png"
            dropdownLink={[{linkName:'سند رسید',linkUrl:'/recievedCheck'},{linkName:'سند پرداخت',linkUrl:'/givenCheck'}]} 
            />
            <Link to={'/roznamcha'} style={{textDecoration:"none"}}>
            <Button buttonText="روزنامچه" buttonIcon="roznamcha.png"/>
            </Link>
            <DropDownButton  
            dropdownName="گزارشات"
            dropdownIcon ="reportes.png"
            dropdownLink={[{linkName:'گزارش دارو',linkUrl:'#'},{linkName:'گزارش فاکتور خریداری',linkUrl:'#'},{linkName:'گزارش فاکتور فروش',linkUrl:'#'},{linkName:'گزارش مشتریان',linkUrl:'#'},{linkName:'گزارش  گدام ها',linkUrl:'#'},{linkName:'گزارش اسناد دریافتی',linkUrl:'#'},{linkName:'گزارش اسناد پرداختی',linkUrl:'#'},{linkName:'گزارش  کاربران',linkUrl:'#'},{linkName:'گزارش روزنامچه',linkUrl:'#'}]} 
            />
            <Link to={"/users"} style={{textDecoration:"none"}}>
            <Button buttonText="کاربران" buttonIcon="user.png"/>
            </Link> */}
      <Button buttonText="صندوقچه" buttonIcon="stacks.png" />
      <Button buttonText="درباره ما" buttonIcon="users.png" />
    </div>
  );
}
