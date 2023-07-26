import insta from "../assets/insta.png";
const instaTrack = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-10 mb-10">
        <div className="w-[90%] bg-[#333] rounded-lg flex">
          <h1 className="text-white p-3 md:text-xl text-sm w-full flex gap-6">
            <span>
               <img src={insta} alt="" className="ml-5" />
            </span>
            Join our 10K family on Instagram</h1>
          <span className="flex justify-end items-center w-full p-5">
          </span>
        </div>
      </div>
    </>
  );
};

export default instaTrack;
