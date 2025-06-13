<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen w-full overflow-hidden bg-background text-text" >
	{@render children()}
</div>

