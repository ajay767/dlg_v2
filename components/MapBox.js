import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { useEffect, useRef } from 'react';

function MapBox({ children }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = -70.9;
  const lat = 42.35;

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWp1MzIwMiIsImEiOiJjazhidHNoencwN3M5M25ucmExcGs1MzNtIn0.wOekROGkPAtlOzJAhLaKDw';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [lng, lat],
      zoom: 9,
    });
  }, []);
  return (
    <div
      ref={mapContainer}
      className="w-full map-container relative pointer-events-none"
      className="h-screen"
    >
      {children}
    </div>
  );
}

export default MapBox;
