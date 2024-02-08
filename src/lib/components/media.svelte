<script lang="ts">
	export let type: 'video' | 'img' | 'iframe'
	export let src: string
	export let autoplay: boolean | null = null
	export let preload: boolean | null = null

	delete $$restProps.class
</script>

<svelte:element
	this={type}
	data-src={src}
	data-autoplay={autoplay}
	data-prelod={preload}
	class={$$props.class || ''}
	{...$$restProps}
>
	<slot />
</svelte:element>
