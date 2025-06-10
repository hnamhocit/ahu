<script>
	import { page } from '$app/stores';

	$: ({ status, error } = $page);

	let message = 'Page Not Found';
	if (status === 404) {
		message = 'Oops! The page you are looking for does not exist.';
	} else if (error?.message) {
		message = error.message;
	}
</script>

<div class="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-7">
	<h1 class="text-5xl font-black text-orange-500">{status}</h1>
	<h2 class="text-2xl font-bold">
		{#if status === 404}
			Oops! The page you are looking for does not exist.
		{:else if error?.message}
			{error.message}
		{/if}
	</h2>

	<div class="flex items-center gap-4">
		<a href="/" class="rounded-md bg-orange-500 px-4 py-2 text-white">Go To Home</a>
		<a href="mailto:hnamhocit@gmail.com" class="rounded-md bg-orange-500 px-4 py-2 text-white">
			Contact Support
		</a>
	</div>
</div>
