import React from "react";
import mainStylesMenu from "./mainStylesMenu.module.css";
import MenuList from "./MenuList/MenuList";

const MainContentMenu = () => {
  return (
    <div className={mainStylesMenu.mainMenu}>
      <MenuList />
    </div>
  );
};

export default MainContentMenu;
