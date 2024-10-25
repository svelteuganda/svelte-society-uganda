<script lang="ts">
	import { page } from '$app/stores';

	let siteUrl = `${$page.url.protocol}//${$page.url.hostname}:${$page.url.port ?? ''}`;
	let siteName = 'Svelte Society Uganda';

	interface Props {
		title: string;
		description: string;
		ogImage?: string;
		ogImageAlt?: string;
	}

	let {
		title,
		description,
		ogImage = '/images/default-og-image.png',
		ogImageAlt = 'Svelte Society Uganda'
	}: Props = $props();
</script>

<svelte:head>
	<title>{title} | Svelte Society Uganda</title>
	<meta name="description" content={description} />
	<meta name="image" content={new URL(ogImage, siteUrl).toString()} />
	<link rel="canonical" href={new URL($page.url.pathname, siteUrl).toString()} />
	<!-- twitter card -->
	<meta property="twitter:url" content={new URL($page.url.pathname, siteUrl).toString()} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@twitter" />
	<meta name="twitter:creator" content="@twitter" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={new URL(ogImage, siteUrl).toString()} />
	<meta name="twitter:image:alt" content={ogImageAlt} />
	<!-- open graph tags -->
	<meta property="og:url" content={new URL($page.url.pathname, siteUrl).toString()} />
	<meta name="og:locale" content="en" />
	<meta name="og:type" content="website" />
	<meta name="og:site_name" content={siteName} />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:image:url" content={new URL(ogImage, siteUrl).toString()} />
	<meta name="og:image:alt" content={ogImageAlt} />
	<!-- schema.org -->
</svelte:head>
