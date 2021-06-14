<script>
	import { onMount } from 'svelte';

	import { supabase } from '../stores/user';

	let loading = true;
	let events = [];

	async function getEvents() {
		try {
			loading = true;

			let { data, error, status } = await supabase.from('events').select(`name`);

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
		<div class="p-2 border border-gray-200 shadow-sm rounded-md max-w-sm text-center">
			<h1 class="font-bold">{event.name}</h1>
		</div>
	{/if}
{/each}
