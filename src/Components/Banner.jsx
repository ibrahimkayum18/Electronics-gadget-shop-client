// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/FxqnP8z/b2.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
              overflow: "hidden",
            }}
            className=""
          >
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              className="h-full w-ful flex items-center justify-center gap-5 "
            >
              <div className="space-y-6">
                <h2 className="text-xl md:text-3xl font-semibold text-white">
                  Sale Offer <span className="text-orange-500">-10% Off</span>{" "}
                  This Week!!!
                </h2>
                <h2 className="text-4xl md:text-6xl text-white font-bold">
                  On{" "}
                  <span className="text-orange-500 font-extrabold">Apple</span>{" "}
                  Products
                </h2>
                <div className="text-center">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-3 text-white font-bold text-xl rounded-lg">
                  Shop Now
                </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
