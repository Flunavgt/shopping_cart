/* eslint-disable array-callback-return */
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';
import adds from './images/Introduccion/adds1.png';
import InfoProducts from './info_products';
import { centroDelMapa, oficinaCentral, markers } from '../../data/Coordenadas';

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
      center: centroDelMapa.coordenadas,
      zoom: centroDelMapa.zoom,
      scrollWheelZoom: false,
    });

    savedMap.current = map;

    Leafleat.control.layers(baseMaps, null, { collapsed: true }).addTo(map);
    baseMaps['Vista aérea'].addTo(map);

    const customIcon = Leafleat.icon({
      iconUrl: markerIconPng,
      shadowUrl: markShadowPng,
    });

    // MAP para todas las oficinas de CRELOSA -> OFICINA CENTRAL
    oficinaCentral.map((oficina) => {
      Leafleat.marker(oficina.coordenadas, {
        icon: customIcon,
        title: oficina.title,
        draggable: false,
        closeButton: false,
      })
        .addTo(map)
        .bindPopup(oficina.popUpMessage);
    });

    // MAP para todos las antenas / repetidoras
    markers.map((marker) => {
      const popupContent = marker.popUpMessage;
      const popup = Leafleat.popup({ closeButton: false }).setContent(popupContent);
      let popUpAbierto = false;
      const popUpInformacion = Leafleat.polygon(marker.mancha, { color: marker.mancha_Color }).on('click', () => {
        if (!popUpAbierto) {
          popUpInformacion.addTo(map);
          popUpInformacion.bindPopup(popup);
          popUpAbierto = true;
        } else {
          map.removeLayer(popUpInformacion);
          popUpAbierto = false;
        }
      });

      Leafleat.marker(marker.coordenadas, {
        icon: Leafleat.icon({
          iconUrl: collegePng,
          iconSize: [15, 15],
          iconAnchor: [20, 0],
        }),
        draggable: false,
      })
        .addTo(map)
        .bindTooltip(marker.hover, {
          direction: 'top',
          offset: [0, 0],
          opacity: 0.8,
        })
        .bindPopup(popup)
        .on('click', () => {
          if (!popUpAbierto) {
            popUpInformacion.addTo(map);
            popUpAbierto = true;
          } else {
            map.removeLayer(popUpInformacion);
            popUpAbierto = false;
          }
        });
    });
  }, []);

  return (
    <section id="cobertura" className="Main_caratula_container1">

      <h6 className="small_title_cobertura">Ésta es nuestra</h6>
      <h1 className="main_title_cobertura">Cobertura</h1>

      <div className="Main_caratula_container">

        <div className="Container_adds_caratula">
          <img src={adds} alt="adds" />
        </div>

        <div>
          <div id={mapId} className="mapCover" />
        </div>

        <div className="store_link_add">
          <h1>Visita nuestra tienda en línea</h1>
          <a href="/main" type="submit">Crelosa onLine</a>
          <h1 className="title_section_infoproducts"> O adquiere a un click</h1>
        </div>

        {/* </div> */}
      </div>

      <InfoProducts />

      {/* </div> */}
    </section>
  );
};

export default Caratula;
