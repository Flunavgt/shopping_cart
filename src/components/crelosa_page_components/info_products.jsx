import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CrelosaPage-styles/info_products.css';

const InfoProducts = () => (
  <section id="info_products" className="Main_infoproducts_container">

    <div className="buttons__infoproducts_container">
      <Link to="/main">
        <button type="submit" className="toStorebtn">
          RADIOS
        </button>
      </Link>

      <Link to="/main">
        <button type="submit" className="toStorebtn">
          ACCESORIOS
        </button>
      </Link>
    </div>

    <div className="buttons__infoproducts_container_buttom">
      <a href="/main" className="buttonStorebtn">
        IR A LA TIENDA
      </a>
    </div>

  </section>
);

export default InfoProducts;
