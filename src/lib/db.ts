import { SUPABASE_KEY, SUPABASE_URI } from '$lib/env';
import { createClient } from '@supabase/supabase-js';

export const db = createClient(SUPABASE_URI, SUPABASE_KEY);

export const GET_ALL_EVENTS = `
  name,
  artist (
    name
  ),
  venue (
    name,
    capacity
  ),
  date
`;
