const SUPABASE_URL = 'https://etrxonsxtjqrwizffstu.supabase.co';  
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cnhvbnN4dGpxcndpemZmc3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTEyMDQsImV4cCI6MjA1ODU2NzIwNH0.teZ_HhEklSDkZSkWbGy5aElv7AZ3kc39_eVTRpkokaQ';  // Replace this with your actual Anon Key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
