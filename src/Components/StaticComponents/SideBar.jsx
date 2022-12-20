import { useState } from "react"
import "../../Styles/StaticComponents/SideBar.css"
export function SideBar() {
    const [display,setDisplay] = useState('none')
    const [display2,setDisplay2] = useState('none')
    function showDropDown() {
      if (display == 'none') {
        setDisplay('flex')
      }
      else{
        setDisplay('none')
      }
    }
    function showDropDown2() {
        if (display2 == 'none') {
          setDisplay2('flex')
        }
        else{
          setDisplay2('none')
        }
      }
    
    return(
        <div className="sideBar-container">
            <div className="dropdown">
                <button className="drop-btn" onClick={showDropDown}>دارو ها</button>
                <div id="dropdownContent" style={{display:display}} className="dropdown-content">
                    <a href="#">ثبت دارو</a>
                    <a href="#"> لیست دارو ها</a>
                    <a href="#">ثبت نوعیت</a>
                    <a href="#"> لیست نوعیت ها</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="drop-btn" onClick={showDropDown2}>فاکتور ها</button>
                <div id="dropdownContent" style={{display:display2}} className="dropdown-content">
                    <a href="#">ثبت دارو</a>
                    <a href="#"> لیست دارو ها</a>
                    <a href="#">ثبت نوعیت</a>
                    <a href="#"> لیست نوعیت ها</a>
                </div>
            </div>
        </div>
    )
}