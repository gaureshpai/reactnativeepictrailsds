const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withNativeWind(withStorybook(defaultConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, "./.storybook"),
  useJs: true,
}),{ input: './global.css' });
