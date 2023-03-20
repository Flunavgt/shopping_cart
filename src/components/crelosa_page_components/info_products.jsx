import '../../styles/CrelosaPage-styles/info_products.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import radios from '../../data/radios';

const InfoProducts = () => (
  <>
    <section id="info_products" className="Main_infoproducts_container">

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{ clickable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          radios.map((radio) => (
            <SwiperSlide key={radio.modelo}>
              <div className="img_container">
                <img src={radio.imagen[0]} alt={radio.modelo} />
              </div>

              <div className="container_model_description">
                <h4>{radio.modelo}</h4>
                <h3>{radio.descripcion}</h3>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  </>
);

export default InfoProducts;
