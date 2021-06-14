<script>
	import { page } from '$app/stores';

	import { user, supabase } from '../stores/user';

	let mobileOpen = false;
	let profileMenuOpen = false;

	function handleMobileMenuClick() {
		mobileOpen = !mobileOpen;
	}
	function handleProfileDropdownClick() {
		profileMenuOpen = !profileMenuOpen;
	}

	const signOut = async () => {
		await supabase.auth.signOut();
	};

</script>

<nav class="bg-white shadow">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex justify-between h-16">
			<div class={`absolute inset-y-0 left-0 flex items-center sm:hidden`}>
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={handleMobileMenuClick}
				>
					<span class="sr-only">Open main menu</span>

					<svg
						class={`${mobileOpen ? 'hidden' : 'block'} h-6 w-6`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>

					<svg
						class={`${mobileOpen ? 'block' : 'hidden'} h-6 w-6`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<a href="/" class="flex-shrink-0 flex items-center">
					<svg
						id="logo-25"
						width="147"
						height="46"
						viewBox="0 0 147 46"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M72.6756 7.40747C74.0634 6.01977 76.3134 6.01977 77.7012 7.40747C79.089 8.79527 79.089 11.0453 77.7012 12.4331L69.2403 20.894C66.8111 17.6384 67.075 13.0082 70.032 10.0512L72.6756 7.40747Z"
							class="ccompli1"
							fill="#5d95b8"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M84.771 26.4967C86.159 27.8844 86.159 30.1345 84.771 31.5222C83.384 32.91 81.1336 32.91 79.7458 31.5222L71.2849 23.0614C74.5405 20.6322 79.1707 20.896 82.1277 23.853L84.771 26.4967Z"
							class="ccustom"
							fill="#457b9d"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M65.6821 38.5924C64.2944 39.9802 62.0443 39.9802 60.6566 38.5924C59.2688 37.2046 59.2688 34.9546 60.6566 33.5668L69.1174 25.106C71.5466 28.3616 71.2828 32.9918 68.3258 35.9487L65.6821 38.5924Z"
							class="ccompli2"
							fill="#a4c3d7"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M53.5865 19.5032C52.1987 18.1154 52.1987 15.8654 53.5865 14.4776C54.9743 13.0898 57.2243 13.0898 58.6121 14.4776L67.073 22.9385C63.8174 25.3677 59.1871 25.1038 56.2302 22.1469L53.5865 19.5032Z"
							class="ccustom"
							fill="#457b9d"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M70.7849 37.5562C72.8312 35.281 73.7823 32.3697 73.638 29.5033L77.7014 33.5667C77.7115 33.5768 77.7217 33.5869 77.7319 33.597V36.498C77.7319 38.4606 76.1409 40.0516 74.1783 40.0516C72.5842 40.0516 71.2353 39.002 70.7849 37.5562Z"
							class="ccustom"
							fill="#457b9d"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M54.6226 24.6058C56.8977 26.6522 59.809 27.6033 62.6754 27.459L58.6121 31.5224C58.6019 31.5325 58.5918 31.5427 58.5818 31.5528H55.6808C53.7182 31.5529 52.1272 29.9618 52.1272 27.9992C52.1272 26.4052 53.1768 25.0562 54.6226 24.6058Z"
							class="ccompli1"
							fill="#5d95b8"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M83.735 21.3942C81.4601 19.3478 78.5488 18.3967 75.6824 18.5409L79.7457 14.4776C79.7559 14.4675 79.7659 14.4573 79.776 14.4471H82.6771C84.64 14.4471 86.231 16.0382 86.231 18.0008C86.231 19.5949 85.181 20.9438 83.735 21.3942Z"
							class="ccompli2"
							fill="#a4c3d7"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M67.573 8.44368C65.5266 10.7188 64.5756 13.6301 64.7198 16.4966L60.6565 12.4332C60.6463 12.4231 60.6362 12.413 60.626 12.4029V9.50188C60.626 7.53928 62.217 5.94818 64.1796 5.94818C65.7737 5.94818 67.1226 6.99788 67.573 8.44368Z"
							class="ccustom"
							fill="#457b9d"
						/>
					</svg>
				</a>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<a
						href="/events"
						class={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 ${
							$page.path === '/events' ? 'border-b-2' : ''
						} text-sm font-medium`}
					>
						Events
					</a>
					<a
						href="/marketplace"
						class={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 ${
							$page.path === '/marketplace' ? 'border-b-2' : ''
						} text-sm font-medium`}
					>
						Marketplace
					</a>
					{#if $user}
						<a
							href="/dashboard"
							class={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 ${
								$page.path === '/dashboard' ? 'border-b-2' : ''
							} text-sm font-medium`}
						>
							Dashboard
						</a>
					{/if}
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>

				{#if $user}
					<div class="ml-3 relative">
						<div>
							<button
								type="button"
								class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								id="user-menu-button"
								aria-expanded={profileMenuOpen}
								aria-haspopup="true"
								on:click={handleProfileDropdownClick}
							>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>

						<div
							class={`${
								profileMenuOpen
									? 'transition ease-out duration-200  transform opacity-100 scale-100'
									: 'transition ease-in duration-75 transform opacity-0 scale-95 pointer-events-none'
							} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<button
								on:click={signOut}
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2">Sign out</button
							>
						</div>
					</div>
				{:else}
					<a href="/sign-in" class="ml-3">Sign in</a>
				{/if}
			</div>
		</div>
	</div>

	<div class={`sm:hidden ${mobileOpen ? 'block' : 'hidden'}`} id="mobile-menu">
		<div class="pt-2 pb-4 space-y-1">
			<a
				href="/events"
				class={` block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
					$page.path === '/events'
						? 'bg-indigo-50 border-indigo-500 text-indigo-700'
						: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
				}`}
			>
				Events
			</a>
			<a
				href="/marketplace"
				class={` block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
					$page.path === '/marketplace'
						? 'bg-indigo-50 border-indigo-500 text-indigo-700'
						: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
				}`}
			>
				Marketplace
			</a>
			{#if $user}
				<a
					href="/dashboard"
					class={` block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
						$page.path === '/dashboard'
							? 'bg-indigo-50 border-indigo-500 text-indigo-700'
							: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Dashboard
				</a>
			{/if}
		</div>
	</div>
</nav>
