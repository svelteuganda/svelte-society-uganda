<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		href: string;
		name: string;
	}

	const { href, name }: Props = $props();
</script>

<a {href} aria-current={$page.url.pathname === href ? 'page' : 'false'}>{name}</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
		font-size: var(--fs-base);
		font-weight: var(--fw-bold);
		letter-spacing: 1px;

		@include utils.respond-to('lg-screens') {
			&:hover {
				color: var(--clr-accent-1);
			}
		}

		&[aria-current='page'] {
			color: var(--clr-accent-1);
		}
	}
</style>
