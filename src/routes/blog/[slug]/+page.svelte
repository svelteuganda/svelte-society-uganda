<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { html, frontmatter } = data;
</script>

<main>
	<h1>{frontmatter.title}</h1>

	<section class="content">
		{@html html}
	</section>
</main>

<style lang="scss">
	main {
		.thumbnail {
			height: 100%;
		}

		.content {
			width: 50vw;
			margin: 0 auto;
		}
	}
</style>
