/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from 'unist-util-visit';

export default function rehypeCopyCode() {
	function codeTitle(node: any) {
		if (node.tagName === 'div') {
			return node.properties.className[0] === 'rehype-code-title';
		}
	}

	return (tree: any) => {
		visit(tree, codeTitle, (node) => {
			if (node.type !== 'element') return;

			const value = node.children[0].type === 'text' ? node.children[0].value : '';

			node.children = [
				{
					type: 'element',
					tagName: 'span',
					children: [{ type: 'text', value }]
				},
				{
					type: 'element',
					tagName: 'button',
					properties: { className: ['copy'] },
					children: [{ type: 'text', value: `Copy` }]
				}
			];
		});
	};
}
