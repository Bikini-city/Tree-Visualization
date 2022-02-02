import mapboxgl from 'mapbox-gl';

export const addMarkersToMap = ({ markers, map }) => {
  markers.forEach((marker) => {
    new mapboxgl.Marker().setLngLat([marker.lng, marker.lat]).addTo(map.getMap());
  });
};

export const removeMarkersToMap = ({ markers }) => {
  markers.forEach((marker) => marker.remove());
};
