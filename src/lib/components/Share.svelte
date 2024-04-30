<script lang="ts">
	import Linkedin from './ui/Linkedin.svelte';
	import Twitter from './ui/Twitter.svelte';

	export let twitterShareUrl: string;
	export let inShareUrl: string;
</script>

<div
	class="after:content-[''] after:w-8 after:h-[0.5px] after:my-4 after:bg-neutral-400 after:block

		md:after:hidden"
>
	<span class="uppercase text-sm text-neutral-400">Compartilhe</span>
	<ul class="flex gap-4">
		<li class="hover:bg-neutral-200 rounded transition-all group">
			<a href={inShareUrl} target="_blank" class="block p-2">
				<Linkedin />
			</a>
		</li>
		<li class="hover:bg-neutral-200 rounded transition-all group">
			<a href={twitterShareUrl.toString()} target="_blank" class="block p-2">
				<Twitter />
			</a>
		</li>
	</ul>
</div>
