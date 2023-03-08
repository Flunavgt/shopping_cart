import React from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/CrelosaPage-styles/info_products.css';

const InfoProducts = () => (
  <section id="info_products" className="Main_infoproducts_container">

    <h1 className="Main_title_servicios_y_productos">PRODUCTOS & SERVICIOS</h1>

    <div className="buttons__infoproducts_container">
      <a href="/main" className="toStorebtn">
        <img alt="Radio más vendido background" className="radio_bg" src="https://www.hytera.us/wp-content/uploads/2022/11/TC-320_Analog_Radio_2.png" />
        <img alt="Radio más vendido" className="main_photo_src" src="https://www.hytera.us/wp-content/uploads/2022/11/TC-320_Analog_Radio_1.png" />
        <h1 className="title_infoRadio_img">Modelo: TC-320</h1>
      </a>

      <a href="/main" className="toStorebtn">
        <img alt="Radio más vendido background" className="radio_bg" src="https://www.hytera.mx/assets/img/logo.svg" />
        <img alt="Accesorio más vendido" className="main_photo_src" src="https://www.twowayradio.com/media/catalog/product/cache/3/small_image/220,%20130x/0dc2d03fe217f8c83829496872af24a0/h/y/hytera_eam13_d260341a0224bb248f9f6b16cad40c3b.png" />
        <h1 className="title_infoRadio_img">Modelo: EAM-1320</h1>
      </a>
    </div>

    <div className="buttons__infoproducts_container_buttom">
      <a href="/main" className="ov-btn-slide-left">
        CRELOSA STORE
      </a>
    </div>

  </section>
);

export default InfoProducts;
