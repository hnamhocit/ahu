<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Login from './Login.svelte';
	import Providers from './Providers.svelte';
	import Register from './Register.svelte';

	let isLogin = $state(true);

	const onclick = () => {
		isLogin = !isLogin;
	};
</script>

<div class="flex h-screen items-center justify-center bg-[#121212] text-[#fff]">
	<div class="flex w-full max-w-xs flex-col items-center gap-7">
		<img src="/logo.png" alt="Code" class="h-24 w-24" />

		{#if isLogin}
			<Login />
		{:else}
			<Register />
		{/if}

		<div class="text-center text-sm">
			{isLogin ? "Don't have an account?" : 'Already have an account?'}
			<Button variant="link" {onclick} class="text-orange-500">
				{isLogin ? 'Register' : 'Login'}
			</Button>
		</div>

		<Providers />
	</div>
</div>
