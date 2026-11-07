// Supabase settings for live sync between laptop and phones.
// Supabase dashboard > Project Settings > API (or "Connect").
// These two values are public by design (safe in a browser). Never paste the secret / service_role key here.
window.GAME_CONFIG = {
  supabaseUrl: 'PASTE_PROJECT_URL_HERE',   // e.g. https://abcdefgh.supabase.co
  supabaseKey: 'PASTE_ANON_OR_PUBLISHABLE_KEY_HERE'
};
