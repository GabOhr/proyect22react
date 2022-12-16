import React from "react";
import styleHeader from "./HeaderLinkMenu.module.css"
import LinkMenu from "../navigation/LinkMenu";

const HeaderLinkMenu = () => {
    let myMenuText1="home";
    let myMenuText2="about";
    let myMenuText3="menu";
    let myMenuText4="contact us";
    
    return (
        <div className={styleHeader.HeaderLinkMenu}>
            <LinkMenu>{myMenuText1}</LinkMenu>
            <LinkMenu>{myMenuText2}</LinkMenu>
            <LinkMenu>{myMenuText3}</LinkMenu>
            <LinkMenu>{myMenuText4}</LinkMenu>
        </div>
    )
};

export default HeaderLinkMenu;