---
title: Introduction to svelte 5
description: An introduction to svelte 5
thumbnailUrl: /images/posts/introduction-to-svelte-5/thumbnail.png
publishedOn: 2024-04-22
tags:
  - svelte
---

# Introduction to svelte 5

## What changed

### Syntax

{% file "+page.svelte" %}

```svelte
<script>
	let count = 0;
</script>

<main>
	<button on:click={() => count++}>Count is {count}</button>
</main>

<style>
	button {
		color: red;
	}
</style>
```
