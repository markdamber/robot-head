<script lang="ts">
	import Clock from '$lib/components/Clock.svelte';

    function handlePageClick(event: { clientX: any; clientY: any; }) {
        console.log('Page clicked at:', event.clientX, event.clientY);
    }

</script>

<!-- <div class="w-100 h-100">
    <div class="flex justify-center mt-4">
        <Clock/>
    </div>
</div> -->

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="flex h-screen w-full cursor-pointer items-center justify-center overflow-hidden"
	on:click={handlePageClick}
	role="button"
	tabindex="0"
>
    <div class="prose">
        <h1 class="text-primary">Hi</h1>
    </div>
	<div class="flex items-center justify-center">
		<Clock />
	</div>
</div>
