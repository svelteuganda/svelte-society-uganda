<script lang="ts">
	import '../styles/index.scss';

	import { navigating } from '$app/stores';

	import NavLink from './NavLink.svelte';
	import { afterNavigate } from '$app/navigation';

	const { children } = $props();

	let openNav = $state(false);

	afterNavigate(() => {
		openNav = false;
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/icons/remixicon.css" />
</svelte:head>

{#snippet socialLinks()}
	<ul class="social-links">
		<li>
			<a href="https://x.com/SvelteUganda" aria-label="Follow us on X">
				<i class="ri-twitter-x-fill"></i>
			</a>
		</li>

		<li>
			<a href="https://github.com/svelteuganda" aria-label="Follow us on Github">
				<i class="ri-github-fill"></i>
			</a>
		</li>

		<li>
			<a
				href="https://chat.whatsapp.com/F2E9Ge3rAcT6JAX32i15LL"
				aria-label="Join our WhatsApp group"
			>
				<i class="ri-whatsapp-fill"></i>
			</a>
		</li>
	</ul>
{/snippet}

{#if $navigating}
	<div class="loader"></div>
{/if}

<header class="header">
	<a href="/" class="header__logo">
		<img src="/images/logo.png" alt="Svelte Society Uganda Logo" />
		<p>
			<span>Svelte Society</span>
			<span>Uganda</span>
		</p>
	</a>

	<nav class="header__nav" class:open={openNav}>
		<NavLink href="/" name="Home" />
		<NavLink href="/blog" name="Blog" />
		<NavLink href="/showcase" name="Showcase" />
		<NavLink href="/about-us" name="About us" />
		<NavLink href="/events" name="Events" />

		<ul class="social-links">
			<li>
				<a href="https://x.com/SvelteUganda" aria-label="Follow us on X" target="_blank">
					<i class="ri-twitter-x-fill"></i>
				</a>
			</li>

			<li>
				<a href="https://github.com/svelteuganda" aria-label="Follow us on Github" target="_blank">
					<i class="ri-github-fill"></i>
				</a>
			</li>

			<li>
				<a
					href="https://chat.whatsapp.com/F2E9Ge3rAcT6JAX32i15LL"
					aria-label="Join our WhatsApp group"
					target="_blank"
				>
					<i class="ri-whatsapp-fill"></i>
				</a>
			</li>
		</ul>
	</nav>

	<ul class="header__social-links">
		<li>
			<a href="https://x.com/SvelteUganda" aria-label="Follow us on X" target="_blank">
				<i class="ri-twitter-x-fill"></i>
			</a>
		</li>

		<li>
			<a href="https://github.com/svelteuganda" aria-label="Follow us on Github" target="_blank">
				<i class="ri-github-fill"></i>
			</a>
		</li>

		<li>
			<a
				href="https://chat.whatsapp.com/F2E9Ge3rAcT6JAX32i15LL"
				aria-label="Join our WhatsApp group"
				target="_blank"
			>
				<i class="ri-whatsapp-fill"></i>
			</a>
		</li>
	</ul>

	<button class="header__burger" aria-label="Open menu" onclick={() => (openNav = !openNav)}>
		{#if openNav}
			<i class="ri-close-fill"></i>
		{:else}
			<i class="ri-menu-line"></i>
		{/if}
	</button>
</header>

<div class="children">
	{@render children()}
</div>

<footer class="footer">
	<p class="copyright">
		&copy; {new Date().getFullYear()} Svelte Society Uganda. All rights reserved.
	</p>
</footer>

<style lang="scss">
	.loader {
		position: fixed;
		top: 0;
		z-index: utils.z('max');
		height: 3px;
		width: 0vw;
		background-color: var(--clr-accent-1);
		animation: loading 5s;

		@keyframes loading {
			0% {
				width: 0vw;
			}
			25% {
				width: 25vw;
			}
			50% {
				width: 50vw;
			}
			75% {
				width: 75vw;
			}
			100% {
				width: 100vw;
			}
		}
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
		background-color: var(--clr-bg-secondary);
		@include utils.add-section-lr-padding();

		&__logo {
			display: flex;
			align-items: center;
			gap: var(--spacing-sm);
			text-decoration: none;

			img {
				width: 56px;
				height: 56px;
			}

			p {
				font-weight: var(--fw-bold);
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				line-height: 1;
				gap: var(--spacing-xs);
			}
		}

		&__nav {
			display: flex;
			gap: var(--spacing-lg);
			position: absolute;
			top: var(--header-height);
			left: 0;
			right: 0;
			z-index: z('nav');
			visibility: hidden;
			opacity: 0;
			transform: translate(10px, -10px);
			pointer-events: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			background-color: inherit;
			color: inherit;
			width: 100vw;
			height: fit-content;
			overflow: hidden;
			padding: {
				top: var(--spacing-md);
				bottom: var(--spacing-md);
			}
			@include utils.add-section-lr-padding();

			@include utils.respond-to('lg-screens') {
				position: static;
				flex-direction: row;
				visibility: visible;
				transform: none;
				pointer-events: all;
				opacity: 1;
				width: fit-content;
				height: fit-content;
				border: none;
				gap: var(--spacing-xl);
				padding: 0;
			}

			&.open {
				visibility: visible;
				opacity: 1;
				pointer-events: all;
				transform: none;
				transition: all 0.4s cubic-bezier(0.085, 1.735, 0.285, 0.995);
			}

			.social-links {
				display: flex;
				align-items: center;
				gap: var(--spacing-sm);

				@include utils.respond-to('lg-screens') {
					display: none;
				}

				li {
					list-style: none;
					margin-left: 0;
					a {
						padding: var(--spacing-sm);
						line-height: 1;
						text-decoration: none;
						font-size: var(--fs-lg);

						&:hover {
							color: var(--clr-accent-1);
						}
					}
				}
			}
		}

		&__social-links {
			display: none;
			align-items: center;
			gap: var(--spacing-sm);

			@include utils.respond-to('lg-screens') {
				display: flex;
			}

			li {
				list-style: none;
				margin-left: 0;
				a {
					padding: var(--spacing-sm);
					line-height: 1;
					text-decoration: none;
					font-size: var(--fs-lg);

					&:hover {
						color: var(--clr-accent-1);
					}
				}
			}
		}

		&__burger {
			line-height: 1;
			font-size: var(--fs-lg);
			padding: var(--spacing-md);
			display: block;

			@include utils.respond-to('lg-screens') {
				display: none;
			}
		}
	}

	.footer {
		background-color: var(--clr-bg-secondary);
		color: var(--clr-txt-primary-on-bg-secondary);
		padding: var(--spacing-md) 0;

		.copyright {
			font-size: var(--fs-sm);
			text-align: center;
			margin: 0;
		}
	}
</style>
