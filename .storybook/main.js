module.exports = {
  stories: ['../stories/**/*.stories.@(ts|js|mdx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@whitespace/storybook-addon-html/html',
  ],
}
