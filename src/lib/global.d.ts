declare namespace svelteHTML {
	interface HTMLAttributes {
		'on:in'?: (event: CustomEvent) => void
		'on:out'?: (event: CustomEvent) => void
	}
}
