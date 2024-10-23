import path from 'path';

import fs from 'fs-extra';

import grayMatter from 'gray-matter';

import type { Post, Frontmatter } from '$lib/types';

export default async () => {
	try {
		const postDirPath = path.join(process.cwd(), '/content/posts');
		const markdownFiles = (await fs.readdir(postDirPath)).filter((fileName) => {
			return fileName.endsWith('.md');
		});

		let posts: Post[] = [];

		for (const markdownFile of markdownFiles) {
			const file = await fs.readFile(`${postDirPath}/${markdownFile}`, 'utf-8');

			const { data } = grayMatter(file);

			posts.push({
				slug: markdownFile.slice(0, -3),
				...(data as Frontmatter)
			});
		}

		posts = posts.sort((firstItem, secondItem) => {
			return new Date(secondItem.publishedOn).getTime() - new Date(firstItem.publishedOn).getTime();
		});

		return posts;
	} catch (err) {
		throw Error('Failed to get blog posts');
	}
};
