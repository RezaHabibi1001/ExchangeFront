import "../../Styles/StaticComponents/SideBar.css"
import { DropDownButton } from "./DropDownButton"
export function SideBar() {
    return(
        <div className="sideBar-container">
            <DropDownButton  
            dropdownName="دارو ها" 
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'Home'},{linkName:'لیست دارو',linkUrl:'FARHOME'}]} 
            />
            <DropDownButton  
            dropdownName="دارو ها" 
            dropdownLink={[{linkName:'ثبت دارو',linkUrl:'Home'},{linkName:'لیست دارو',linkUrl:'FARHOME'}]} 
            />
        </div>
    )
}