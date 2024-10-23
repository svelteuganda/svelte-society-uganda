// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export default function () {
	return function (tree, file) {
		const textOnPage = toString(tree);
		const readingTimeText = getReadingTime(textOnPage).text;
		file.data.fm.readingTime = readingTimeText;
	};
}
