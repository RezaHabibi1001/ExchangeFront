import { useState } from "react"
import "../../Styles/StaticComponents/DropDownButton.css"
export function DropDownButton(props) {
    const [display,setDisplay] = useState('none')
    function showDropDown() {
        if (display == 'none') {
          setDisplay('flex')
        }
        else{
          setDisplay('none')
        }
      }
      const dropdownName = props.dropdownName
      const dropdownLink = props.dropdownLink
    return(
        <div className="dropdown">
            <button className="drop-btn" onClick={showDropDown}>{dropdownName}</button>
                <div id="dropdownContent" style={{display:display}} className="dropdown-content">
                   {
                    dropdownLink.map(link=>{
                        return <a href={link.linkUrl}>{link.linkName}</a>
                    })
                   }                   
                </div>
        </div>
    )
}