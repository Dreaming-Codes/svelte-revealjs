<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import type { PresentationOptions } from '$lib/types.js';

	const dispatch = createEventDispatcher<{ onInitialize: Reveal.Api }>();

	export let options: PresentationOptions;

	$: revealOptions= {
		...options,
		highlight: {
			...options.highlight,
			highlightOnLoad: false
		},
		// TODO: manually handle history to avoid causing problems to the svelte router for now we disable it
		hash: false,
		history: false,
	} as Reveal.Options;

	export let deck: Reveal.Api | null = null;

	onMount(() => {
		// create deck instance
		deck = new Reveal(revealOptions);

		// custom event listeners
		const inEvent = new CustomEvent('in');
		const outEvent = new CustomEvent('out');

		// keep track of current slide
		deck!.addEventListener('slidechanged', (event) => {
			if ('currentSlide' in event) {
				const currentSlideEl = event.currentSlide as HTMLElement;
				currentSlideEl.dispatchEvent(inEvent);
			}

			if ('previousSlide' in event) {
				const currentPreviousEl = event.previousSlide as HTMLElement;
				currentPreviousEl.dispatchEvent(outEvent);
			}
		});

		deck!.addEventListener('fragmentshown', (event) => {
			if ('fragment' in event) {
				const fragmentEl = event.fragment as HTMLElement;
				fragmentEl.dispatchEvent(inEvent);
			}
		});

		deck!.addEventListener('fragmenthidden', (event) => {
			if ('fragment' in event) {
				const fragmentEl = event.fragment as HTMLElement;
				fragmentEl.dispatchEvent(outEvent);
			}
		});

		deck!.initialize().then((api: Reveal.Api) => {

			dispatch('onInitialize', api);
			// we pass the language to the `<Code>` block
			// and higlight code blocks after initialization
			highlightCodeBlocks(deck!);
		});

		// reload page after update to avoid HMR issues
			reloadPageAfterUpdate();
	});

	function highlightCodeBlocks(deck: Reveal.Api) {
		const highlight = deck.getPlugin('highlight') as Reveal.Plugin & { highlightBlock: (el: HTMLElement) => void };
		const codeBlocks = [...document.querySelectorAll('code')];
		codeBlocks.forEach((block) => {
			highlight.highlightBlock(block);
		});
	}

	function reloadPageAfterUpdate() {
		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', () => {
				location.reload();
			});
		}
	}
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>
