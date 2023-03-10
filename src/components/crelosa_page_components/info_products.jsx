/* eslint-disable import/no-extraneous-dependencies */
import '../../styles/CrelosaPage-styles/info_products.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const InfoProducts = () => (
  <section id="info_products" className="Main_infoproducts_container">

    <h1 className="title_section_infoproducts">Modelos más vendidos</h1>

    <Swiper
      slidesPerView={4}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>

        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_PNC560_list.png" alt="IMG 1" />
        </div>

        <div className="container_model_description">
          <h4>PNC 560</h4>
          <h3>5G XSecure Rugged Device</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_gc550_list.png" alt="IMG 2" />
        </div>
        <div className="container_model_description">
          <h4>GC550</h4>
          <h3>2K Mini Body Camera</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/HR65X_list.png" alt="IMG 3" />
        </div>
        <div className="container_model_description">
          <h4>HR65X</h4>
          <h3>Compact DMR Repeater</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_hp780_list.png" alt="IMG 4" />
        </div>
        <div className="container_model_description">
          <h4>HP78X</h4>
          <h3>Professional DMR Portable Two-way Radio</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_hp56x_list.png" alt="IMG 5" />
        </div>
        <div className="container_model_description">
          <h4>HP56X</h4>
          <h3>Professional DMR Portable Two-way Radio</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_PNC560_list.png" alt="IMG 1" />
        </div>

        <div className="container_model_description">
          <h4>PNC 560</h4>
          <h3>5G XSecure Rugged Device</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_gc550_list.png" alt="IMG 2" />
        </div>
        <div className="container_model_description">
          <h4>GC550</h4>
          <h3>2K Mini Body Camera</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/HR65X_list.png" alt="IMG 3" />
        </div>
        <div className="container_model_description">
          <h4>HR65X</h4>
          <h3>Compact DMR Repeater</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_hp780_list.png" alt="IMG 4" />
        </div>
        <div className="container_model_description">
          <h4>HP78X</h4>
          <h3>Professional DMR Portable Two-way Radio</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img_container">
          <img src="https://www.hytera.com/iwov-resources/hytera/02_products/1_list_image/en_hp56x_list.png" alt="IMG 5" />
        </div>
        <div className="container_model_description">
          <h4>HP56X</h4>
          <h3>Professional DMR Portable Two-way Radio</h3>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className="bottom_background" />
    <div className="btn_store_section">
      <h1>¿No está seguro de qué producto busca?</h1>
      <a href="/main" type="submit">VISITA NUESTRA TIENDA</a>
    </div>

  </section>
);

export default InfoProducts;
