<script lang="ts">
	type Projects = {
		href: string;
		name: string;
		img: string;
	};

	const projects: Projects[] = [
		{
			href: 'https://video-player-rouge-eight.vercel.app/',
			name: 'Video Player with Svelte',
			img: 'videoplayer.png'
		},
		{
			href: 'https://pedroferreira37.github.io/snake-game/',
			name: 'Snake Game',
			img: 'snake.png'
		},
		{
			href: 'https://pedroferreira37.github.io/pong-game/',
			name: 'Pong Game',
			img: 'pong.png'
		}
	];
</script>

<main class="layout [&>*]:col-start-2 p-4">
	<section class="mt-[12vh] flex flex-wrap gap-4">
		{#each projects as project}
			<a class="underline w-full" target="_blank" href={project.href}
				>{project.name}
				<div class="bg-white border mt-2 p-4 rounded mb-4">
					<img
						src="/{project.img}"
						alt={project.name}
						class="w-full h-[400px] object-contain"
					/>
				</div>
			</a>
		{/each}
	</section>
</main>
