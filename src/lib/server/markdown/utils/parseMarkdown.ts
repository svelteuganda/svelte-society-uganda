import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import grayMatter from 'gray-matter';

import { rehypeToc, rehypeCopyCode } from '$lib/server/markdown/plugins';

function searchAndReplace(markdown: string): string {
	const pattern = /{%\s*file\s*"([^"]+)"\s*%}/g;

	const replacedMarkdown = markdown.replace(pattern, (_, file) => {
		return `<div class="code-header">
              <span class="code-header__filename">${file}</span>
            </div>
            `.trim();
	});

	return replacedMarkdown;
}

export default async <F>(markdown: string) => {
	const { data, content } = grayMatter(markdown);

	const file = await unified()
		.use(remarkGfm)
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeShiki, {
			theme: 'github-dark-dimmed'
		})
		.use(rehypeStringify, { allowDangerousHtml: true })
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, { behavior: 'append' })
		.use(rehypeToc)
		.use(rehypeCopyCode)
		.process(searchAndReplace(content));

	const html = file.toString();
	const frontmatter = data as F;

	return { html, frontmatter };
};
