<script lang="ts">
	import { formatDate } from '$lib';

	export let title: string;
	export let description: string;
	export let date: string;
	export let name: string;
</script>

<a href="/blog/{name}" class="flex flex-col py-12 rounded mb-4 transition ease-in-out duration-300">
	<h2 class="text-lg md:text-sm font-bold text-neutral-900">{title}</h2>
	<span class="text-sm text-neutral-700">{formatDate(date)}</span>
	<p class="text-base md:text-sm pt-4 text-neutral-800">
		{description}
	</p>
</a>
