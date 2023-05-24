import React, { useState } from 'react';
import './products.scss';
import { useNavigate } from 'react-router-dom';
import InfoProducts from '../../crelosa_page_components/info_products';
import VideoComponent from '../../crelosa_page_components/VideoComponent';

const Products = () => {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState({
    rmd: true,
    rmda: false,
    onda: false,
  });

  const handleProductDescriptions = (e) => {
    if (e.target.id === 'rdm') {
      setButtons({
        rmd: true,
        rmda: false,
        onda: false,
      });
    } else if (e.target.id === 'rmda') {
      setButtons({
        rmd: false,
        rmda: true,
        onda: false,
      });
    } else {
      setButtons({
        rmd: false,
        rmda: false,
        onda: true,
      });
    }
  };

  const handleStore = () => {
    navigate('/main');
  };

  return (
    <section className="m-4 mt-md-5 mx-md-5" id="products">
      <h1 className="fw-bold px-md-4">PRODUCTOS Y SERVICIOS</h1>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col px-md-5">
          {/* eslint-disable-next-line max-len */}
          <div className="mt-3">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <button className={`btn btn-secondary me-1 ${buttons.rmd ? 'active' : ' '}`} type="button" id="rdm" onClick={handleProductDescriptions}>
                Radio Móvil Digital
              </button>
              <button className={`btn btn-secondary me-1 ${buttons.rmda ? 'active' : ' '}`} type="button" id="rmda" onClick={handleProductDescriptions}>
                Radio Móvil Digital III
              </button>
              <button className={`btn btn-secondary ${buttons.onda ? 'active' : ' '}`} type="button" id="onda" onClick={handleProductDescriptions}>
                Microonda
              </button>
            </div>
          </div>
          <div className="mt-3">
            {/* eslint-disable-next-line no-nested-ternary */}
            {buttons.rmd ? (
              <p className="mt-3 text-justify">

                {/* eslint-disable-next-line max-len */}
                DMR o Radio Móvil Digital es una tecnología que combina voz, datos, características y aplicaciones.
                <br />
                <br />
                {/* eslint-disable-next-line max-len */}
                Las radios Hytera DMR tienen gran compatibilidad con cualquier otro sistema, se distinguen por su amplitud
                de
                {/* eslint-disable-next-line max-len */}
                rango y sus características únicas para comunicaciones de negocio y de misión crítica.
                <br />
                <br />
                Desde la ligera y compacta serie H, diseñada para facilitar el uso en interiores,
                {/* eslint-disable-next-line max-len */}
                hasta la robusta y segura radio intrínsecamente segura PD796Ex que opera en ambientes hostiles donde la
                seguridad es vital.
                {' '}
              </p>
            )
              : buttons.rmda ? (
                <p className="mt-3 text-justify">
                  {/* eslint-disable-next-line max-len */}
                  El Nivel III de DMR, según lo define el ETSI, cubre las operaciones de trunking en las bandas de
                  frecuencia 66-960 MHz. El estándar especifica dos intervalos de
                  tiempo en canales de 12,5 kHz, y es similar a TETRA, ya que admite
                  funcionalidades de voz y mensajería corta en una amplia gama de formatos.
                  <br />
                  <br />
                  Al compararlo con TETRA, su precio no es tan alto. El Tier III, al contar con
                  tecnología más avanzada que la análoga y DMR I o II, es adecuado para algunas
                  de las operaciones más complejas del mundo.
                  <br />
                  <br />
                  El DS-6211, la solución DMR Tier III de Hytera, constituye la verdadera ruta de
                  actualización para los clientes de MPT1327.
                </p>
              ) : (
                <p className="mt-3 text-justify">
                  Una de sus características innovadores es el hecho de que su ancho de
                  banda varía entre 300 a 3.000 MHz, aunque con algunos canales de banda superior,
                  entre 3.5 GHz y 26 GHz.
                  <br />
                  <br />
                  Comúnmente es utilizado como enlace entre una empresa y un centro que funcione
                  como centro de conmutación del operador, o como un enlace entre redes LAN.
                </p>
              )}
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <button className="btn btn-primary w-50font py-2 w-75" onClick={handleStore} type="button">COMPRAR AHORA</button>
          </div>
        </div>
        <div className="col mt-3 mt-md-0">
          <VideoComponent />
        </div>
      </div>
      <InfoProducts />
    </section>
  );
};

export default Products;
