<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	const { field, label, type, placeholder } = $props();
</script>

<div class="space-y-2">
	<label for={field.name} class="block text-sm font-medium text-gray-400">{label}</label>

	<Input
		id={field.name}
		name={field.name}
		{type}
		{placeholder}
		class="text-black"
		value={field.state.value}
		oninput={(e) => field.handleChange(e.currentTarget.value)}
	/>

	{#if field.state.meta.errors}
		<p class="text-xs font-medium text-red-500">{field.state.meta.errors[0]?.message}</p>
	{/if}
</div>
