<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Eye, Heart, MessageCircle, Share } from '@lucide/svelte';
</script>

<div class="transition-all duration-300 hover:-translate-y-4 hover:text-orange-500">
	<div
		class="h-40 rounded-2xl bg-cover bg-center bg-no-repeat shadow-md"
		style="background-image: url('https://careers.smartosc.com/wp-content/uploads/2023/09/nodejs-la-gi.jpg')"
	></div>

	<div class="space-y-2 p-4">
		<div class="flex items-center justify-between">
			<div class="text-sm text-gray-400">5 mins read</div>
			<div class="text-sm text-gray-400">12/12/2025</div>
		</div>

		<div class="line-clamp-2 text-lg font-bold">Lorem ipsum dolor sit</div>

		<div class="flex items-center justify-between gap-3">
			<Button size="sm">
				<Eye />
				40
			</Button>

			<Button size="sm">
				<Heart />
				40
			</Button>

			<Button size="sm">
				<Share />
				40
			</Button>

			<Button size="sm">
				<MessageCircle />
				40
			</Button>
		</div>
	</div>
</div>
