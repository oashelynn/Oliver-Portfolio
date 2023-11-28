import { testimonials } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Why people love my work!" />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={2}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full m-auto md:max-h-[200px] gap-10 md:gap-10 items-start"
      >
        {testimonials.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative max-w-[350px] min-w-[350px] bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p className="text-base italic relative testimonialQuote">
                "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b>
              </p>
              {index === 3 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p className="text-base italic relative testimonialQuote">
                "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </p>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Testimonials;
