<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
	import DogSVG from './DogSVG.svelte'; // Import the new DogSVG component

	let visible = $state(false);

</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<div
		transition:fly={{ y: 200 }}
		class="fixed left-4 bottom-4 z-50"
	>
        <DogSVG />
	</div>
{/if}
