import React from "react";
import logo from "../../assets/icons/enver.png";

function Footer() {
  const Menu = () => (
    <>
      <p>
        <a href="#home">Support</a>
      </p>
      <p>
        <a href="#wgpt3">Privacy Policy</a>
      </p>
      <p>
        <a href="#possibility">Terms and Condition</a>
      </p>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-between h-full pt-12 pb-24 md:flex-row layout md:h-auto gap-[40px] ,md:gap-0">
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center md:flex-row opacity-70 gap-[40px] md:gap-0 grow justify-evenly shrink-0">
        <Menu />
      </div>
      <div className="flex-1">
        <p className="text-right opacity-70">
          <a href="#features">© 2020 Enver, All Rights Reserved</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
