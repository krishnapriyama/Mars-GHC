import track from "../assets/track.png";
import wallet from "../assets/wallet.png";
import blogs from "../assets/blogs.png";
import consult from "../assets/consult.png";

const Menu = () => {
  const cardData = [
    { title: "TRACK", imgSrc: track, bgColor: "#CDCCF3" },
    { title: "WALLET", imgSrc: wallet, bgColor: "#F5FCC6" },
    { title: "BLOG", imgSrc: blogs, bgColor: "#C5EEFD" },
    { title: "CONSULT", imgSrc: consult, bgColor: "#FDEEE0" },
    { title: "TRACK", imgSrc: track, bgColor: "#CDCCF3" },
    { title: "WALLET", imgSrc: wallet, bgColor: "#F5FCC6" },
    { title: "BLOG", imgSrc: blogs, bgColor: "#C5EEFD" },
    { title: "CONSULT", imgSrc: consult, bgColor: "#FDEEE0" },
    { title: "TRACK", imgSrc: track, bgColor: "#CDCCF3" },
    { title: "WALLET", imgSrc: wallet, bgColor: "#F5FCC6" },
    { title: "BLOG", imgSrc: blogs, bgColor: "#C5EEFD" },
    { title: "CONSULT", imgSrc: consult, bgColor: "#FDEEE0" },
    { title: "TRACK", imgSrc: track, bgColor: "#CDCCF3" },
    { title: "WALLET", imgSrc: wallet, bgColor: "#F5FCC6" },
  ];
  return (
    <div className="w-full">
      <div className="ml-10 lg:text-3xl text-2xl">
        Welcome, <span className="font-bold">June!</span>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full flex justify-center items-center p-3 overflow-x-scroll md:overflow-auto ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="h-40 w-36 bg-transparent flex justify-center items-center relative mx-4"
            >
              <div className="relative">
                <div
                  className="h-20 w-20 rounded-2xl"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div className="h-1/2 flex justify-center items-center">
                    <img
                      src={card.imgSrc}
                      className="w-auto h-auto top-[-14px] absolute"
                      alt={`Track ${index + 1}`}
                    />
                  </div>
                  <div className="h-1/2 flex justify-center items-center">
                    <h1 className="font-bold text-xs">{card.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
