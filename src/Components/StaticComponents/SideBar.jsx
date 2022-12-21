import { useState } from "react"
import "../../Styles/StaticComponents/SideBar.css"
import { DropDownButton } from "./DropDownButton"
export function SideBar() {
    return(
        <div className="sideBar-container">
            <DropDownButton />
            <DropDownButton />
            <DropDownButton />
        </div>
    )
}