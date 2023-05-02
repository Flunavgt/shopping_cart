/* eslint-disable react/jsx-boolean-value */
import '../../styles/CrelosaPage-styles/info_products.css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import radios from '../../data/radios';
import pendiente from './images/infoproductos/crelosa_not_found.png';

const InfoProducts = () => {
  const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return { width, height };
  };

  // Mobil version
  if (useScreenSize().width <= 769) {
    return (
      <section id="info_products" className="Main_infoproducts_container">

        <h1 className="title_section_infoproducts">Más pedidos...</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
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
                  <h3>{radio.descripcion}</h3>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </section>
    );
  }

  // Desktop version
  return (
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
  );
};

export default InfoProducts;
