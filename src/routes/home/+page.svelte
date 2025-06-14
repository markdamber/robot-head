<script lang="ts">
	import { enhance } from "$app/forms";

    import type { PageProps } from './$types';

    let { data, form }: PageProps = $props();

	// export let form: { success?: boolean } | null;
	let success = false;

	// $: if (form?.success) {
	// 	success = true;
	// }
</script>

<h1>Dog Chore Logger</h1>

<span>{JSON.stringify(data)}</span>

<form method="POST" use:enhance>
	<input type="hidden" name="taskType" value="poop" />
	<button type="submit">Log Poop</button>
</form>

{#if form?.success}
	<p>✅ Poop record added!</p>
{/if}
