<script>
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input';
	import { Bell, Plus } from '@lucide/svelte';
	import clsx from 'clsx';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { userStore } from '../stores';

	const pages = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'Products',
			href: '/products'
		},
		{
			name: 'Courses',
			href: '/courses'
		},
		{
			name: 'Contacts',
			href: '/contacts'
		}
	];

	let search = $state('');
	let debouncedSearch = $derived(search);

	$effect(() => {
		const timeout = setTimeout(() => {
			debouncedSearch = search;
		}, 500);

		return () => clearTimeout(timeout);
	});
</script>

<div
	transition:fade={{ duration: 1000, easing: quintOut, delay: 200 }}
	class="sticky top-0 left-0 z-20 flex h-16 items-center justify-between border-b-2 border-gray-700 bg-gray-950 px-4 text-white"
>
	<div class="flex items-center gap-7">
		<div class="flex items-center gap-3">
			<a href="/">
				<img src="/logo.png" alt="logo" class="h-12 w-12" />
			</a>
			<span class="text-xl font-bold">AHU</span>
		</div>

		<div class="flex items-center gap-3">
			{#each pages as page}
				<a href={page.href} class="text-sm font-medium text-gray-400 transition hover:text-white">
					{page.name}
				</a>
			{/each}
		</div>
	</div>

	<div class="flex items-center gap-3">
		<div class="relative">
			<Input
				placeholder="Search"
				class="rounded-full text-black"
				value={search}
				oninput={(e) => (search = e.currentTarget.value)}
			/>

			<div
				class={clsx(
					'absolute top-full left-0 min-h-40 w-full rounded-2xl bg-white p-4 shadow-lg transition-all',
					{
						'-translate-y-0 opacity-0': debouncedSearch.length < 3,
						'translate-y-2 opacity-100': debouncedSearch.length >= 3
					}
				)}
			></div>
		</div>
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button size="icon">
					<Plus />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Create Blog</DropdownMenuItem>
				<DropdownMenuItem>Create Product</DropdownMenuItem>
				<DropdownMenuItem>Create Course</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>

		<Button size="icon">
			<Bell />
		</Button>

		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={$userStore.user?.photoURL} />
					<AvatarFallback>
						{$userStore.user?.displayName}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem variant="destructive" onclick={userStore.logout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</div>
