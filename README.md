<p align="center">
    <a href="https://monsieurbiz.com" target="_blank">
        <img src="https://monsieurbiz.com/logo.png" width="250px" alt="Monsieur Biz logo" />
    </a>
</p>

<h1 align="center">Bricks frontend framework</h1>

[![Bricks framework license](https://img.shields.io/github/license/monsieurbiz/bricks-framework?public)](https://github.com/monsieurbiz/bricks-framework/blob/master/LICENSE)
[![GitHub Super-Linter](https://github.com/monsieurbiz/bricks-framework/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/monsieurbiz/bricks-framework/actions?query=workflow%3A%22Lint+Code+Base%22)

Bricks is a frontend framework providing good complementarity between components and utility classes. It's currently used at [Monsieur Biz](https://monsieurbiz.com/) to build our projects.

## Build locally

Use the following commands to build locally:

```shell
npm install
npm run buildSass
```

You can also watch for changes with this command:

```shell
npm run watchSass
```

## How it works

Very basic right now, it will evolve continuously. The main philosophy of the framework is to offer a mixed approach between [BEM](http://getbem.com/) and a utility-first framework like [Tailwindcss](https://tailwindcss.com/). The goal is to offer a rich variety of full featured components and the efficiency of the utility classes.

### Styles

The styles in this framework take advantage of [Sass](https://sass-lang.com/) and [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

#### Architecture

- `settings`: Global variables, project-wide settings, etc.
- `tools`: Project-wide mixins, functions and placeholders.
- `elements`: Low-specificity, far-reaching rulesets and unclassed HTML elements.
- `objects`: Objects, abstractions, and design patterns.
- `components`: Complete chunks of UI.
- `utilities`: High-specificity, very explicit selectors.

## Contributing

From the core to the documentation, you're very welcome to contribute by opening an issue or a Pull Request if you want! 😘
Thank you!

## License

This framework is completely free and released under the [MIT License](https://github.com/monsieurbiz/bricks-framework/blob/master/LICENSE).
