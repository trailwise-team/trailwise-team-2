"use client";

// 🛡️ Import Supabase Client
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/supabase";  // If you have a Database type
// 🗺️ Import Map Screen
import MapScreen from "@/components/MapScreen";

// 🛡️ Setup Supabase Client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

// 🛡️ SUPABASE FUNCTION
export async function Home() {
  const { data, error } = await supabase
    .from('user')
    .select('*');

  console.log(data, error);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data?.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  );
}

// 🗺️ MAPSCREEN FUNCTION
export default function ExplorePage() {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <MapScreen />
    </div>
  );
}



