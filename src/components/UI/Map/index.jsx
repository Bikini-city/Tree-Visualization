import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';
import * as Style from './styled';

const LNG = -86.89871737888747;
const LAT = 40.41866254968954;
const ZOOM = 12;

function Map({ children, getMap }) {
  const [viewport, setViewport] = useState({
    latitude: LAT,
    longitude: LNG,
    zoom: ZOOM,
  });
  const mapRef = useRef(null);

  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

  useEffect(() => {
    if (mapRef.current) {
      getMap(mapRef.current);
    }
  }, [mapRef, getMap]);

  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <Style.Container id="comparison-container">
      <ReactMapGL
        ref={mapRef}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        width="100%"
        height="100%"
        style={style}
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
      />
      {children}
    </Style.Container>
  );
}

export default Map;
