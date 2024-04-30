<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let observer: IntersectionObserver;
	let intersecting: boolean | null = null;

	let ref: HTMLElement;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(async (entry) => {
					intersecting = !entry.isIntersecting;
				});
			},
			{
				root: null,
				rootMargin: '-200px'
			}
		);

		observer.observe(ref);
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<div
	class="sticky top-0 {intersecting
		? 'sm:opacity-100 '
		: 'sm:-translate-y-2 sm:opacity-0'} transition-all"
>
	<slot name="header" />
</div>

<div
	bind:this={ref}
	class="{intersecting ? 'sm:-translate-y-2 sm:opacity-0' : 'sm:translate-y-0'} transition-all"
>
	<slot name="content" />
</div>
