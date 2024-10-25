<script lang="ts">
	import type { PageData } from './$types';

	import { Seo, PostCard } from '$lib/components';

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
		<div class="posts-container">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		min-height: calc(100vh - var(--header-height));

		section {
			@include utils.add-section-lr-padding();

			.posts-container {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-sm);
			}
		}
	}
</style>
