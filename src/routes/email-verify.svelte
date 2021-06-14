<script lang="ts">
	import { onDestroy } from 'svelte';

	import { user } from '../stores/user';

	let userInfo;
	const unsub = user.subscribe((user) => {
		userInfo = user;
	});

	onDestroy(unsub);

</script>

<div>
	<h2>A verification email has been sent to {userInfo?.email}</h2>
	<button>Resend verification email</button>
</div>
