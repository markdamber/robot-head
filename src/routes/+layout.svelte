<script lang="ts">
	import DogSticker from '$lib/components/DogSticker.svelte';
	import '../app.css';
	

	let { children } = $props();
</script>

<div class="min-h-screen w-full overflow-hidden touch-none" >
	{@render children()}
	<DogSticker />
</div>