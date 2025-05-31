<script>
	import { onMount } from 'svelte';
	import { userStore } from '../../stores';
	import Loading from '../Loading.svelte';
	import Auth from './Auth/index.svelte';

	const { children } = $props();

	onMount(async () => {
		if (localStorage.getItem('accessToken')) {
			await userStore.getProfile();
		}
	});
</script>

{#if $userStore.isLoading}
	<Loading />
{:else if !$userStore.isLoading && !$userStore.user}
	<Auth />
{:else}
	{@render children()}
{/if}
