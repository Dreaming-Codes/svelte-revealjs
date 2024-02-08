<script lang="ts">
	import type Reveal from 'reveal.js';

	export let animate: boolean | null = null
	export let animateEasing: string | null = null
	export let animateUnmatched: boolean | null = null
	export let animateId: string | null = null
	export let animateRestart: boolean | null = null
	export let background: string | null = null
	export let gradient: string | null = null
	export let image: string | null = null
	export let video: string | null = null
	export let iframe: string | null = null
	export let interactive: boolean | null = null
	export let transition: Reveal.Options['transition'] | null = null

	delete $$restProps.class
</script>

<section
	on:in
	on:out
	data-auto-animate={animate}
	data-auto-animate-easing={animateEasing}
	data-auto-animate-unmatched={animateUnmatched}
	data-auto-animate-id={animateId}
	data-auto-animate-restart={animateRestart}
	data-background-color={background}
	data-background-gradient={gradient}
	data-background-image={image}
	data-background-video={video}
	data-background-iframe={iframe}
	data-background-interactive={interactive}
	data-transition={transition}
	class={$$props.class || ''}
	{...$$restProps}
>
	<slot />
</section>
