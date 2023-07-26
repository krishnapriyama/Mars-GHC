import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
const footer = () => {
  return (
    <>
      <div className="w-full flex justify-evenly border shadow-md p-4 items-center">
        <div className="flex-col flex justify-center items-center">
          <img src={icon1} alt="" />
          <span className="font-semibold">Account</span>
        </div>

        <div className="flex-col flex justify-center items-center">
          <img src={icon2} alt="" />
          <span className="font-semibold">Track</span>
        </div>

        <div className="flex-col flex justify-center items-center">
          <img src={icon3} alt="" />
          <span className="font-semibold">Home</span>
        </div>
        <div className="flex-col flex justify-center items-center">
          <img src={icon4} alt="" />
          <span className="font-semibold">Search</span>
        </div>
      </div>
    </>
  );
};

export default footer;
