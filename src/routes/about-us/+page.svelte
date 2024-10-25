<script lang="ts">
	import { Seo } from '$lib/components';
</script>

<Seo title="About Us" description="" />

<main>
	<h1>About Us</h1>

	<section>
		<h2>Our vision</h2>
		<p>
			We envision a thriving, inclusive community where developers, designers, and enthusiasts come
			together to push the boundaries of what’s possible with Svelte. Our goal is to become a hub of
			collaboration, innovation, and knowledge-sharing, empowering individuals at all skill levels
			to make impactful contributions to the Svelte ecosystem.
		</p>

		<h3>We aim to:</h3>

		<ul>
			<li>
				<span>Collaborate on Open-Source Projects:</span> By working together, we will create and contribute
				to open-source tools, libraries, and applications that enhance the Svelte experience and support
				web development innovation.
			</li>

			<li>
				<span>Foster Learning and Skill Development:</span> Through workshops, tutorials, and mentorship,
				we will support each member’s journey from beginner to expert, advancing web development skills
				across Uganda.
			</li>

			<li>
				<span>Expand the Svelte Ecosystem:</span> As we contribute code, ideas, and feedback, we will
				help Svelte evolve to meet the needs of developers globally, building tools that make development
				faster, easier, and more enjoyable.
			</li>

			<li>
				<span>Build Lasting Connections:</span> By uniting Svelte enthusiasts from all backgrounds, we’ll
				create a welcoming environment where everyone feels empowered to share, collaborate, and grow
				together.
			</li>
		</ul>

		<p>
			Our vision is to lead a powerful movement within Uganda and beyond, where open-source
			collaboration and community spirit drive the future of web development with Svelte.
		</p>
	</section>

	<section>
		<h2>Meet the team</h2>
	</section>
</main>

<style lang="scss">
	main {
		min-height: calc(100vh - var(--header-height));

		@include utils.add-section-lr-padding();
	}
</style>
