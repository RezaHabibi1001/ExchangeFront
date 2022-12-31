import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import "../../Styles/StaticComponents/SideBar.css"
import { Button } from "./Button"
import { DropDownButton } from "./DropDownButton"
export function SideBar() {
    const navigate = useNavigate()

    return(
        <div className="sideBar-container">
            <Link to={"/drugs"} style={{textDecoration:"none"}}>
            <Button buttonText="داروها"  buttonIcon="drug.png"/>
            </Link>
            <DropDownButton  
            dropdownName="فاکتور ها"
            dropdownIcon ="factor.png" 
            dropdownLink={[{linkName:'فاکتور خرید',linkUrl:'/buyFactor'},{linkName:'فاکتور فروش',linkUrl:'/saleFactor'}]} 
            />
            <Button buttonText="مشتریان" buttonIcon="customer.png"/>
            <Button buttonText="گدام ها" buttonIcon="stack.png"/>
            <DropDownButton  
            dropdownName="اسناد" 
            dropdownIcon ="bill.png"
            dropdownLink={[{linkName:'سند رسید',linkUrl:'#'},{linkName:'سند بردگی',linkUrl:'#'}]} 
            />
            <Button buttonText="روزنامچه" buttonIcon="roznamcha.png"/>
            <DropDownButton  
            dropdownName="گزارشات"
            dropdownIcon ="reportes.png"
            dropdownLink={[{linkName:'گزارش دارو',linkUrl:'#'},{linkName:'گزارش فاکتور خریداری',linkUrl:'#'},{linkName:'گزارش فاکتور فروش',linkUrl:'#'},{linkName:'گزارش مشتریان',linkUrl:'#'},{linkName:'گزارش  گدام ها',linkUrl:'#'},{linkName:'گزارش اسناد دریافتی',linkUrl:'#'},{linkName:'گزارش اسناد پرداختی',linkUrl:'#'},{linkName:'گزارش  کاربران',linkUrl:'#'},{linkName:'گزارش روزنامچه',linkUrl:'#'}]} 
            />
            <Button buttonText="کاربران" buttonIcon="user.png"/>
            <Button buttonText="تنظیمات" buttonIcon="settings.png"/>
            <Button buttonText="درباره ما" buttonIcon="aboutUs.png"/>
        </div>
    )
}