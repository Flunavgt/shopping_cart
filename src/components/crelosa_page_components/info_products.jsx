/* eslint-disable import/no-extraneous-dependencies */
import '../../styles/CrelosaPage-styles/info_products.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const InfoProducts = () => (
  <section id="info_products" className="Main_infoproducts_container">

    <h1 className="title_section_infoproducts">Últimos modelos</h1>

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
        <img src="https://images.hytera.us/images/PNC360S_front-1.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=992&webPQuality=70&s=407a5a9d28927bdbafe0cf3e368afb8e" alt="IMG 1" />
        <div>
          <h4>Modelo</h4>
          <h3>Descripción</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.hytera.us/images/PNC360S_front-1.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=992&webPQuality=70&s=407a5a9d28927bdbafe0cf3e368afb8e" alt="IMG 1" />
        <div>
          <h4>Modelo</h4>
          <h3>Descripción</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.hytera.us/images/PNC360S_front-1.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=992&webPQuality=70&s=407a5a9d28927bdbafe0cf3e368afb8e" alt="IMG 1" />
        <div>
          <h4>Modelo</h4>
          <h3>Descripción</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.hytera.us/images/PNC360S_front-1.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=992&webPQuality=70&s=407a5a9d28927bdbafe0cf3e368afb8e" alt="IMG 1" />
        <div>
          <h4>Modelo</h4>
          <h3>Descripción</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.hytera.us/images/PNC360S_front-1.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=992&webPQuality=70&s=407a5a9d28927bdbafe0cf3e368afb8e" alt="IMG 1" />
        <div>
          <h4>Modelo</h4>
          <h3>Descripción</h3>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className="btn_store_section">
      <h1>¿No está seguro de qué producto busca?</h1>
      <button type="submit">Ir a la tienda</button>
    </div>

  </section>
);

export default InfoProducts;
