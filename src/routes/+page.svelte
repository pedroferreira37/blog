<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Post } from '$lib/type';
	import Posts from '$lib/components/Posts.svelte';

	export let data: Record<'posts', Post[]>;
</script>

<Intersection>
	<Header slot="header" />

	<section
		slot="content"
		class="layout [&>*]:col-start-2 px-4 mt-[22vh] [&>h2]:font-bold [&>h2]:text-xl md:[&>h2]:text-base [&>p]:text-base md:[&>p]:text-sm"
	>
		<img src="/avatar.jpg" class="w-12 rounded my-4" alt="Homem caucasiano de cabelo crespo" />
		<h2 class="text-slate-900">Pedro Ferreira</h2>
		<p class="text-neutral-800">Desenvolvedor de Software</p>
		<p class="mt-[1rem] text-neutral-900 mb-14">
			Sou um desenvolvedor de software apaixonado pela web. Aqui compartilho o meu
			conhecimento e aprendizados durante minha jornada de me tornar um desenvolvedor melhor.
		</p>
		<ul
			class="flex flex-col sm:items-center sm:flex-row sm:gap-8 gap-4 [&>li]:py-1 sm:[&>li]:py-0 sm:space-y-0 divide-neutral-300 [&>*]:sm:text-sm [&>*]:text-base"
		>
			<li>
				<a href="/blog" class="block underline rounded transition-all">Blog</a>
			</li>

			<li>
				<a href="/projects" class="block underline rounded transition-all">Projetos</a>
			</li>
		</ul>
	</section>
</Intersection>

<main class="layout [&>*]:col-start-2 md:px-0 [&>*]:font-sans px-4">
	<section class="pt-[calc(22vh_-_4rem)]">
		{#each data.posts as post}
			<Posts
				name={post.slug}
				title={post.title}
				description={post.description}
				date={post.date}
			/>
		{/each}
	</section>
</main>
