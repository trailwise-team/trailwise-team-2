import { Database } from '@/supabase';
import { createClient } from '@supabase/supabase-js';

console.log(process.env.SUPABASE_KEY, "hi")

export const supabase = createClient<Database>(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);