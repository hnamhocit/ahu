<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';

	const {
		square,
		icon,
		name
	}: { square: { y: number; x: number; angle: number }; icon: string; name: string } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<div
				class="absolute top-1/2 left-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-700 transition-all hover:scale-95 hover:bg-orange-500"
				style="transform: translateX(-50%) translateY(-50%) translateY({square.y}px) translateX({square.x}px) rotate({square.angle}deg)"
			>
				<img src={`/technologies/${icon}`} alt={name} class="h-10 w-10 rounded-md object-cover" />
			</div>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{name}
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
