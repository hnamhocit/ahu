<script lang="ts">
	import Technology from './Technology.svelte';

	const circles = [
		{
			radius: 200,
			items: [
				{
					name: 'Git',
					icon: '/git.png'
				},
				{
					name: 'PostgresQL',
					icon: '/postgresql.png'
				},
				{
					name: 'MySQL',
					icon: '/mysql.png'
				},
				{
					name: 'Redis',
					icon: '/redis.svg'
				},
				{
					name: 'Docker',
					icon: '/docker.webp'
				},
				{
					name: 'Elasticsearch',
					icon: '/elasticsearch.png'
				},
				{
					name: 'Nginx',
					icon: '/nginx.png'
				},
				{
					name: 'Prisma',
					icon: '/prisma.png'
				},
				{
					name: 'Linux',
					icon: '/linux.jpg'
				}
			]
		},
		{
			radius: 140,
			items: [
				{
					name: 'Svelte',
					icon: '/svelte.png'
				},
				{
					name: 'React',
					icon: '/react.png'
				},
				{
					name: 'Vue',
					icon: '/vue.png'
				},
				{
					name: 'Tailwind',
					icon: '/tailwind.png'
				},
				{
					name: 'TypeScript',
					icon: '/typescript.png'
				},
				{
					name: 'Next.js',
					icon: '/next.png'
				},
				{
					name: 'Node.js',
					icon: '/nodejs.svg'
				},
				{
					name: 'Nuxt',
					icon: '/nuxt.svg'
				},
				{
					name: 'Golang',
					icon: '/golang.png'
				},
				{
					name: 'NestJs',
					icon: '/nest.svg'
				}
			]
		},
		{
			radius: 80,
			items: [
				{
					name: 'HTML',
					icon: '/html.png'
				},
				{
					name: 'CSS',
					icon: '/css.png'
				},
				{
					name: 'JavaScript',
					icon: '/javascript.png'
				}
			]
		}
	];

	const firstCircle = circles[0];
	const secondCircle = circles[1];
	const thirdCircle = circles[2];

	let squares1 = $state<{ x: number; y: number; angle: number }[]>([]);
	let squares2 = $state<{ x: number; y: number; angle: number }[]>([]);
	let squares3 = $state<{ x: number; y: number; angle: number }[]>([]);

	$effect(() => {
		squares1 = Array.from({ length: firstCircle.items.length }, (_, i) => ({
			x: firstCircle.radius * Math.cos((i * (2 * Math.PI)) / firstCircle.items.length),
			y: firstCircle.radius * Math.sin((i * (2 * Math.PI)) / firstCircle.items.length),
			angle: i * (360 / firstCircle.items.length)
		}));

		squares2 = Array.from({ length: secondCircle.items.length }, (_, i) => ({
			x: secondCircle.radius * Math.cos((i * (2 * Math.PI)) / secondCircle.items.length),
			y: secondCircle.radius * Math.sin((i * (2 * Math.PI)) / secondCircle.items.length),
			angle: i * (360 / secondCircle.items.length)
		}));

		squares3 = Array.from({ length: thirdCircle.items?.length }, (_, i) => ({
			x: thirdCircle.radius * Math.cos((i * (2 * Math.PI)) / thirdCircle.items.length),
			y: thirdCircle.radius * Math.sin((i * (2 * Math.PI)) / thirdCircle.items.length),
			angle: i * (360 / thirdCircle.items.length)
		}));
	});
</script>

<div class="space-y-7">
	<div class="text-center text-2xl font-bold">Technologies</div>

	<div class="flex items-center justify-center overflow-hidden py-7">
		<div
			class="spin relative flex h-[400px] w-[400px] items-center justify-center rounded-full border-2 border-dashed"
		>
			{#each squares1 as square, index}
				<Technology
					{square}
					icon={firstCircle.items[index].icon}
					name={firstCircle.items[index].name}
				/>
			{/each}

			<div
				class="spin relative flex h-[280px] w-[280px] items-center justify-center rounded-full border-2 border-dashed"
			>
				{#each squares2 as square, index}
					<Technology
						{square}
						icon={secondCircle.items[index].icon}
						name={secondCircle.items[index].name}
					/>
				{/each}

				<div class="spin relative h-[160px] w-[160px] rounded-full border-2 border-dashed">
					{#each squares3 as square, index}
						<Technology
							{square}
							icon={thirdCircle.items[index].icon}
							name={thirdCircle.items[index].name}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.spin {
		animation: spin 20s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
