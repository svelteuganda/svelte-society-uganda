---
title: Hello World
description: This is my first blog post
thumbnailUrl: /images/posts/hello-world/thumbnail.png
publishedOn: 2024-04-21
tags:
  - html
  - sveltekit
  - typescript
  - angular
---

## Learn Javascript

Lacus iaculis erat vestibulum mattis convallis cursus. Tristique turpis nam natoque ullamcorper imperdiet. Ornare ultrices tellus primis vehicula mauris turpis sem urna. Netus quam elementum volutpat platea risus. Inceptos diam volutpat ornare torquent tellus mus. Ultricies erat ante dis vulputate ipsum leo ante praesent. Aptent massa pulvinar posuere; donec a risus maximus non consequat. Ultricies at amet facilisis lectus neque fames aenean eros. Feugiat est laoreet dignissim tempor diam dapibus netus odio. Donec enim primis luctus suscipit montes risus fringilla.

{% file "src/lib/main.js" %}

```javascript
import { data } from '$app/stores';

console.log(data);
```

## Learn Svelte

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% file "terminal" %}

```shell
pnpm create svelte@latest helloworld
```

{% file "+page.svelte" %}

```svelte
<script type="ts">
	let count = 0;
</script>

<button on:click={() => count++}>Count is {count}</button>
```

## Learn Typescript

Tortor euismod molestie condimentum tempus penatibus facilisi. Netus consequat est a vestibulum facilisi phasellus. Porta sociosqu quam imperdiet nisl id sollicitudin. Cubilia felis nisi sit est eu dolor gravida himenaeos. Amet placerat tellus semper molestie hac nullam ligula nunc imperdiet. Ligula pellentesque lacus nascetur pretium dolor habitant ac iaculis. Donec est morbi commodo morbi porta hac neque, himenaeos eget. Adipiscing magnis commodo aliquam scelerisque risus nam. Neque praesent tincidunt finibus pulvinar magna fusce dictum iaculis. Duis per ullamcorper inceptos ullamcorper suscipit tristique.

{% file "main.ts" %}

```typescript
import type { PageLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageLoad;
```

### Variables

Habitant libero maximus netus consectetur conubia primis. Risus porttitor sodales tincidunt lobortis dolor quam? Mauris vehicula taciti rutrum faucibus parturient volutpat commodo. Non cursus mattis faucibus finibus vel enim posuere fermentum. Ridiculus hac dictum class commodo sociosqu faucibus cubilia volutpat. Lorem quam luctus neque dis ut. Varius suscipit adipiscing per platea luctus euismod venenatis vestibulum magnis.
