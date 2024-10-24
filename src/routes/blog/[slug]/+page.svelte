<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { html, frontmatter } = data;
</script>

<main>
	<section class="content">
		<h1>{frontmatter.title}</h1>
		{@html html}
	</section>
</main>

<style lang="scss">
	main {
		margin: var(--spacing-lg) 0;
		.content {
			@include utils.add-section-lr-padding();

			h1 {
				font-size: var(--fs-2xl);
			}

			@include utils.respond-to('lg-screens') {
				width: 50vw;
				margin: 0 auto;
				padding: 0;
			}
		}
	}
</style>
