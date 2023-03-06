/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';

const Caratula = () => {
  const mapId = 'map';

  useEffect(() => {
    const map = Leafleat.map(mapId, {
      center: [15.7835, -90.2308],
      zoom: 7,
    });

    Leafleat.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

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
      .bindPopup('Esta es mi ciudad')
      .openPopup();

    Leafleat.marker([14.581142, -90.482566], {
      icon: customIcon,
      title: 'pepito',
      draggable: true,
    })
      .addTo(map)
      .bindPopup('Este es mi barrio')
      .openPopup();

    Leafleat.marker([15.950688, -89.717274], {
      icon: customIcon,
      title: 'pepito',
      draggable: true,
    })
      .addTo(map)
      .bindPopup('')
      .openPopup();
  }, []);

  return (
    <section className="Main_caratula_container">
      <div id={mapId} />
    </section>
  );
};

export default Caratula;
