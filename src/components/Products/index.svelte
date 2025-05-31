<script>
	import Product from './Product.svelte';

	const products = [
		{
			id: 1,
			name: 'Nuxt Todos',
			thumbnailURL: '/products/nuxt_todos.png',
			description: 'A simple todo app built with Nuxt 5',
			tag: ['Nuxt', 'Vue', 'Tailwind', 'TypeScript', 'Firebase'],
			repoURL: 'https://github.com/hnamhocit/nuxt_todos',
			previewURL: 'https://nuxt-todos-lilac.vercel.app/'
		},
		{
			id: 2,
			name: 'Svelte Todos',
			thumbnailURL: '/products/svelte_todos.png',
			description: 'A simple todo app built with Svelte 5',
			tag: ['Svelte', 'Tailwind', 'TypeScript', 'Firebase'],
			repoURL: 'https://github.com/hnamhocit/svelte_todos',
			previewURL: 'https://svelte-todos-one.vercel.app/'
		},
		{
			id: 3,
			name: 'Short Link - SL',
			thumbnailURL: '/products/sl.png',
			description: 'A simple short link app built with Nextjs',
			tag: ['Nextjs', 'Tailwind', 'TypeScript', 'Firebase'],
			repoURL: 'https://github.com/hnamhocit/sl',
			previewURL: 'https://sl-xi.vercel.app/'
		},
		{
			id: 4,
			name: 'Ao Ca Vui Ve',
			thumbnailURL: '/products/aocavuive.png',
			description: 'A simple blog app built with Nextjs',
			tag: ['Nextjs', 'Tailwind', 'TypeScript', 'Firebase'],
			repoURL: 'https://github.com/hnamhocit/aocavuive',
			previewURL: 'https://aocavuiveweb.vercel.app/'
		}
	];
</script>

<div class="space-y-7">
	<div class="text-center text-2xl font-bold">Products</div>

	<div class="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
		{#each products as product}
			<Product {product} />
		{/each}
	</div>
</div>
