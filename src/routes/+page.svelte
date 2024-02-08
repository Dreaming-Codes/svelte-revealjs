<script lang="ts">
	import Presentation from '../lib/components/presentation.svelte';
	import Slide from '../lib/components/slide.svelte';
	//import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
	import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
	//import RevealMath from 'reveal.js/plugin/math/math';
	import RevealNotes from 'reveal.js/plugin/notes/notes';
	import RevealSearch from 'reveal.js/plugin/search/search';
	//import RevealZoom from 'reveal.js/plugin/zoom/zoom';
	//import type { HLJSApi } from 'highlight.js';
	import type { PresentationOptions } from '$lib/types.js';

/*	function svelte(hljs: HLJSApi) {
		return {
			subLanguage: 'xml',
			contains: [
				hljs.COMMENT('<!--', '-->', {
					relevance: 10
				}),
				{
					begin: /^(\s*)(<script(\s*context="module")?>)/gm,
					end: /^(\s*)(<\/script>)/gm,
					subLanguage: 'javascript',
					excludeBegin: true,
					excludeEnd: true,
					contains: [
						{
							begin: /^(\s*)(\$:)/gm,
							end: /(\s*)/gm,
							className: 'keyword'
						}
					]
				},
				{
					begin: /^(\s*)(<style.*>)/gm,
					end: /^(\s*)(<\/style>)/gm,
					subLanguage: 'css',
					excludeBegin: true,
					excludeEnd: true
				},
				{
					begin: /\{/gm,
					end: /}/gm,
					subLanguage: 'javascript',
					contains: [
						{
							begin: /[{]/,
							end: /[}]/,
							skip: true
						},
						{
							begin: /([#:/@])(if|else|each|await|then|catch|debug|html)/gm,
							className: 'keyword',
							relevance: 10
						}
					]
				}
			]
		};
	}

	function registerLanguages(hljs: HLJSApi) {
		hljs.registerLanguage('svelte', svelte);
	}*/

	const revealjsOptions: PresentationOptions = {
		// presentation size respecting aspect ratio
		width: 960,
		height: 700,
		// content padding
		margin: 0.04,
		// smallest and largest possible scale
		minScale: 0.2,
		maxScale: 2.0,
		// plugins
		//TODO: Fix disabled plugins to work with ssr
		plugins: [RevealMarkdown, RevealNotes, RevealSearch/*, RevealZoom, RevealHighlight, RevealMath*/],
		// syntax highlight options
		highlight: {
			// add new languages
			//beforeHighlight: registerLanguages,
		},
		// slide controls
		controls: true,
		// slide progress bar
		progress: true,
		// slide transition
		transition: 'slide',
		// bring your own layout
		disableLayout: false,
		// display mode used to show slides
		display: 'block',
		// center slides on the screen
		center: true,
		// auto-animate duration
		autoAnimateDuration: 1,
		// auto-animate easing
		autoAnimateEasing: 'ease',
		// animate unmatched elements
		autoAnimateUnmatched: true,
		// hide cursor
		hideInactiveCursor: true,
		// time before cursor is hidden (ms)
		hideCursorTime: 5000
	};
</script>

<div>
	<Presentation options="{revealjsOptions}">
		<Slide>
			<h1>Slide 1</h1>
		</Slide>
		<Slide>
			<h1>Slide 2</h1>
		</Slide>
	</Presentation>
</div>
