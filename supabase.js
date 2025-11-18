import { createClient } from "@supabase/supabase-js";
  const SUPABASE_URL = "https://fmbmarulvbcybhdadrua.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYm1hcnVsdmJjeWJoZGFkcnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MzkyNTEsImV4cCI6MjA3ODUxNTI1MX0.w9UV0nVDi6rAaDZQpzqNvBnyi7yqdmBN8JjXJ59AMD8";

  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);