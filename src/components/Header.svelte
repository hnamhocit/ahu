<script>
	import { Avatar } from '$lib/components/ui/avatar';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { DropdownMenu } from '$lib/components/ui/dropdown-menu';
	import DropdownMenuContent from '$lib/components/ui/dropdown-menu/dropdown-menu-content.svelte';
	import DropdownMenuItem from '$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte';
	import DropdownMenuTrigger from '$lib/components/ui/dropdown-menu/dropdown-menu-trigger.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Bell, Plus } from '@lucide/svelte';
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
</script>

<div
	transition:fade={{ duration: 1000, easing: quintOut, delay: 200 }}
	class="sticky top-0 left-0 z-20 flex h-16 items-center justify-between border-b-2 border-gray-700 bg-[#121212] px-4 text-white"
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
		<Input placeholder="Search" class="rounded-full text-black" />

		<Button size="icon">
			<Plus />
		</Button>

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
				<DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</div>
