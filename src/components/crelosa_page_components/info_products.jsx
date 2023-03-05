import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CrelosaPage-styles/info_products.css';

const InfoProducts = () => (
  <div>
    <Link to="/main">
      <button type="submit" className="toStorebtn">
        this is it
      </button>
    </Link>
  </div>
);

export default InfoProducts;
