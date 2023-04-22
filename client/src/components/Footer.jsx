import React from "react";
import { BsGithub } from "react-icons/bs";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center flex space-x-2 font-bold">
        <BsGithub fontSize={21} />
        <a
          href="https://github.com/ShashwatAgrawal20/Krypt-Web3"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </p>
      <p className="text-white text-sm text-center font-bold mt-2">
        <a
          href="https://github.com/shashwatagrawal20"
          target="_blank"
          rel="noreferrer"
        >
          Shashwat Agrawal
        </a>
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">
        @krypt{new Date().getFullYear()}
      </p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
