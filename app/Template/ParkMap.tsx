'use client';

import { useState, useEffect, useRef } from 'react';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Tables } from '@/supabase';

export const MapComponent = ({
    parks,
    mapboxApiKey,
    mapboxStyleUrl
}: {
    parks: Tables<'PARK'>[],
    mapboxApiKey: string,
    mapboxStyleUrl: string
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [park, setPark] = useState<Tables<'PARK'>[]>(parks);

  useEffect(() => {
    mapboxgl.accessToken = mapboxApiKey;

    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapboxStyleUrl,
        center: [-77.8434, 41.6941], // Default coordinates (centered around Pennsylvania)
        zoom: 7.49,
      });

      const loadPark = async () => {
        park.forEach((park: Tables<'PARK'>) => {
          new Marker()
            .setLngLat([park.longitude, park.latitude])
            .setPopup(
              new Popup({ offset: 25 }).setHTML(
                `<h3>${park.name}</h3><a href="/park/${park.park}" target="_blank">View Details</a>`
              )
            )
            .addTo(map);
        });
      };

      loadPark(); // Changed function name from loadParks to loadPark

      return () => {
        map.remove();
      };
    }
  }, []);

  return <div id="map-container" ref={mapContainerRef} style={{ height: '90vh', width: '100%' }} />;
};

export default MapComponent;
