<p align="center">
    <a href="https://monsieurbiz.com" target="_blank">
        <img src="https://monsieurbiz.com/logo.png" width="250px" alt="Monsieur Biz logo" />
    </a>
</p>

<h1 align="center">Bricks frontend framework</h1>

[![Bricks framework license](https://img.shields.io/github/license/monsieurbiz/bricks-framework?public)](https://github.com/monsieurbiz/bricks-framework/blob/master/LICENSE)
[![GitHub Super-Linter](https://github.com/monsieurbiz/bricks-framework/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/monsieurbiz/bricks-framework/actions?query=workflow%3A%22Lint+Code+Base%22)

Bricks is a frontend framework to build awesome interfaces for your next e-commerce project. It is currently used at [Monsieur Biz](https://monsieurbiz.com/) to build our projects.

[Storybook](https://storybook.js.org/) is used to present the documentation and components. You can visualize it at [monsieurbiz.com/bricks-framework](https://monsieurbiz.com/bricks-framework/)

![Storybook canvas and corresponding css code of a component](https://user-images.githubusercontent.com/713839/102231177-f98ef900-3eed-11eb-8969-88d643df4f79.png)

## Installation

Use the following commands to visualize locally:

```shell
npm install
npm run storybook
```

## How it works

Very basic right now, it will evolve continuously. The main philosophy of the framework is to offer a mixed approach between [BEM](http://getbem.com/) and a utility-first framework like [Tailwindcss](https://tailwindcss.com/). The goal is to offer a rich variety of full featured components and the efficiency of the utility classes.

### Styles

[Sass](https://sass-lang.com/) is used to write the styles.

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
