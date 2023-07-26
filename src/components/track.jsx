import vector from "../assets/vector.png";
const Track = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="w-[90%] bg-[#333] rounded-lg flex">
          <h1 className="text-white p-3 md:text-xl text-sm w-full">View all trackers</h1>
          <span className="flex justify-end items-center w-full p-5">
            <img src={vector} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Track;
