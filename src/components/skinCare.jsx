import product1 from "../assets/product1.png";
import star from "../assets/star.png";
import wishlist from "../assets/wishlist.png";

const products = [
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
  {
    id: 1,
    name: "Anti-ageing Combo",
    rating: 4.7,
    price: 999,
    discountPrice: 1598,
  },
];

const Skincare = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-between items-center p-5">
          <h1 className="font-semibold text-2xl">Best Sellers</h1>
          <button className="bg-transparent border rounded-2xl border-black shadow-md w-36 h-10">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-56 h-auto relative flex justify-center p-6 border m-5 rounded-xl shadow-md"
          >
            <div className="w-auto">
              <img src={product1} alt="" className="w-52 h-48" />
              <img
                src={wishlist}
                alt="Wishlist"
                className="w-6 h-6 absolute top-2 right-2 cursor-pointer"
              />
              <div className="mt-6 font-semibold text-lg">
                <h1>{product.name}</h1>
                <div className="flex items-center">
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <span className="ml-2">
                    <h1>({product.rating})</h1>
                  </span>
                </div>
                <h1 className="font-bold text-lg">
                  Rs. {product.price}{" "}
                  <span className="line-through font-light ml-2 text-sm">
                    Rs. {product.discountPrice}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skincare;
