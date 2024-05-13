<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib';
	import Share from '$lib/components/Share.svelte';
	import ArrowLeft from '$lib/components/ui/ArrowLeft.svelte';

	export let data;

	console.log(data.content);
	const inShareUrl = new URL('https://www.linkedin.com/sharing/share-offsite');
	inShareUrl.searchParams.set('url', $page.url.toString());

	const twitterShareUrl = new URL('https://twitter.com/intent/tweet');
	twitterShareUrl.searchParams.set('text', data.meta.title);
	twitterShareUrl.searchParams.set('url', $page.url.toString());
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:description" content={data.meta.description} />
	<script src="https://platform.linkedin.com/in.js" type="text/javascript">
	</script>
	<script type="IN/Share" data-url="https://www.linkedin.com"></script>
</svelte:head>

<div class="mt-[12vh]">
	<article
		class="layout

	[&>*]:[&>h2]:capitalize
	[&>h2]:text-lg
	[&>h2]:font-bold
	sm:px-0
	px-8
	"
	>
		<div class="px-0 md:px-12 space-y-2 col-start-2 md:col-start-1 flex items-start mt-2">
			<a
				href="/blog"
				class="text-base md:text-sm md:border-none border font-bold md:font-normal hover:bg-neutral-100 md:hover:bg-transparent md:p-0 py-2 px-4 flex items-center gap-4 md:text-neutral-500 md:hover:text-neutral-800 rounded md:mb-0 mb-8 transition-all"
			>
				<ArrowLeft />
				All posts
			</a>
		</div>

		<hgroup class="mb-[6vh] col-start-2">
			<h1 class="capitalize text-[32px] font-bold">{data.meta.title}</h1>
			<span class="text-sm">{formatDate(data.meta.date)}</span>
		</hgroup>

		<div class="col-start-2 md:col-start-1 mb-8 md:px-12">
			<Share
				inShareUrl={inShareUrl.toString()}
				twitterShareUrl={twitterShareUrl.toString()}
			/>
		</div>

		<div class="col-start-2">
			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</div>

		<div class="col-start-2 mb-8">
			<Share
				inShareUrl={inShareUrl.toString()}
				twitterShareUrl={twitterShareUrl.toString()}
			/>
		</div>
	</article>
</div>
