/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
import '../../styles/CrelosaPage-styles/caratula.css';
import React, { useEffect, useRef } from 'react';
import Leafleat from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';
import collegePng from './images/radio-tower.png';
import adds from './images/Introduccion/adds.jpg';
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
      zoom: 8,
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

    const coordenadas = [[15.203717, -91.741847], [14.5453861, -90.1185611], [15.7835, -90.2308]];

    Leafleat.polygon(coordenadas, { color: 'red' }).addTo(map);

    Leafleat.marker([14.585798, -90.517950], {
      icon: customIcon,
      title: 'Oficina de atención al cliente',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Parquep de Crelosa continuo');
    // .openPopup();

    Leafleat.marker([14.4666028, -90.7430111], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [30, 30],
        iconAnchor: [20, 0],
      }),
      title: 'Volcán de Agua',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Volcán de Agua');

    Leafleat.marker([14.8210556, -91.4074083], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [30, 30],
        iconAnchor: [20, 0],
      }),
      title: 'Parraxquin',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Parraxquin');
    // .openPopup();

    Leafleat.marker([14.5453861, -90.1185611], {
      icon: Leafleat.icon({
        iconUrl: collegePng,
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
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
        iconSize: [30, 30],
        iconAnchor: [20, 0],
      }),
      title: 'Marmolera',
      draggable: false,
    })
      .addTo(map)
      .bindPopup('Marmolera');
  }, []);

  return (
    <section id="cobertura" className="Main_caratula_container1">
      <h6>Ésta es nuestra</h6>
      <h1 className="only_lobster">Cobertura</h1>
      <div className="margin_for_main">
        <div className="Main_caratula_container">
          <div className="Container_adds_caratula">
            <h1>Publicidad</h1>
            <img src={adds} alt="adds" />
          </div>
          <div className="Container_title_caraturla">
            <div>
              <div id={mapId} className="mapCover" />
            </div>
            <div className="store_link_add">
              <h1>visita nuestra tienda en línea</h1>
              <a href="/main" type="submit">VISITA NUESTRA TIENDA</a>
            </div>
          </div>
        </div>
        {/* <div className="modelosMasVend">
          <h1>Modelos mas vendidosssssss</h1>
        </div> */}
        <InfoProducts />
      </div>
    </section>
  );
};

export default Caratula;
