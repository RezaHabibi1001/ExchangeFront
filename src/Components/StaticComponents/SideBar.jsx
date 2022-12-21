import "../../Styles/StaticComponents/SideBar.css"
import { DropDownButton } from "./DropDownButton"
export function SideBar() {
    return(
        <div className="sideBar-container">
            <DropDownButton  
            dropdownName="دارو ها" 
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'#'},{linkName:'لیست داروها',linkUrl:'#'},{linkName:'ثبت نوعیت',linkUrl:'#'},{linkName:'لیست نوعیت ها',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="فاکتور ها" 
            dropdownLink={[{linkName:'فاکتور خرید',linkUrl:'#'},{linkName:'فاکتور فروش',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="مشتریان" 
            dropdownLink={[{linkName:'ثبت مشتری',linkUrl:'#'},{linkName:'لیست مشتریان',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="گدام ها" 
            dropdownLink={[{linkName:'ثبت گدام',linkUrl:'#'},{linkName:'لیست گدام ها',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="اسناد" 
            dropdownLink={[{linkName:'سند رسید',linkUrl:'#'},{linkName:'سند بردگی',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="روزنامجه" 
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'#'},{linkName:'لیست دارو',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="گزارشات" 
            dropdownLink={[{linkName:'گزارش دارو',linkUrl:'#'},{linkName:'گزارش فاکتور خریداری',linkUrl:'#'},{linkName:'گزارش فاکتور فروش',linkUrl:'#'},{linkName:'گزارش مشتریان',linkUrl:'#'},{linkName:'گزارش  گدام ها',linkUrl:'#'},{linkName:'گزارش اسناد دریافتی',linkUrl:'#'},{linkName:'گزارش اسناد پرداختی',linkUrl:'#'},{linkName:'گزارش  کاربران',linkUrl:'#'},{linkName:'گزارش روزنامچه',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="کاربران" 
            dropdownLink={[{linkName:'ثبت کاربر',linkUrl:'#'},{linkName:'لیست کاربران',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="تنظیمات" 
            dropdownLink={[{linkName:'تنظیمات',linkUrl:'#'}]} 
            />
            <DropDownButton  
            dropdownName="درباره ما" 
            dropdownLink={[{linkName:'درباره ما',linkUrl:'#'}]} 
            />
        </div>
    )
}