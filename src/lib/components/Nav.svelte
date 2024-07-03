<script lang="ts">
	import Close from './ui/Close.svelte';
	import Hamburguer from './ui/Hamburguer.svelte';
	import NavLinks from './NavLinks.svelte';
	import { browser } from '$app/environment';
</script>

<nav class="py-4 h-[60px]">
	<ul class="flex items-center divide-neutral-300 gap-8 transition-all">
		<NavLinks />
	</ul>
</nav>
