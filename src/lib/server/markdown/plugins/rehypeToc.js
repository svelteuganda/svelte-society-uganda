/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import toc from '@jsdevtools/rehype-toc';

export default function rehypeToc() {
	return toc({
		headings: ['h2', 'h3'],
		position: 'beforeend',
		customizeTOC: function (toc) {
			const tocHeading = {
				type: 'element',
				tagName: 'h2',
				properties: { className: 'toc__heading', id: 'toc-heading' },
				children: [{ type: 'text', value: 'Table of contents' }]
			};
			toc.properties.ariaLabelledby = 'toc-heading';
			toc.children.unshift(tocHeading);
			const aside = {
				type: 'element',
				tagName: 'aside',
				properties: { className: 'left-sidebar' },
				children: [toc]
			};
			return aside;
		}
	});
}
