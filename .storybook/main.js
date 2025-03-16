/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)",],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-react-native-web',
  ], 
  actions: { argTypesRegex: "^on[A-Z].*" },
  framework: {
    name: "@storybook/react-native",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
