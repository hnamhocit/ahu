<script>
	import {
		BadgeCheck,
		ClockArrowUp,
		DollarSign,
		DollarSignIcon,
		Flame,
		Presentation,
		Star,
		UsersRound
	} from '@lucide/svelte';
</script>

<div class="transition-all duration-300 hover:-translate-y-4 hover:text-orange-500">
	<div
		class="h-40 rounded-2xl bg-cover bg-center bg-no-repeat shadow-md"
		style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VcuqH0iTYvV2x9ioVtJx2DkidXedViZtqw&s')"
	></div>

	<div class="space-y-3 p-4">
		<div class="flex flex-wrap items-center justify-center gap-3">
			<!-- <div class="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-500">
				<TreePalm size={14} /> FREE
			</div> -->

			<div class="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-orange-500">
				<DollarSign size={14} />
				PAID
			</div>

			<!-- <div class="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-500">
                <BellPlus size={14} />
                NEW
            </div> -->

			<div class="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-red-500">
				<Flame size={14} />
				HOT
			</div>
		</div>

		<div class="line-clamp-2 text-center text-lg font-bold">Nuxt 5 - The Complete Guide</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="flex items-center gap-1 text-sm font-bold text-green-500">
				<DollarSignIcon size={14} />
				50
			</div>
			<div class="flex items-center gap-1 text-sm text-gray-400">
				<Presentation size={14} />
				40+ lessons
			</div>

			<div class="flex items-center gap-1 text-sm text-gray-400">
				<ClockArrowUp size={14} />
				95+ hours
			</div>

			<div class="flex items-center gap-1 text-sm text-gray-400">
				<UsersRound size={14} />
				100+ students
			</div>

			<div class="flex items-center gap-1 text-sm text-gray-400">
				<Star size={14} />
				4.5/5
			</div>

			<div class="flex items-center gap-1 text-sm text-gray-400">
				<BadgeCheck size={14} />
				hnamhocit
			</div>
		</div>
	</div>
</div>
