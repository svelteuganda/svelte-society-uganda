<script lang="ts">
	import type { PageData } from './$types';

	import { Seo } from '$lib/components';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts } = data;
</script>

<Seo title="Blog" description="" />

<main>
	<h1>Blog</h1>

	<section>
		<div>
			{#each posts as post}
				<a href="/blog/{post.slug}">
					<article>
						<h3>{post.title}</h3>
					</article>
				</a>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		min-height: calc(100vh - var(--header-height));
	}
</style>
