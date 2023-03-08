/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';
import Imgradcarat from './images/hytera-walkie.png';

const Caratula = () => {
  const savedMap = useRef();
  const mapId = 'map';

  useEffect(() => {
    const baseMaps = {
      'Vista aérea': Leafleat.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ),
      Topografía: Leafleat.tileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
          layers: 'TOPO-WMS',
        },
      ),
      Lugares: Leafleat.tileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
          layers: 'OSM-Overlay-WMS',
        },
      ),
      'Topografia + Lugares': Leafleat.tileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
          layers: 'TOPO-WMS,OSM-Overlay-WMS',
        },
      ),
    };

    if (savedMap.current) {
      savedMap.current.off();
      savedMap.current.remove();
    }

    const map = Leafleat.map(mapId, {
      center: [15.7835, -90.2308],
      zoom: 7,
      scrollWheelZoom: false,
    });

    savedMap.current = map;

    // Leafleat.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png', {
    //   attribution:
    //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    Leafleat.control.layers(baseMaps, null, { collapsed: true }).addTo(map);
    baseMaps['Vista aérea'].addTo(map);

    const customIcon = Leafleat.icon({
      iconUrl: markerIconPng,
      shadowUrl: markShadowPng,
    });

    Leafleat.marker([15.203717, -91.741847], {
      icon: customIcon,
      title: 'Punto de repetición B',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Radio de cobertura: yyy qqq');
    // .openPopup();

    Leafleat.marker([14.581142, -90.482566], {
      icon: customIcon,
      title: 'Punto de repetición A',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Radio de cobertura: xxx zzz');
    // .openPopup();

    Leafleat.marker([15.950688, -89.717274], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [38, 38],
        iconAnchor: [20, 0],
      }),
      title: 'DMR',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Ejemplo');
    // .openPopup();
  }, []);

  return (
    <section id="cobertura" className="Main_caratula_container">
      <div className="map_container">
        <>
          <div id={mapId} className="mapCover" />
        </>
      </div>
      <div className="Container_title_caraturla">
        <h6>Ésta es nuestra</h6>
        <h1>Cobertura</h1>
        <img src={Imgradcarat} alt="Imagen de radio" />
        <div className="Container_text_caratula">
          <div>
            <p> Abarcamos todo el territorio nacional</p>
            <br />
            <p>Haz click en las imágenes del mapa </p>
            <p>para mas información</p>
          </div>
          <div className="pocInfo">
            <h2>Que es PoC</h2>
            <p>
              Push to talk Over Cellular es una comunicación instantánea
              que permite utilizar radions de comunicación como un teléfono
              celular y transmitir voz, video y datos.
            </p>
            <br />
            <br />
            <h2>Beneficios</h2>
            <ol>
              <li>- Gran escalabilidad</li>
              <li>- Orientados a Trabajo</li>
              <li>- Se ajusta a presupuesto</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caratula;
