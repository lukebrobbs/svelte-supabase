<script>
	import Nav from '../components/Nav.svelte';

</script>

<Nav />
<div class="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 pt-6">
	<slot />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	html {
		background: #f9fafb;
	}

</style>
