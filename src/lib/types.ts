export type Frontmatter = {
	title: string;
	description: string;
	publishedOn: string;
	tags: string[];
};

export interface Post extends Frontmatter {
	slug: string;
}

export type Theme = 'dark' | 'light' | 'system';
