import path from 'path';

import type { Theme } from '$lib/types';

export const postDirPath = path.join(process.cwd(), '/content/posts');
export const defaultTheme: Theme = 'system';
