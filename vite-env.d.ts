// This file provides TypeScript definitions for Vite's environment variables.
// The original `/// <reference types="vite/client" />` was causing an error because the type definition file could not be found.
// To resolve this, we are manually defining the `import.meta.env` properties used in the app.

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
