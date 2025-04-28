"use client";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/supabase";  // or adjust path if you store database types
import MapScreen from "@/components/MapScreen"; // Import your Map Screen

// Create Supabase client once (you can also separate into lib/supabaseClient.ts later if you want)
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

export default async function HomePage() {
  // Fetch data from Supabase
  const { data: users, error } = await supabase
    .from("user")
    .select("*");

  console.log(users, error);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Render your map viewer */}
      <MapScreen />

      {/* Optional: Render user list */}
      <div style={{ position: "absolute", bottom: "80px", width: "100%", textAlign: "center" }}>
        {users?.map((user, i) => (
          <div key={i}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}


