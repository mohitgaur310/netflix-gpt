import React from "react";
import { LOGO } from "../utils/Constants";
function Header() {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10  ">
      <img className="w-44 " src={LOGO} alt="logo" />
    </div>
  );
}

export default Header;
