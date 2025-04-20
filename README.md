# React Native Epic Trails Design System

[![License](https://img.shields.io/npm/l/reactnativeepictrailsds.svg)](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Version](https://img.shields.io/npm/v/reactnativeepictrailsds.svg)](https://www.npmjs.com/package/reactnativeepictrailsds)

A flexible and customizable design system for React Native, providing pre-built UI components, typography, and themes to enhance mobile app development with a focus on outdoor and adventure applications.

> ✅ **This package is stable and ready for use in production.**

## Installation

```bash
npm install reactnativeepictrailsds
# or
yarn add reactnativeepictrailsds
```
## Getting Started

```tsx
import React from 'react';
import { View } from 'react-native';
import RectButton from 'reactnativeepictrailsds/src/components/Button/RectButton';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RectButton 
        label="Start Exploring"
        size="large"
        variant="primary"
        state="default"
      />
    </View>
  );
}
```

### Available Props

| Prop       | Type                        | Default     | Description                                         |
|------------|-----------------------------|-------------|-----------------------------------------------------|
| `label`    | `string`                    | `"Button"`  | Text displayed inside the button                    |
| `size`     | `"small"` \| `"medium"` \| `"large"` | `"medium"` | Controls the button size                            |
| `variant`  | `"primary"` \| `"secondary"` | `"primary"` | Defines the color scheme of the button              |
| `state`    | `"default"` \| `"pressed"` \| `"hover"` \| `"disabled"` \| `"loading"` | `"default"` | Defines the current visual state                    |
| `disabled` | `boolean`                   | `false`     | Disables the button if set to `true`                |
| `background` | `string`                 | `undefined` | Custom background color (overrides variant styling) |

## Development

Want to improve or extend the Epic Trails Design System? Here's how to get started:

1. Clone the repository
   ```bash
   git clone https://github.com/gaureshpai/reactnativeepictrailsds.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```
   
## Roadmap

- 🚀 Expand component library (forms, modals, headers, etc.)
- 📖 Add full documentation for each component
- 🎨 Theme customization support
- ♿ Improve accessibility (ARIA, screen reader support)
- 🧪 Interactive examples with Storybook or Expo
- 🛠️ Component playground for visual testing

## License

[MIT](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/LICENSE)

## Contributors

<div align="center">
  <a href="https://github.com/gaureshpai/reactnativeepictrailsds/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=gaureshpai/reactnativeepictrailsds" />
  </a>
</div>

## How to Contribute

Interested in joining our team? Check out our [contribution guidelines](CONTRIBUTING.md) to get started!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request