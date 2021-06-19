<script context="module">
	import { getEventById } from '$lib/db';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const { error, status, data } = await getEventById(page.params.slug);

		if (error && status !== 406) {
			return {
				status,
				error: new Error(`Could not load ${page.params.slug}`)
			};
		}

		return {
			props: {
				event: data
			}
		};
	}

</script>

<script lang="ts">
	import type { Event } from 'src/types';

	export let event: Event;

</script>

<h1>{event.name}</h1>
