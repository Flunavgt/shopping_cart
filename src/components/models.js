import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/models.css';

const Product = ({ product }) => {
  const {
    id, brand, model, photo, description,
  } = product;

  const socialMedia = () => {
    const modelMedia = ['ri:facebook-fill', 'mdi:twitter', 'mdi:instagram'];
    const social = [];

    for (let i = 0; i < modelMedia.length; i += 1) {
      social.push(
        <li className="social-cont" key={`${id}-${modelMedia[i]}`}>
          <Icon
            className="social-mini"
            color="#bbbbbb"
            icon={modelMedia[i]}
          />
        </li>,
      );
    }
    return social;
  };

  return (
    <li className="product-item">
      <Link className="product-link" to={`/models/${id}`}>
        <div className="img-cont">
          <div className="circle" />
          <img
            src={photo}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
            className="img-product"
          />
        </div>
        <h2 className="model-name">{model}</h2>
      </Link>
      <p className="product-description">{description}</p>
      <ul className="product-social">
        { socialMedia() }
      </ul>
    </li>
  );
};

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const createList = (products) => {
    const list = products.map((product) => (
      <Product
        product={product}
        key={product.id}
      />
    ));
    return list;
  };

  return (
    <ul className="products-list">
      { createList(products) }
    </ul>
  );
};

const Models = () => (
  <div className="models-cont">
    <h1 className="models-title">Radios Disponibles</h1>
    <p className="model-subtitle">Por favor haga su selección</p>
    <ProductsList />
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Models;
