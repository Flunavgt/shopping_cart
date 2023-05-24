/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';
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
    <section id="cover" className="m-4 mt-md-5 mx-md-5">
      <h1 className="text-center text-primary fw-bold">NUESTRA COBERTURA</h1>
      <div className="line text-center" />
      <p className="text-center description mt-4 px-5">
        {/* eslint-disable-next-line max-len */}
        Cada llamada, cada mensaje y cada comunicación es vital en situaciones críticas.
        Es por eso que buscamos ofrecerte la mejor señal sin importar dónde te encuentres
        {' '}
      </p>
      <div className="d-flex justify-content-center mt-3">
        <div id={mapId} className="mapCover" />
      </div>
    </section>
  );
};

export default Caratula;
