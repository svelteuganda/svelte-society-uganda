<script lang="ts">
	import type { Post } from '$lib/types';

	interface Props {
		post: Post;
	}

	const { post }: Props = $props();

	const publishedOn = new Date(post.publishedOn);

	const publicationDate = publishedOn.getDate();
	const publicationMonth = publishedOn.toLocaleDateString('en-US', {
		month: 'short'
	});
	const publicationYear = publishedOn.getFullYear();
</script>

<a href="/blog/{post.slug}">
	<article class="post">
		<div class="post__published-on">
			<p>{publicationDate}</p>
			<p>{publicationMonth} {publicationYear}</p>
			<p></p>
		</div>
		<div class="post__details">
			<h3 class="title">{post.title}</h3>
			<p class="description">{post.description}</p>
		</div>
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.post {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		background-color: var(--clr-bg-secondary);
		border-radius: var(--radius-xxs);
		padding: var(--spacing-sm);
		box-shadow: var(--shadow-sm);

		&__published-on {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-xs);

			p {
				margin: 0;
				text-transform: uppercase;

				&:nth-child(1) {
					font-size: var(--fs-2xl);
					font-weight: var(--fw-bold);
					line-height: 1;
				}

				&:nth-child(2) {
					font-size: var(--fs-sm);
					font-weight: var(--fw-bold);
					line-height: 1;
				}
			}
		}

		&__details {
			.title {
				margin: 0;
				color: var(--clr-accent-1);
			}

			.description {
				margin: 0;
			}
		}
	}
</style>
