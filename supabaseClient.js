// Initialize Supabase
const SUPABASE_URL = 'https://your-project-id.supabase.co';  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'your-anon-key';  // Replace with your Supabase Anon Key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
