/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOperation } from '../redux/operations/operations';
import '../styles/reserve.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchModelsAsync } from '../redux/models/models';

const Reserve = () => {
  const dispatch = useDispatch();
  const typeReact = useLocation()
  const navigate = useNavigate();
  const { productModel } = typeReact.state || {productModel: ''};
  const user = useSelector((state) => state.current_user.user)
  const models = useSelector((state) => state.models);
  useEffect(() => {
    dispatch(fetchModelsAsync());
  }, [dispatch]);

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [type, settype] = useState('');
  const [modelName, setModelName] = useState(productModel);

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetProduct = models.find((product) => product.model === e.target[3].value);
    const { id } = targetProduct;

    const formData = {
      user_id: user.id, product_id: id, start_date, end_date, type,
    };
    dispatch(addOperation(formData));
    e.target.reset();
    navigate('/home/my-operations')
  };

  const modelsList = (products) => {
    const list = products.map((product) => (
      <option
        key={`res-${product.id}`}
      >
        { product.model }
      </option>
    ));
    return list;
  }

  return (
    <div className='form-container'>
      <h1 className='tit-form'>RESERVAR RADIO</h1>
      <form className='res-form'
        onSubmit={handleSubmit}
      >
        <div>
          <label>Ubicación:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => { settype(e.target.value); }}
          />
        </div>

        <div>
          <label>Fecha de Inicio:</label>
          <input
            type="date"
            value={start_date}
            onChange={(e) => { setStartDate(e.target.value); }}
          />
        </div>

        <div>
          <label>Fecha de Termino:</label>
          <input
            type="date"
            value={end_date}
            onChange={(e) => { setEndDate(e.target.value); }}
          />
        </div>
        <div>
          <label>Modelo de Radio:</label>
          <input list="models"
            name="models"
            id="list-cont"
            value ={modelName}
            onChange={(e) => { setModelName(e.target.value); }}
          />
            <datalist id="models">
              { modelsList(models) }
            </datalist>
        </div>
        <div className="res-btn-cont">
          <input className='reserve-btn' type="submit" value="Crear Reservación" />
        </div> 
      </form>
    </div>
  );
};

export default Reserve;
