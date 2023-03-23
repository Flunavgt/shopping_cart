import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductAsync } from '../../redux/models/models';
import '../../styles/add_motorcycle.css';

const Form = () => {
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState('');
  const [power, setPower] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProducthandler = (e) => {
    e.preventDefault();

    if (model !== '' && photo !== '' && power > 0 && weight > 0 && price > 0 && description !== '') {
      const product = {
        brand: 'Hytera', model, photo, power, weight, price, description,
      };
      dispatch(addProductAsync(product));
      e.target.reset();
      navigate('/home/models');
    }
  };

  const resetForm = () => {
    setModel('');
    setPhoto('');
    setPower('');
    setWeight('');
    setPrice('');
    setDescription('');
  };

  return (
    <>
      <form
        className="product-form"
        onSubmit={addProducthandler}
        onReset={resetForm}
      >
        <input
          className="product-input"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Nombre del Modelo"
        />
        <input
          className="product-input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Link de la imagen"
        />
        <input
          className="product-input"
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          placeholder="Potencia del transmisor (W)"
        />
        <input
          className="product-input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso (gr)"
        />
        <input
          className="product-input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio por día"
        />
        <textarea
          className="product-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe una breve descripción"
          rows="6"
        />
        <input
          className="res-btn add-product-btn"
          type="submit"
          value="Agregar Modelo"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
};

const AddMotorcycle = () => (
  <div className="product-form-cont">
    <h2 className="models-title">ADD A NEW MODEL</h2>
    <Form />
  </div>
);

export default AddMotorcycle;
