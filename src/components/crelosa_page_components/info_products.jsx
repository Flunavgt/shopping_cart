/* eslint-disable react/jsx-boolean-value */
import '../../styles/CrelosaPage-styles/info_products.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import radios from '../../data/radios';
import pendiente from './images/infoproductos/crelosa_not_found.png';

const InfoProducts = () => (
  <>
    <section id="info_products" className="Main_infoproducts_container">

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={false}
        navigation
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          radios.map((radio) => (
            <SwiperSlide key={radio.modelo}>
              <div className="img_container">
                {
                  radio.imagen.length !== 0
                    ? <img src={radio.imagen[0]} alt={radio.modelo} />
                    : <img src={pendiente} alt={radio.modelo} />
                }
              </div>

              <div className="container_model_description">
                <h4>{radio.modelo}</h4>
                {/* <h3>{radio.descripcion}</h3> */}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  </>
);

export default InfoProducts;
