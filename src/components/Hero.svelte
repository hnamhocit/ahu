<script>
	import { ChevronRight, Eye, MessageCircle, Star, UserRoundPlus } from '@lucide/svelte';
	import clsx from 'clsx';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { buttonClass } from '../constants';
</script>

<div class="relative flex h-screen items-center justify-center">
	<div class="flex max-w-xl flex-col items-center justify-center gap-7 text-center">
		<div
			class="text-4xl font-bold capitalize"
			transition:slide={{ duration: 1000, easing: quintOut, delay: 200 }}
		>
			level up your

			<span
				class="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent underline decoration-orange-500 underline-offset-10"
			>
				coding skills
			</span>
		</div>

		<div class="text-gray-200" transition:slide={{ duration: 1000, easing: quintOut, delay: 200 }}>
			Where you can not only learn programming, software and systems engineering and follow advanced
			technology jobs, people with open minds and working opportunities.
		</div>

		<div
			class="grid gap-4 md:grid-cols-2"
			transition:slide={{ duration: 1000, easing: quintOut, delay: 200 }}
		>
			<div
				class="flex items-center gap-3 rounded-2xl border-r-4 border-b-4 border-red-300 bg-red-400 px-4 py-3 text-sm font-semibold shadow-lg shadow-red-500"
			>
				<Eye size={16} />

				<span class="font-black">400+</span> views
			</div>
			<div
				class="flex items-center gap-3 rounded-2xl border-r-4 border-b-4 border-green-300 bg-green-400 px-4 py-3 text-sm font-semibold shadow-lg shadow-green-500/50"
			>
				<MessageCircle size={16} />
				<span class="font-black">400+</span> posts
			</div>
			<div
				class="flex items-center gap-3 rounded-2xl border-r-4 border-b-4 border-purple-300 bg-purple-400 px-4 py-3 text-sm font-semibold shadow-lg shadow-purple-500/50"
			>
				<UserRoundPlus size={16} />
				<span class="font-black">400+</span> followers
			</div>
			<div
				class="flex items-center gap-3 rounded-2xl border-r-4 border-b-4 border-blue-300 bg-blue-400 px-4 py-3 text-sm font-semibold shadow-lg shadow-blue-500/50"
			>
				<Star size={16} />
				<span class="font-black">400+</span> stars
			</div>
		</div>

		<button
			transition:slide={{ duration: 1000, easing: quintOut, delay: 200 }}
			class={clsx(buttonClass.base, buttonClass.primary, buttonClass.shadow)}
		>
			Explore now <ChevronRight />
		</button>
	</div>
</div>
