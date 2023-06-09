import { useState } from "react"
import { Link } from "react-router-dom"
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
      const dropdownIcon = props.dropdownIcon
    return(
        <div className="dropdown">
            <button className="drop-btn" onClick={showDropDown}><img className="dropBtn-icon" src={dropdownIcon} alt="drug" /> {dropdownName} <img src="down-arrow.png" alt="down" /></button>
                <div id="dropdownContent" style={{display:display}} className="dropdown-content">
                   {
                    dropdownLink.map(link=>{
                        return <Link to={link.linkUrl}><img className="dropLink-icon" src="drugs.png" alt="drug" /> {link.linkName}</Link>
                    })
                   }                   
                </div>
        </div>
    )
}