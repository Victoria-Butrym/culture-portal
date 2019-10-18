import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

export default function Map({ geolocation }) {
  const [viewport, setViewport] = useState({
    latitude: 53.906177,
    longitude: 27.554801,
    zoom: 10,
    width: '100%',
    height: '500px',
    mapboxApiAccessToken:
      'pk.eyJ1IjoiaGhoMTM2MSIsImEiOiJjanlzYzQ5Y28waXRmM2JxZHhjNTRpaWVkIn0.1NlMRoyK2zoN8VMyGUx2ww',
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedLocation(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  });

  return (
    <ReactMapGL
      {...viewport}
        // eslint-disable-next-line no-shadow
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/hhh1361/cjyscupqd0gp31coac4osfz7j"
    >
      {geolocation.map(location => (
        <Marker
          key={location.id}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          <button
            type="button"
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedLocation(location);
            }}
          />
        </Marker>
      ))}

      {selectedLocation ? (
        <Popup
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          onClose={() => {
            setSelectedLocation(null);
          }}
        >
          <div>{selectedLocation.description}</div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

Map.propTypes = {
  geolocation: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    description: PropTypes.string,
  })),
};

Map.defaultProps = {
  geolocation: '',
};
