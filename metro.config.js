<<<<<<< HEAD
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");
const { withNativeWind } = require('nativewind/metro');
=======
 //metro.config.js
>>>>>>> 1fd7358573086d9e7fe66f04094d4d79b6dbd111

 const path = require('path');
 const { getDefaultConfig } = require('expo/metro-config');

<<<<<<< HEAD
module.exports = withNativeWind(withStorybook(defaultConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, "./.storybook"),
  useJs: true,
}),{ input: './global.css' });
=======
 const { generate } = require('@storybook/react-native/scripts/generate');

 generate({
   configPath: path.resolve(__dirname, './.storybook'),
 });

 /** @type {import('expo/metro-config').MetroConfig} */
 const config = getDefaultConfig(__dirname);

 config.transformer.unstable_allowRequireContext = true;

 config.resolver.sourceExts.push('mjs');

 module.exports = config;
>>>>>>> 1fd7358573086d9e7fe66f04094d4d79b6dbd111
