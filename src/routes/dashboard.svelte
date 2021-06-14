<script>
	import { goto } from '$app/navigation';

	import { user } from '../stores/user';

	const shouldRedirect = () => {
		if (!$user) {
			goto('/');
		}
	};

	$: $user, shouldRedirect();

</script>

<p>Dashboard</p>
