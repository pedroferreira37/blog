<script lang="ts">
	import Close from './ui/Close.svelte';
	import Hamburguer from './ui/Hamburguer.svelte';
	import NavLinks from './NavLinks.svelte';

	let open = false;
</script>

<nav class="py-4 h-[60px]">
	<ul class="hidden sm:flex items-center divide-neutral-300 gap-8 transition-all">
		<NavLinks />
	</ul>

	<div>
		<button class="sm:hidden" on:click={() => (open = !open)}>
			{#if open}
				<Close />
			{:else}
				<Hamburguer />
			{/if}
		</button>
	</div>
</nav>
{#if open}
	<ul
		class="sm:hidden bg-[#fbfbfb] basis-full border-t pt-4 flex-col space-y-2 [&>*]:py-2 divide-neutral-300 gap-8 items-center pb-4 w-full h-[calc(100vh_-_60px)]"
	>
		<NavLinks />
	</ul>
{/if}
