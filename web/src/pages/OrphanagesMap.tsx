import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);


  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças então esperando a sua visita :)</p>
        </header>
            
        <footer>
          <strong>Navegantes</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-26.3273486,-48.818766]} 
        zoom={15} 
        style={{width: '100%', height: '100%'}}>
          <TileLayer 
              // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {orphanages.map(orphanage => {
            return (
              <Marker
                  icon={mapIcon}
                  position = {[orphanage.latitude, orphanage.longitude]}
                  key={orphanage.id}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    { orphanage.name }
                  <Link to={`/orphanages/${orphanage.id}`}>
                      <FiArrowRight size={32} color="#FFF" />
                  </Link>
                </Popup>
              </Marker>
            )
          })}

      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>

  );
}

export default OrphanagesMap;