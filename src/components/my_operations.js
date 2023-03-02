import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchOperationsFromServer, removeOperations } from '../redux/operations/operations';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/my_operations.css';

const MyOperations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.current_user.user);
  useEffect(() => {
    dispatch(fetchOperationsFromServer(user.id));
    dispatch(fetchModelsAsync());
  }, [dispatch, user.id]);

  const operations = useSelector((state) => state.operations.operations);
  const products = useSelector((state) => state.models);
  const handleDelete = (id) => {
    dispatch(removeOperations({ id, user_id: user.id }));
  };

  return (
    <div className="res-container">
      <div className="title"><h1 className="res-title">Reservaciones</h1></div>

      {operations.length !== 0 ? operations.map((operation) => {
        const product = products.find((product) => product.id === operation.product_id);
        return (
          <div className="card" key={operation.id}>
            <div className="product-info">
              <h2>
                tipo de operación:
                <span>{' '}</span>
                {operation.type}
              </h2>
              {product
                ? (
                  <h2>
                    Modelo de Radio:
                    <span>{' '}</span>
                    {product.model}
                  </h2>
                )
                : <p /> }
              <h2>
                Fecha de inicio:
                <span>{' '}</span>
                {moment(operation.start_date).utc().format('YYYY-MM-DD')}
              </h2>
              <h2>
                Fecha de termino:
                <span>{' '}</span>
                {moment(operation.end_date).utc().format('YYYY-MM-DD')}
              </h2>
            </div>
            <div className="product-cont">
              {product
                ? (
                  <img
                    src={product.photo}
                    alt="model"
                    className="product-photo"
                  />
                )
                : <p /> }
            </div>
            <div className="delete-operation">
              <button className="delete-btn" type="button" onClick={() => handleDelete(operation.id)}>Eliminar Reservación</button>
            </div>
          </div>
        );
      })
        : <h2 className="no-operations">No operations</h2>}
    </div>
  );
};

export default MyOperations;
