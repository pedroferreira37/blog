<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Nav from './Nav.svelte';

	let scroll: number = 0;

	function onscroll(e: any) {
		scroll = window.scrollY;
	}

	onMount(() => {
		window.addEventListener('scroll', onscroll);
	});

	onDestroy(() => {
		return () => {
			document.removeEventListener('scroll', onscroll);
		};
	});
</script>

<header
	class="sticky top-0 {scroll > 0
		? 'border-b'
		: ''} transition-all z-1 mx-auto [&>*]:px-4 flex w-full flex-wrap items-center justify-between bg-[#fbfbfb] z-1000"
>
	<a href="/">
		<img src="/avatar.jpg" class="w-8 rounded-full" alt="Homem caucasiano de cabelo crespo" />
	</a>
	<Nav />
</header>

<style>
</style>
