import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { createClient } from '@supabase/supabase-js'; // 🆕 Import Supabase client

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

const INITIAL_CENTER = [-77.8434, 41.6941];
const INITIAL_ZOOM = 7.49;

// 🆕 Connect to Supabase
const supabaseUrl = 'https://alvmuuodakpsjwfvmspk.supabase.co'; // <-- 🔥 Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdm11dW9kYWtwc2p3ZnZtc3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NjE0OTIsImV4cCI6MjA1MzQzNzQ5Mn0.byppoIwq3NQMb9QkPY0pI1y0Cad8_jUEXHl4llPan4A';           // <-- 🔥 Replace with your Supabase anon public key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3NsaWNrIiwiYSI6ImNtOXRicmRuOTA5emgya3B5cHBuZXRyMnUifQ.dyrfrIXPeUrg5mIFkvTitw'; // <-- 🔥 Replace with your Mapbox access token

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
      style: 'mapbox://styles/nickslick/cma13lu0l006y01s17hzj2yh7' // <-- 🔥 Replace with your Mapbox style URL
    });

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    // 🆕 Fetch parks from Supabase
    const loadParks = async () => {
      let { data: parks, error } = await supabase
        .from('park')   // <-- 🔥 Replace 'parks' if your table has a different name
        .select('*');    // Fetch all fields

      if (error) {
        console.error('Error fetching parks:', error);
        return;
      }

      // 🆕 Add a marker for each park
      parks.forEach(park => {
        new mapboxgl.Marker()
          .setLngLat([park.longitude, park.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3>${park.name}</h3><a href="${park.description_url}" target="_blank">View Details</a>`
            )
          )
          .addTo(mapRef.current);
      });
    };

    loadParks(); // Load parks once map is ready

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      <div className="sidebar">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <div id='map-container' ref={mapContainerRef} />
    </>
  );
}

export default App;
//longitude: -77.8434 | Latitude: 41.0424 | Zoom: 7.49
