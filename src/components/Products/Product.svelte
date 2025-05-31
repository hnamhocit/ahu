<script>
	const { product } = $props();
</script>

<div class="transition-all duration-300 hover:-translate-y-4 hover:text-orange-500">
	<a href={product.previewURL} target="_blank" aria-label="Preview {product.name}">
		<div
			class="h-40 rounded-2xl bg-cover bg-center bg-no-repeat shadow-md"
			style="background-image: url({product.thumbnailURL})"
		></div>
	</a>

	<div class="space-y-3 p-4">
		<a href={product.previewURL} target="_blank">
			<div class="line-clamp-2 text-center text-lg font-bold">{product.name}</div>
		</a>

		<div class="line-clamp-2 text-center text-sm text-gray-500">{product.description}</div>

		<div class="flex flex-wrap items-center justify-center gap-3">
			{#each product.tag as tag}
				<div class="flex items-center gap-1 rounded-md bg-gray-700 px-2 py-1 text-xs font-semibold">
					{tag}
				</div>
			{/each}
		</div>
	</div>
</div>
