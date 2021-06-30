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

<div class="relative -mt-6">
	<div class="absolute inset-0">
		<img src={event.cover_img_url} alt={event.name} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-gray-400 mix-blend-multiply" />
	</div>
	<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-36 lg:px-8">
		<h1 class="text-center text-4xl text-gray-50">{event.name}</h1>
	</div>
</div>
