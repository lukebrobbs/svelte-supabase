<script>
	import { db, getAllEvents } from '$lib/db';
	import format from 'date-fns/format';
	import parseISO from 'date-fns/parseISO';
	import { onMount } from 'svelte';

	let loading = true;
	let events = [];

	async function getEvents() {
		try {
			loading = true;
			let { data, error, status } = await getAllEvents();
			if (error && status !== 406) throw error;
			if (data) {
				events = data;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	onMount(getEvents);
</script>

<h1 class="text-2xl mb-2">Events</h1>

{#each events as event}
	{#if loading}
		<p>Loading...</p>
	{:else}
		<a href={`/events/${event.id}`}>
			<div class="p-2 border border-gray-200 shadow-sm rounded-md max-w-sm text-center">
				<h1 class="font-bold text-2xl">{event.name}</h1>
				<p>{event.artist.name}</p>
				<p>{format(parseISO(event.date), 'dd MMM yyyy')}</p>
			</div>
		</a>
	{/if}
{/each}
