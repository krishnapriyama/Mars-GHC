import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const products = [
  {
    id: 1,
    src: img1,
    text: "6 Surprising Benefits of Washing Your Face with Salt Water",
  },
  {
    id: 1,
    src: img2,
    text: "Natural ways to remove tan from hands",
  },
  {
    id: 1,
    src: img3,
    text: "Get Clear, Radiant Skin with these 9 Benefits of Honey for Pimples",
  },
  {
    id: 1,
    src: img4,
    text: "Everything you need to know about Saffron Benefits for Skin",
  },
];

const careSkin = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-between items-center p-5">
          <h1 className="font-semibold text-2xl">Skin - Talk </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-96 flex relative justify-center border  rounded-xl shadow-md m-5"
          >
            <div className="w-auto">
              <img
                src={product.src}
                alt=""
                className="w-full h-full rounded-xl"
              />
              <div className="w-full h-full bg-black absolute top-0 rounded-xl opacity-50"></div>
              <h1 className="absolute bottom-0 p-5 text-white font-bold ">
                {product.text}
                <span className="flex text-sm font-thin">
                  By Mars by GHC on Jun 22, 2022
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* End of Cards */}
    </>
  );
};

export default careSkin;
