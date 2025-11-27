

import { createClient } from '@supabase/supabase-js';

// These variables are loaded from .env.local by Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // In a real app, you might render an error page or a message.
  // For this setup, we'll show a clear console error.
  console.error("Supabase environment variables are missing!");
  console.error("Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.");
}

// We export the client even if the variables are missing to prevent the app from crashing.
// The Supabase functions will fail until the variables are provided.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');