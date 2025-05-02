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
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxApiKey;

    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapboxStyleUrl,
        center: [-77.8434, 41.6941], // Default center
        zoom: 7.49,
      });

      mapRef.current = map;

      // Add park markers
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

      // Get and add user location marker
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userCoords: [number, number] = [
              position.coords.longitude,
              position.coords.latitude
            ];
            setUserLocation(userCoords);

            // Add marker to map
            new Marker({ color: 'blue' })
              .setLngLat(userCoords)
              .setPopup(new Popup().setText("You are here"))
              .addTo(map);

            // Optional: center map on user location
            map.flyTo({ center: userCoords, zoom: 10 });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }

      return () => {
        map.remove();
      };
    }
  }, []);

  return <div id="map-container" ref={mapContainerRef} style={{ height: '90vh', width: '100%' }} />;
};

export default MapComponent;
