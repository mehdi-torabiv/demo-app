import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface SwiperComponentProps {
  slides: string[];
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
}

/**
 * SwiperComponent displays a responsive image slider using Swiper.js.
 *
 * @component
 * @example
 * <SwiperComponent
 *   slides={['image1.jpg', 'image2.jpg', 'image3.jpg']}
 *   loop={true}
 *   spaceBetween={50}
 *   slidesPerView={1}
 * />
 *
 * @param {Object} props - Component props.
 * @param {string[]} props.slides - An array of image URLs to display in the slider.
 * @param {boolean} [props.loop=true] - Whether to enable loop mode for the slider.
 * @param {number} [props.spaceBetween=50] - Space between slides in pixels.
 * @param {number} [props.slidesPerView=1] - Number of slides to display in the viewport at once.
 */

function SwiperComponent({
  slides,
  loop = true,
  spaceBetween = 50,
  slidesPerView = 1,
}: SwiperComponentProps) {
  return (
    <Swiper
      loop={loop}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      autoplay
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex w-full md:h-[80vh] md:max-h-[80vh] items-center justify-center">
            <img
              src={slide}
              alt={slide}
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
