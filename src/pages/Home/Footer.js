import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName } = intro;
  return (
    <div className="py-10 text-white opacity-70">
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="flex mt-10 flex-col items-center justify-center">
        <h1 className="item">Designed and Developed By</h1>
        <h1 className="item">
          {firstName || ""}
          {lastName || ""}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
