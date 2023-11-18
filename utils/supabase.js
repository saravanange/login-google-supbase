
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-url-polyfill/auto';

export const supabase = createClient("https://wkvbsevyzmalmveuukuc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdmJzZXZ5em1hbG12ZXV1a3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMjU0MDIsImV4cCI6MjAxNTkwMTQwMn0.29yYZDBmq2sicn2gxbyGC99rg_8JbGYvQ-ch4--j5KU", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;