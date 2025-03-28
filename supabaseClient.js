// ✅ Initialize Supabase Client
const { createClient } = supabase;

const supabaseUrl = "https://etrxonsxtjqrwizffstu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cnhvbnN4dGpxcndpemZmc3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTEyMDQsImV4cCI6MjA1ODU2NzIwNH0.teZ_HhEklSDkZSkWbGy5aElv7AZ3kc39_eVTRpkokaQ";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
