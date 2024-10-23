import type { Action } from 'svelte/action';

const detectClickOutside: Action = (node) => {
	const handleClick = (event: MouseEvent) => {
		const eventTarget = event.target as HTMLElement | null;

		if (eventTarget && !node.contains(eventTarget)) {
			node.dispatchEvent(new CustomEvent('clickOutside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export default detectClickOutside;
