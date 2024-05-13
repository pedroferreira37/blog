<script lang="ts">
	type Projects = {
		href: string;
		name: string;
	};

	const projects: Projects[] = [
		{
			href: 'https://video-player-rouge-eight.vercel.app/',
			name: 'Video Player with Svelte'
		},
		{
			href: 'https://github.com/pedroferreira37/go-interpreter',
			name: 'Go Interpreter'
		}
	];
</script>

<main class="layout [&>*]:col-start-2">
	<section class="mt-[12vh] flex flex-col gap-4">
		{#each projects as project}
			<a class="underline" target="_blank" href={project.href}>{`{${project.name}}`}</a>
		{/each}
	</section>
</main>
