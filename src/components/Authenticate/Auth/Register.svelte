<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { createForm } from '@tanstack/svelte-form';
	import { z } from 'zod';
	import { userStore } from '../../../stores';
	import FormField from '../../FormField.svelte';

	let isDisabled = $state(false);
	const form = createForm(() => ({
		defaultValues: {
			email: '',
			password: '',
			displayName: ''
		},

		onSubmit: async ({ value }) => {
			isDisabled = true;
			await userStore.register(value.email, value.password, value.displayName);
			isDisabled = false;
		}
	}));
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		e.stopPropagation();
		form.handleSubmit();
	}}
	class="w-full space-y-7"
>
	<form.Field
		name="displayName"
		validators={{
			onChange: z.string().nonempty()
		}}
	>
		{#snippet children(field)}
			<FormField {field} label="Display Name" type="text" placeholder="Display Name" />
		{/snippet}
	</form.Field>

	<form.Field
		name="email"
		validators={{
			onChange: z.string().email()
		}}
	>
		{#snippet children(field)}
			<FormField {field} label="Email" type="email" placeholder="Email" />
		{/snippet}
	</form.Field>

	<form.Field
		name="password"
		validators={{
			onChange: z.string().min(8)
		}}
	>
		{#snippet children(field)}
			<FormField {field} label="Password" type="password" placeholder="Password" />
		{/snippet}
	</form.Field>

	<Button type="submit" class="w-full" disabled={isDisabled}>Continue</Button>
</form>
