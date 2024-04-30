<script lang="ts">
	import Post from '$lib/components/Posts.svelte';

	export let data: Record<'posts', Post[]>;
</script>

<main class="layout [&>*]:col-start-2 mt-[12vh] px-4">
	{#each data.posts as post}
		<Post name={post.slug} title={post.title} description={post.description} date={post.date} />
	{/each}
</main>
