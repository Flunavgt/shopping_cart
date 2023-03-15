/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';
import adds from './images/Introduccion/adds1.png';
import InfoProducts from './info_products';
// import Imgradcarat from './images/hytera-walkie.png';

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

    const coordenadas = [
      [14.048208, -91.528269],
      [14.307560, -91.446870],
      [14.337303, -91.261942],
      [14.292882, -91.194566],
      [14.455848, -90.655992],
      [14.261899, -90.575590],
      [13.926240, -90.659647],
      [13.936695, -91.246602]];

    const coordenadas2 = [
      [16.042793, -89.503193],
      [15.965542, -89.897827],
      [15.568419, -90.064098],
      [15.588441, -89.285939]];

    const popupContent = 'Costa Sur de Guatemala';
    const popup = Leafleat.popup({ closeButton: false }).setContent(popupContent);
    let xxxa = false;
    const xxx = Leafleat.polygon(coordenadas, { color: 'red' }).on('click', () => {
      if (!xxxa) {
        xxx.addTo(map);
        xxx.bindPopup(popup);
        xxxa = true;
      } else {
        map.removeLayer(xxx);
        xxxa = false;
      }
    });

    const marmolera = Leafleat.polygon(coordenadas2, { color: 'green' });
    let marmoleraNo = false;

    Leafleat.marker([14.585798, -90.517950], {
      icon: customIcon,
      title: 'Oficina de atención al cliente',
      draggable: false,
      closeButton: false,
    })
      .addTo(map)
      .bindPopup('Parquep de Crelosa continuo');
    // .openPopup();

    Leafleat.marker([14.4666028, -90.7430111], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
        className: 'laPincheClase',
      }),
      // title: 'gefe',
      draggable: false,
    })
      .addTo(map)
      .bindTooltip('Volcán de Agua', {
        direction: 'top',
        offset: [0, 0],
        opacity: 0.8,
      })
      .bindPopup(popup)
      .on('click', () => {
        if (!xxxa) {
          xxx.addTo(map);
          // xxx.bindPopup(popup);
          xxxa = true;
        } else {
          map.removeLayer(xxx);
          xxxa = false;
        }
      });

    Leafleat.marker([14.8210556, -91.4074083], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Parraxquin',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Parraxquin');
    // .on('click', () => {
    //   if (!xxxa) {
    //     xxx.addTo(map);
    //     xxxa = true;
    //   } else {
    //     map.removeLayer(xxx);
    //     xxxa = false;
    //   }
    // });
    // .openPopup();

    Leafleat.marker([14.5453861, -90.1185611], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Miramundo',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Miramundo');

    Leafleat.marker([14.2086056, -89.7994306], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'YUPILTEPEQUE',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('YUPILTEPEQUE');

    Leafleat.marker([15.2465889, -89.1739417], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'TIPON',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('TIPON');

    Leafleat.marker([15.6720111, -88.6936583], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Las Escobas',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Las Escobas');

    Leafleat.marker([14.7918306, -91.5886833], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: '7 orejas',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('7 orejas');

    Leafleat.marker([15.3966167, -91.4323861], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'LA CAPELLANIA',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('LA CAPELLANIA');

    Leafleat.marker([14.7844917, -91.0266583], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Tecpan',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Tecpan');

    Leafleat.marker([14.6184361, -90.5163222], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Centro Financiero',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Centro Financiero');

    Leafleat.marker([14.6245, -90.6403083], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Cerro Alux',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Cerro Alux');

    Leafleat.marker([14.3916056, -90.6085861], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Cerro Chino',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Cerro Chino');

    Leafleat.marker([14.6421306, -89.3840556], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Quetzaltepeque',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Quetzaltepeque');

    Leafleat.marker([14.9057111, -91.8129528], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Ixtagel',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Ixtagel');

    Leafleat.marker([14.57155, -90.4757556], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Monte Bello',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Monte Bello');

    Leafleat.marker([14.6292583, -90.5619833], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'BRS',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('BRS');

    Leafleat.marker([15.3386389, -90.2751667], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Xucaneb',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Xucaneb');

    Leafleat.marker([15.6797667, -89.6678556], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [15, 15],
        iconAnchor: [20, 0],
      }),
      title: 'Marmolera',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Marmolera')
      .on('click', () => {
        if (!marmoleraNo) {
          marmolera.addTo(map);
          marmoleraNo = true;
        } else {
          map.removeLayer(marmolera);
          marmoleraNo = false;
        }
      });
  }, []);

  return (
    <section id="cobertura" className="Main_caratula_container1">

      <h6 className="small_title_cobertura">Ésta es nuestra</h6>
      <h1 className="main_title_cobertura">Cobertura</h1>

      {/* <div className="margin_for_main"> */}
      <div className="Main_caratula_container">

        <div className="Container_adds_caratula">
          {/* <h1>Publicidad</h1> */}
          <img src={adds} alt="adds" />
        </div>

        {/* <div className="Container_title_caraturla"> */}

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
