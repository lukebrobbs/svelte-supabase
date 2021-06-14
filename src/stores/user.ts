import { SUPABASE_KEY } from '$lib/env';
import type { AuthUser } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const supabase = createClient('https://rfvlbchltzmcqwhcajkp.supabase.co', SUPABASE_KEY);

export const user = writable<AuthUser | undefined>(undefined);

supabase.auth.onAuthStateChange((event, session) => {
	console.log(event, session);
	user.set(session.user);
});
