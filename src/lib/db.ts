import { SUPABASE_KEY, SUPABASE_URI } from '$lib/env';
import { createClient } from '@supabase/supabase-js';
import type { Event } from 'src/types';

export const db = createClient(SUPABASE_URI, SUPABASE_KEY);

export const getEventById = async (id: string) => {
	return await db.from<Event>('events').select(GET_EVENT).eq('id', id).single();
};

export const getAllEvents = async () => await db.from<Event[]>('events').select(GET_ALL_EVENTS);

export const GET_EVENT = `
    id,
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

export const GET_ALL_EVENTS = `
  id,
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
