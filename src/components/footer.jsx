import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Footer = () => {
  const iconsData = [
    { icon: icon1, label: 'Account' },
    { icon: icon2, label: 'Track' },
    { icon: icon3, label: 'Home' },
    { icon: icon4, label: 'Search' },
  ];

  return (
    <div className="footer-container fixed bottom-0 left-0 w-full z-50 bg-white">
      <div className="w-full flex justify-evenly border shadow-md p-4 items-center">
        {iconsData.map((data, index) => (
          <div key={index} className="flex-col flex justify-center items-center">
            <img src={data.icon} alt="" />
            <span className="font-semibold">{data.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
