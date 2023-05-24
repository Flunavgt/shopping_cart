import React from 'react';
import './products.scss';
import VideoComponent from '../../crelosa_page_components/VideoComponent';

const Products = () => (
  <div className="mx-4">
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col mx-4">
        <h1 className="fw-bold">PRODUCTOS Y SERVICIOS</h1>
        {/* eslint-disable-next-line max-len */}
        <div className="mt-3 mx-4">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" checked />
              {' '}
              Radio Móvil Digital
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" />
              {' '}
              Radio Móvil Digital
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" />
              {' '}
              Microonda
            </label>
          </div>
        </div>
        <p className="mx-4">
          {/* eslint-disable-next-line max-len */}
          DMR o Radio Móvil Digital es una tecnología que combina voz, datos, características y aplicaciones.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          Las radios Hytera DMR tienen gran compatibilidad con cualquier otro sistema, se distinguen por su amplitud de
          rango y sus características únicas para comunicaciones de negocio y de misión crítica.
          <br />
          <br />
          Desde la ligera y compacta serie H, diseñada para facilitar el uso en interiores,
          {/* eslint-disable-next-line max-len */}
          hasta la robusta y segura radio intrínsecamente segura PD796Ex que opera en ambientes hostiles donde la
          seguridad es vital.
          {' '}
        </p>
      </div>
      <div className="col">
        <VideoComponent />
      </div>
    </div>
  </div>
);

export default Products;
