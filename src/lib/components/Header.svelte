<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Nav from './Nav.svelte';

	let scroll: number = 0;

	function onscroll() {
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
		: 'border-none'} px-4 transition-all layout [&>*]:col-start-2 z-1 mx-auto bg-[#fbfbfb] z-1000"
>
	<div class="layout [&>*]:col-start-2 w-full">
		<div class="flex justify-between items-center">
			<a href="/">
				<img
					src="/avatar.jpg"
					class="w-8 rounded-full"
					alt="Homem caucasiano de cabelo crespo"
				/>
			</a>
			<Nav />
		</div>
	</div>
</header>

<style>
</style>
