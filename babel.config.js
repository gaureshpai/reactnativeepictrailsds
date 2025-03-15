module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel']
    ],
    // Add an override for node_modules
    overrides: [
      {
        test: /node_modules\/expo/,
        plugins: [] // No plugins for node_modules/expo
      }
    ]
  };
};