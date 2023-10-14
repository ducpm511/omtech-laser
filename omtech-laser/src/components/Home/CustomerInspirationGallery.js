import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomerInspirationGallery = () => {
  return (
    <div className={`customerInspirationGallery`}>
      <div className={`sectionToper`}>
        <span className={`sectionHeading`}>Customer inspiration gallery</span>
        <span className={`sectionSubHeading`}>
          Craft ideas on various materials with our passion creators. Join group
        </span>
      </div>
      <div className={`row mt-5`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`galleryCard`}>
              <img src="/assets/images/item1.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerInspirationGallery;
