import type Reveal, { type HighlightConfig } from 'reveal.js';

// Define a type that modifies `highlight` within `Reveal.Options` and removes specified properties that are incompatible svelte and so handled separately
type PresentationOptions = Omit<Reveal.Options, 'highlight' | 'history' | 'hash'> & {
	highlight?: Omit<HighlightConfig, 'excapeHTML' | 'highlightOnLoad'>
};
