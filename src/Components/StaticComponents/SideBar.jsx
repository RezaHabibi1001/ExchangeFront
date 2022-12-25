import "../../Styles/StaticComponents/SideBar.css"
import { Button } from "./Button"
import { DropDownButton } from "./DropDownButton"
export function SideBar() {
    return(
        <div className="sideBar-container">
            <DropDownButton  
            dropdownName="دارو ها"
            dropdownIcon ="drug.png" 
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'AddDrug'},{linkName:'لیست داروها',linkUrl:'#'},{linkName:'ثبت نوعیت',linkUrl:'#'},{linkName:'لیست نوعیت ها',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="فاکتور ها"
            dropdownIcon ="factor.png" 
            dropdownLink={[{linkName:'فاکتور خرید',linkUrl:'#'},{linkName:'فاکتور فروش',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="مشتریان" 
            dropdownIcon ="customer.png"
            dropdownLink={[{linkName:'ثبت مشتری',linkUrl:'#'},{linkName:'لیست مشتریان',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="گدام ها" 
            dropdownIcon ="stack.png"
            dropdownLink={[{linkName:'ثبت گدام',linkUrl:'#'},{linkName:'لیست گدام ها',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="اسناد" 
            dropdownIcon ="bill.png"
            dropdownLink={[{linkName:'سند رسید',linkUrl:'#'},{linkName:'سند بردگی',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="روزنامجه" 
            dropdownIcon ="roznamcha.png"
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'#'},{linkName:'لیست دارو',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="گزارشات"
            dropdownIcon ="reportes.png"
            dropdownLink={[{linkName:'گزارش دارو',linkUrl:'#'},{linkName:'گزارش فاکتور خریداری',linkUrl:'#'},{linkName:'گزارش فاکتور فروش',linkUrl:'#'},{linkName:'گزارش مشتریان',linkUrl:'#'},{linkName:'گزارش  گدام ها',linkUrl:'#'},{linkName:'گزارش اسناد دریافتی',linkUrl:'#'},{linkName:'گزارش اسناد پرداختی',linkUrl:'#'},{linkName:'گزارش  کاربران',linkUrl:'#'},{linkName:'گزارش روزنامچه',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="کاربران" 
            dropdownIcon ="user.png"
            dropdownLink={[{linkName:'ثبت کاربر',linkUrl:'#'},{linkName:'لیست کاربران',linkUrl:'#'}]} 
            />
            <Button buttonText="تنظیمات" buttonIcon="settings.png"/>
            <Button buttonText="درباره ما" buttonIcon="aboutUs.png"/>
        </div>
    )
}