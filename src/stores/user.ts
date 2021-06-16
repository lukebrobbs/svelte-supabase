import { db } from '$lib/db';
import type { AuthUser } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const user = writable<AuthUser | undefined>(undefined);

db.auth.onAuthStateChange((event, session) => {
	switch (event) {
		case 'SIGNED_IN':
			user.set(session.user);
			break;
		case 'SIGNED_OUT':
			user.set(undefined);
			break;
	}
});
