import React from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/CrelosaPage-styles/info_products.css';

const InfoProducts = () => (
  <section id="info_products" className="Main_infoproducts_container">

    <div className="zona1">
      {/* cuadro 1 */}
      <div>
        <img alt="Radio más vendido background" className="bg_img_logo" src="images/hytera_sinfondo.png" />
        <img className="main" src="https://www.hytera.us/wp-content/uploads/2022/11/TC-320_Analog_Radio_1.png" alt="Radio" />
        <a href="/main/" className="title_infoRadio_img">
          <h1>Click para comprar</h1>
          <h1 className="description">Modelo: TC-320</h1>
        </a>
      </div>
      {/* cuadro 2 */}
      <div>
        <img alt="Radio más vendido background" className="bg_img_logo" src="images/hytera_sinfondo.png" />
        <img className="main" src="https://www.twowayradio.com/media/catalog/product/cache/3/small_image/220,%20130x/0dc2d03fe217f8c83829496872af24a0/h/y/hytera_eam13_d260341a0224bb248f9f6b16cad40c3b.png" alt="Radio" />
        <a href="/main/" className="title_infoRadio_img">
          <h1>Click para comprar</h1>
          <h1 className="description">Modelo: EAM-1320</h1>
        </a>
      </div>
      {/* cuadro 3 */}
      <div>
        <img alt="Radio más vendido background" className="bg_img_logo" src="images/hytera_sinfondo.png" />
        <img className="main_pendiente" src="https://images.hytera.us/images/Hytera_PD685_01.png?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=478&webPQuality=70&s=016f66a2f52b2e138f8af102f2b78790" alt="Radio" />
      </div>
      {/* cuadro 4 */}
      <div className="container_btn_to_the_store">
        <img alt="Radio más vendido background" className="bg_img_logo" src="https://crelosa.com/wp-content/uploads/2019/11/logo.jpg" />
        <h1>
          <a className="btn_to_the_store" href="/main/">Ver más</a>
        </h1>
      </div>
    </div>

    <div className="zona2">
      <div>
        <img className="main_big_img" src="https://images.hytera.us/images/Hytera_Mineria_200127_164059.jpg?auto=compress%2Cformat&fit=clip&fm=webp&q=80&w=1800&webPQuality=70&s=1d51a0be76caac9b6315817b412f29d3" alt="Espacio para imagen" />
      </div>
    </div>

  </section>
);

export default InfoProducts;
