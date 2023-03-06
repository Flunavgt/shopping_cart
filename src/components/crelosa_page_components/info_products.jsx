import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CrelosaPage-styles/info_products.css';

const InfoProducts = () => (
  <section className="Main_infoproducts_container">

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

  </section>
);

export default InfoProducts;
