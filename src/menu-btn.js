import React from "react";
import { GlobalHook } from "./Context";

const MenuBtn = () => {
    const { openSideMenu} = GlobalHook()
  return (
    <>
      <div className="menu-btn-container" onClick={openSideMenu}>
        <i class="ri-menu-3-line"></i>
      </div>
    </>
  );
};

export default MenuBtn
