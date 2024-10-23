<script lang="ts">
	import '../styles/index.scss';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/icons/remixicon.css" />
</svelte:head>

<header class="header">
	<a href="/" class="header__logo">
		<img src="/images/logo.png" alt="Svelte Society Uganda Logo" />
		<span>Svelte Society Uganda</span>
	</a>

	<nav class="header__nav">
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
		<a href="/about-us">About us</a>
		<a href="/events">Events</a>
	</nav>

	<button class="header__burger" aria-label="Open menu">
		<i class="ri-menu-line"></i>
	</button>
</header>

<div class="children">
	{@render children()}
</div>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&__logo {
			display: flex;
			align-items: center;
			gap: var(--spacing-sm);
			text-decoration: none;

			img {
				width: 56px;
				height: 56px;
			}
		}

		&__burger {
			line-height: 1;
			font-size: var(--fs-lg);
			padding: var(--spacing-sm);
		}
	}
</style>
