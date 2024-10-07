import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = ({ longitude, latitude }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'property-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <div id="property-map" className="w-full h-64 md:h-96 rounded-md overflow-hidden"></div>
  );
};

export default Map;

