import type { LayoutServerLoad } from './$types';

import { getBlogPosts } from '$lib/server/markdown/utils';

export const load = (async () => {
	const posts = await getBlogPosts();

	return { posts };
}) satisfies LayoutServerLoad;

export const prerender = true;
