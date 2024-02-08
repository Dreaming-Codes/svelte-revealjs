<script lang="ts">
	export let id = 'code-animation';
	export let lines: string | boolean | null = true;
	export let offset: string | null = null;
	export let lang: string | null = null;

	delete $$restProps.class;
</script>

<pre data-id={id} class={$$props.class || ''} {...$$restProps}>
  <code
		data-trim
		data-line-numbers={lines || null}
		data-ln-start-from={offset}
		class="language-{lang}">
<slot />
  </code>
</pre>
