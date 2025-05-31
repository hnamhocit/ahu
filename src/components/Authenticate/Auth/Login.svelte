<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createForm } from '@tanstack/svelte-form';
	import { z } from 'zod';

	import { userStore } from '../../../stores';
	import FormField from '../../FormField.svelte';

	let isDisabled = $state(false);
	const form = createForm(() => ({
		defaultValues: {
			email: '',
			password: ''
		},

		onSubmit: async ({ value }) => {
			isDisabled = true;
			await userStore.login(value.email, value.password);
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
