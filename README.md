# Svelte Reveal.js

This is a collection of Svelte components that can be used to create presentations using Reveal.js.
A lot of component are straight up copied from [Animotion.js](https://github.com/animotionjs/animotion) and adapted to be used as a library for Svelte without needing to use their template.

## Example
You can see an example code in the `src/routes` folder.

## Developing
This project uses Bun instead of Node.js. To start developing, install bun first.
```bash
bun install
bun run dev
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
bun run package
```
## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

## Aknowledgements
- [svelte-reveal.js](https://github.com/Ennoriel/svelte-reveal.js) This is a library that does basically the same thing, but has fewer features and I don't like the way it's implemented. I'm using it as a reference for some things.
- [Animotion.js](https://github.com/animotionjs/animotion) The majority of the components are copied from this library and adapted to be used as a Svelte library and give the user more control over the components.
