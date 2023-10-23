import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{
            backgroundImage: "url(https://i.ibb.co/yQfDF1H/vanja-matijevic-i-DMnbydcnt-A-unsplash.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
            height: "100vh"
          }} >
            <div style={{backgroundColor:"rgba(0,0,0,0.3)"}} className='w-full h-full flex justify-center pt-20 md:pt-36 lg:pt-60 ' >
              <div className='space-y-6'>
              <h2 className="text-3xl font-bold text-white">10% Discount on <span className="text-sky-300">Iphone 13</span></h2>
              <h2 className="text-5xl font-bold text-white">Only for <span className='text-sky-300'>This Week</span></h2>
              <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{
            backgroundImage: "url(https://i.ibb.co/mGrj8Bf/vecteezy-modern-laptop-glowing-in-dark-office-night-generated-by-ai-24654242-328.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
            height: "100vh"
          }} >
            <div style={{backgroundColor:"rgba(0,0,0,0.3)"}} className='w-full h-full flex justify-center pt-20 md:pt-36 lg:pt-60 ' >
              <div className='space-y-6'>
              <h2 className="text-3xl font-bold text-white">10% Discount on <span className="text-sky-300">Lenovo Thinkpad</span></h2>
              <h2 className="text-5xl font-bold text-white">Only for <span className='text-sky-300'>This Week</span></h2>
              <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{
            backgroundImage: "url(https://i.ibb.co/tM1Sr7T/daniel-romero-e-T-B6-Yc-QEr-U-unsplash.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
            height: "100vh"
          }} >
            <div style={{backgroundColor:"rgba(0,0,0,0.3)"}} className='w-full h-full flex justify-center pt-20 md:pt-36 lg:pt-60 ' >
              <div className='space-y-6'>
              <h2 className="text-3xl font-bold text-white">10% Discount on <span className="text-orange-600">Google Pixel</span></h2>
              <h2 className="text-5xl font-bold text-white">Only for <span className='text-sky-300'>This Week</span></h2>
              <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}