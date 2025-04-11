import { createClient } from '@supabase/supabase-js'

const URL = 'https://aqjnphagknotvslhqslr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxam5waGFna25vdHZzbGhxc2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNzkxMTAsImV4cCI6MjA1OTk1NTExMH0.OnWlkJijJ7ho_2TlXXfjWyDKv90kNeA5qFvXFWu2SO4';

export const supabase = createClient(URL, API_KEY);