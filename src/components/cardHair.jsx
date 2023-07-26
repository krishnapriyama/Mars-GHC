import source1 from "../assets/source1.png";
import source2 from "../assets/source2.png";
import source3 from "../assets/source3.png";
import source4 from "../assets/source4.png";

const products = [
  {
    id: 1,
    src: source1,
    text: "Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care",
  },
  {
    id: 1,
    src: source2,
    text: "Coffee for Hair Growth: Brew Up Longer, Thicker Hair with Coffee",
  },
  {
    id: 1,
    src: source3,
    text: "Maximizing Hair Growth and Health: 7 Benefits of Biotin Hair Gummies",
  },
  {
    id: 1,
    src: source4,
    text: "Vitamin E tabs for hair: Get Lustrous Hair In No Time!",
  },
];

const careHair = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-between items-center p-5">
          <h1 className="font-semibold text-2xl">Understanding Hair </h1>
          <button className="bg-transparent border rounded-2xl border-black shadow-md w-36 h-10">
            View All
          </button>
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

export default careHair;
