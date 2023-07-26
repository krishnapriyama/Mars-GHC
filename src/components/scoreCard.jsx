import weight from "../assets/weight.png";
import rest from "../assets/rest.png";
import droplet from "../assets/droplet.png";
import fire from "../assets/fire.png";
import gallery from "../assets/gallery.png";
import score from "../assets/score.png";

const ScoreCard = () => {
  return (
    <>
      <div className="w-full h-full lg:flex lg:justify-center lg:items-center mt-8">
        <div className="w-full lg:w-1/2 flex lg:flex-col justify-center items-center">
          <div className="bg-[#EFEEFB] bg-gradient-to-r from-[rgba(255, 255, 255, 0.20)] via-transparent to-[rgba(255, 255, 255, 0.20)] shadow-lg rounded-xl w-[85%] ">
            <div className="w-full flex items-center p-3">
              <div className="w-full lg:w-1/2 flex flex-col">
                <h1 className="font-semibold flex text-[#333] justify-center items-center mb-3">
                  Wellness Overview :
                </h1>
                <div className="flex justify-center items-center w-full">
                  <h1 className="text-5xl lg:ml-20 text-[#333] font-semibold xl:flex lg:justify-center lg:items-center">
                    40
                    <span className="flex xl:ml-4 xl:mt-0 mt-2">
                      <button className="btn text-sm shadow-lg bg-[#FFF] rounded-2xl px-2 h-7 text-[#FA725F]">
                        Overweight
                      </button>
                    </span>
                  </h1>
                </div>
                <div className="flex justify-center text-[#777]">
                  Your Current BMI
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full flex  flex-col justify-center items-center gap-3">
                  <button className="bg-[#FFF] px-4 py-2 shadow-lg rounded-3xl sm:w-32 lg:w-40 flex justify-center items-center gap-3 font-bold truncate">
                    <span>
                      <img
                        src={weight}
                        alt=""
                        className="w-5 h-5 sm:block hidden"
                      />
                    </span>
                    80.5 kgs
                  </button>
                  <button className="bg-[#FFF] px-4 py-2 shadow-lg rounded-3xl sm:w-32 lg:w-40 flex justify-center items-center gap-3 font-bold truncate">
                    <span>
                      <img
                        src={rest}
                        alt=""
                        className="w-5 h-5 sm:block hidden"
                      />
                    </span>
                    7/8 Hours
                  </button>
                  <button className="bg-[#FFF] px-4 py-2 shadow-lg rounded-3xl sm:w-32 lg:w-40 flex justify-center items-center gap-3 font-bold truncate">
                    <span>
                      <img
                        src={droplet}
                        alt=""
                        className="w-5 h-5 sm:block hidden"
                      />
                    </span>
                    4/8 Glasses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex lg:w-[95%] w-full lg:mt-0 mt-10 lg:p-0 p-3">
            <div className="w-1/2 flex justify-center">
              <div className="bg-[#FFECF3] rounded-2xl w-[90%] shadow-lg">
                <h1 className="m-3 ml-5 font-semibold truncate">
                  Overall Skin score:
                </h1>
                <div className="flex justify-center items-center gap-4">
                  <h1 className="text-5xl text-[#333] font-semibold">45</h1>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <img src={fire} alt="" className="w-3 h-3" />{" "}
                      <span className="text-[#777] xs:block hidden truncate">
                        {" "}
                        5 weeks{" "}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={gallery} alt="" />{" "}
                      <span className="text-[#777] xs:block hidden truncate">
                        {" "}
                        20 uploads{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col mt-4 m-4 ml-5">
                  <img src={score} alt="" className="sm:w-40 lg:w-44 w-20" />
                  <h1 className="text-[#777]">
                    week: <span className="font-bold">40/45</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2  flex justify-center">
              <div className="bg-[#FFECF3] rounded-2xl w-[90%] shadow-lg">
                <h1 className="m-3 ml-5 font-semibold truncate">
                  Hair Tracker:
                </h1>
                <div className="flex justify-center items-center gap-4">
                  <h1 className="text-5xl text-[#333] font-semibold">12</h1>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <img src={fire} alt="" className="w-3 h-3 " />{" "}
                      <span className="text-[#777] xs:block hidden truncate">
                        {" "}
                        5 weeks{" "}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={gallery} alt="" />{" "}
                      <span className="text-[#777] xs:block hidden truncate">
                        {" "}
                        20 uploads{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col mt-4 m-4 ml-5">
                  <img src={score} alt="" className="sm:w-40 lg:w-44 w-20" />
                  <h1 className="text-[#777]">
                    week: <span className="font-bold">40/45</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
