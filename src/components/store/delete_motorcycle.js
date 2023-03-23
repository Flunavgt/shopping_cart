import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchModelsAsync,
  deleteProductAsync,
} from '../../redux/models/models';
import '../../styles/delete_motorcycle.css';

const ModelName = ({ product, deleteHandler }) => {
  const { id, model } = product;

  return (
    <li className="model-item">
      <h2>
        {model}
      </h2>
      <div>
        <button
          type="button"
          className="del-btn"
          onClick={() => deleteHandler(id)}
        >
          REMOVER
        </button>
      </div>
    </li>
  );
};

const DeleteMotorcycle = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteProductAsync(id));
  };

  const createList = (products) => {
    const list = products.map((product) => (
      <ModelName
        product={product}
        deleteHandler={deleteHandler}
        key={`del-${product.id}`}
      />
    ));
    return list;
  };

  return (
    <div className="product-form-cont">
      <h2 className="models-title">MODELOS</h2>
      <ul className="models-list">
        { createList(products) }
      </ul>
    </div>
  );
};

ModelName.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
  }).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default DeleteMotorcycle;
