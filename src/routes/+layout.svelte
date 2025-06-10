<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
	import Authenticate from '../components/Authenticate/index.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let { children } = $props();
</script>

<Authenticate>
	<Header />

	<div class="min-h-[calc(100vh-64px)] space-y-16 bg-gray-950 px-4 text-[#fff]">
		{@render children()}
	</div>

	<Footer />
</Authenticate>

<Toaster />
