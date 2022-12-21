import { useState } from "react"
import "../../Styles/StaticComponents/DropDownButton.css"
export function DropDownButton(params) {
    const [display,setDisplay] = useState('none')
    function showDropDown() {
        if (display == 'none') {
          setDisplay('flex')
        }
        else{
          setDisplay('none')
        }
      }
    return(
        <div className="dropdown">
            <button className="drop-btn" onClick={showDropDown}>گدام ها</button>
                <div id="dropdownContent" style={{display:display}} className="dropdown-content">
                    <a href="#">ثبت گدام</a>
                    <a href="#"> لیست دارو ها</a>
                    <a href="#">ثبت نوعیت</a>
                    <a href="#"> لیست نوعیت ها</a>
                </div>
        </div>
    )
}