'use server';

import { supabase } from './supabaseclient';
import ParkMap from './ParkMap';

const MapComponent = async () => {

  const { data, error } = await supabase.from('PARK').select('*'); // Changed 'parks' to 'park'

 return (
  <ParkMap parks={data ?? []} mapboxApiKey={process.env.MAPBOX_API_KEY as string} mapboxStyleUrl={process.env.MAPBOX_STYLE_URL as string} />
 )
};

export default MapComponent;