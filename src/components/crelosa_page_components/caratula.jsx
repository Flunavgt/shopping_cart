/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';

const Caratula = () => {
  const savedMap = useRef();
  const mapId = 'map';

  useEffect(() => {
    const baseMaps = {
      'Street View': Leafleat.tileLayer(
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

    Leafleat.control.layers(baseMaps, null, { collapsed: false }).addTo(map);
    baseMaps['Street View'].addTo(map);

    const customIcon = Leafleat.icon({
      iconUrl: markerIconPng,
      shadowUrl: markShadowPng,
    });

    Leafleat.marker([15.203717, -91.741847], {
      icon: customIcon,
      title: 'My City',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Esta es mi ciudad');
    // .openPopup();

    Leafleat.marker([14.581142, -90.482566], {
      icon: customIcon,
      title: 'pepito',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Este es mi barrio');
    // .openPopup();

    Leafleat.marker([15.950688, -89.717274], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [38, 38],
        iconAnchor: [20, 0],
      }),
      title: 'pepito',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('');
    // .openPopup();
  }, []);

  return (
    <section className="Main_caratula_container">
      <div className="map_container">
        <>
          <p>Cobertura</p>
          <div id={mapId} className="mapCover" />
        </>
      </div>
    </section>
  );
};

export default Caratula;
