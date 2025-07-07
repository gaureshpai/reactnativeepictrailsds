# React Native Epic Trails Design System

[![License](https://img.shields.io/npm/l/reactnativeepictrailsds.svg)](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/reactnativeepictrailsds.svg)](https://www.npmjs.com/package/reactnativeepictrailsds)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A modular, themeable, and production-ready **React Native design system** crafted for outdoor and adventure applications. It includes pre-styled components, built-in theming support, and flexible customization.

> ⚠️ Versions `<1.0.0` have been **deprecated** in favor of a fully rewritten architecture. Please upgrade to `v1.x` or above for improved performance, stability, and maintainability.

## 🚀 Features

* ⚛️ Pre-built, customizable React Native components
* 🎨 Variant and theme support (Primary / Secondary buttons, etc.)
* 🧱 Utility class support via Tailwind-like styles (using libraries like NativeWind)
* 🌀 State-driven component rendering (hover, pressed, disabled, loading)
* ✅ Production-ready and actively maintained

## 📦 Installation

```bash
npm install reactnativeepictrailsds
# or
yarn add reactnativeepictrailsds
```

Make sure you’ve set up NativeWind (or similar library) for class-based styles if you're using Tailwind-style classNames.

## ✨ Usage Example – `RectButton`

```tsx
import React from "react";
import { View } from "react-native";
import RectButton from "reactnativeepictrailsds";

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

## 🧩 RectButton Props

| Prop         | Type                                                                   | Default     | Description                                              |
| ------------ | ---------------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `label`      | `string`                                                               | `"Button"`  | Text displayed inside the button                         |
| `size`       | `"small"` \| `"medium"` \| `"large"`                                   | `"medium"`  | Controls the button size                                 |
| `variant`    | `"primary"` \| `"secondary"`                                           | `"primary"` | Defines the button color style                           |
| `state`      | `"default"` \| `"pressed"` \| `"hover"` \| `"disabled"` \| `"loading"` | `"default"` | Defines the current visual interaction state             |
| `disabled`   | `boolean`                                                              | `false`     | Disables the button interaction if `true`                |
| `background` | `string`                                                               | `undefined` | Custom background color, overrides variant/state styling |

> ℹ️ When `state` is `"loading"`, a spinner is shown and `label` is hidden.

## 🧪 Component States Preview

| State      | Description                     |
| ---------- | ------------------------------- |
| `default`  | Default style of the button     |
| `pressed`  | When button is actively pressed |
| `hover`    | Hover state (web only)          |
| `disabled` | Grayed out & non-interactive    |
| `loading`  | Spinner shown instead of text   |

## 🛠 Development

```bash
git clone https://github.com/gaureshpai/reactnativeepictrailsds.git
cd reactnativeepictrailsds
npm install
npx expo start
```

## 📅 Roadmap

* [x] RectButton with state variants
* [ ] Forms and input controls
* [ ] Typography tokens and components
* [ ] Modal, Header, and Layout primitives
* [ ] Full theming and dark mode support
* [ ] Component documentation and Storybook/Expo integration
* [ ] Improved accessibility (VoiceOver, TalkBack, ARIA)

## 🧑‍💻 Contributing

We welcome contributions! Please refer to our [contributing guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a pull request and describe your changes

## 📝 License

This project is licensed under the [MIT License](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/LICENSE).

## 🤝 Contributors

Thanks to these wonderful people:

<div align="center">
  <a href="https://github.com/gaureshpai/reactnativeepictrailsds/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=gaureshpai/reactnativeepictrailsds" />
  </a>
</div>