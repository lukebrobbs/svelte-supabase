import { SUPABASE_KEY, SUPABASE_URI } from '$lib/env';
import type { AuthUser } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const supabase = createClient(SUPABASE_URI, SUPABASE_KEY);

export const user = writable<AuthUser | undefined>(undefined);

supabase.auth.onAuthStateChange((event, session) => {
	switch (event) {
		case 'SIGNED_IN':
			user.set(session.user);
			break;
		case 'SIGNED_OUT':
			user.set(undefined);
			break;
	}
});
