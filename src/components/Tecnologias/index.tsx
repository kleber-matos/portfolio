import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function index() {
  return (
    <div className="flex justify-center" id="projeto">
      <div className="w-9/12 lg:w-1/2 text-[#1E3A5F] dark:text-[#F8F9FA]">
        <h2 className="text-center mb-5 font-semibold text-2xl">skills</h2>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 }, // Celulares pequenos
            480: { slidesPerView: 4 }, // Celulares médios
            640: { slidesPerView: 5 }, // Tablets
            1024: { slidesPerView: 6 }, // Laptops
            1280: { slidesPerView: 8 }, // Telas grandes
          }}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={8}
          loop={true}
          speed={900} // Velocidade da transição (3s)
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // Continua após interação do usuário
          }}
        >
          <SwiperSlide>
            <FaReact className="w-20 h-20 " />
          </SwiperSlide>
          <SwiperSlide>
            <FaVuejs className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <FaJsSquare className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <TbBrandTypescript className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <RiTailwindCssFill className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <FaCss3 className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <FaHtml5 className="w-20 h-20" />
          </SwiperSlide>
          <SwiperSlide>
            <SiStyledcomponents className="w-20 h-20 font-black" />
          </SwiperSlide>
          <SwiperSlide>
            <FaSass className="w-20 h-20" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
