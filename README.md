# React Native Epic Trails Design System

[![License](https://img.shields.io/npm/l/reactnativeepictrailsds.svg)](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/reactnativeepictrailsds.svg)](https://www.npmjs.com/package/reactnativeepictrailsds)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Demo](https://img.shields.io/badge/Demo-epictrails--demo.expo.app-blue.svg)](https://epictrails-demo.expo.app/)

A modern, production-ready **React Native design system** featuring pre-styled, customizable components, state-based UI logic, theme support, and seamless integration with Tailwind, Expo, and TypeScript. Built for scalable mobile app development with accessibility and performance in mind.

## 🚀 Features

* 🎯 **25+ Production-Ready Components** - Buttons, Inputs, Cards, Modals, Navigation, Social Media Stack, and more
* 🎨 **Dual Styling Support** - Works with both NativeWind className and React Native styles
* 🔧 **State-Driven UI** - Built-in hover, pressed, disabled, loading, and error states
* 📱 **Cross-Platform** - Optimized for iOS, Android, and React Native Web
* 🌗 **Theme Ready** - Consistent design tokens and customizable variants
* ⚡ **TypeScript First** - Full type safety with comprehensive prop interfaces
* 🧩 **Modular Architecture** - Import only what you need for optimal bundle size
* ♿ **Accessible** - Built-in accessibility support for screen readers
* 📦 **Zero Dependencies** - No external UI library dependencies

## 📦 Installation

```bash
npm install reactnativeepictrailsds
# or
yarn add reactnativeepictrailsds
```

### Optional: NativeWind Setup

For enhanced className support (optional - components work with pure React Native styles too):

```bash
npm install nativewind tailwindcss
```

Follow the [NativeWind installation guide](https://www.nativewind.dev/quick-starts/expo) for your platform.

## ✨ Quick Start

```tsx
import React from "react";
import { View } from "react-native";
import { 
  Button, 
  NormalInput, 
  Card, 
  SocialLogin,
  SocialMediaStack,
  StoryProgressBar
} from "reactnativeepictrailsds";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Card>
        <NormalInput 
          placeholder="Enter your email"
          size="full"
        />
        
        <Button
          title="Sign In"
          variant="primary"
          onPress={() => console.log('Pressed!')}
        />
        
        <SocialLogin 
          google 
          apple 
          onGoogleSignIn={() => console.log('Google')}
          onAppleSignIn={() => console.log('Apple')}
        />
      </Card>
    </View>
  );
/>
```

### Social Media Stack Example

```tsx
import React, { useState } from "react";
import {
  SocialMediaStack,
  SocialMediaContainer,
  SocialMediaEngagement,
  StoryProgressBar,
  BottomNav
} from "reactnativeepictrailsds";

export default function StoriesScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const contentItems = [
    {
      type: "text" as const,
      text: "Welcome to our app!",
      backgroundColor: "#e74c3c"
    },
    {
      type: "image" as const,
      imageUri: require("./assets/image.png"),
      isLocal: true
    }
  ];
  
  const engagementIcons = [
    { name: "heart-outline", onPress: () => console.log("Like") },
    { name: "chatbox-outline", onPress: () => console.log("Comment") },
    { name: "paper-plane-outline", onPress: () => console.log("Share") }
  ];
  
  return (
    <SocialMediaStack>
      <StoryProgressBar
        totalStories={contentItems.length}
        activeStoryIndex={activeIndex}
      />
      <SocialMediaEngagement icons={engagementIcons} />
      <SocialMediaContainer
        contentItems={contentItems}
        duration={5000}
        onActiveIndexChange={(index: number) => setActiveIndex(index)}
        index={activeIndex}
      />
    </SocialMediaStack>
  );
}
```

## 🧩 Available Components

### Core Components

| Component | Description | Key Props |
|-----------|-------------|----------|
| **Button** | Primary button with variants and states | `label`, `variant`, `size`, `state` |
| **Input** | Text input with label, hint, and validation | `label`, `placeholder`, `state`, `curved` |
| **Card** | Container with elevation and padding | `elevation`, `padding`, `backgroundColor` |
| **Alert** | Notification component with variants | `type`, `message`, `dismissible` |
| **Loading** | Loading spinner with customizable size | `size`, `color` |
| **Skeleton** | Loading placeholder animations | `width`, `height`, `animated` |

### Navigation Components

| Component | Description | Key Props |
|-----------|-------------|----------|
| **NavTabs** | Tab navigation component | `tabs`, `activeTab`, `onTabPress` |
| **BottomNav** | Bottom navigation bar | `items`, `activeIndex`, `onItemPress` |
| **Tabs** | Horizontal tab switcher | `items`, `selected`, `onChange` |

### Layout Components

| Component | Description | Key Props |
|-----------|-------------|----------|
| **Grid** | Responsive grid layout | `columns`, `spacing`, `children` |
| **Tile** | Grid tile with content | `title`, `subtitle`, `onPress` |
| **Collapse** | Expandable/collapsible content | `title`, `expanded`, `children` |
| **EmptyStates** | Empty state illustrations | `title`, `message`, `actionButton` |

### Form Components

| Component | Description | Key Props |
|-----------|-------------|----------|
| **Select** | Dropdown selection component | `options`, `value`, `onSelect` |
| **Autocomplete** | Auto-completing text input | `data`, `onSelect`, `placeholder` |
| **NormalInput** | Basic text input (alias for Input) | Same as Input |

### Modal & Dialog Components

| Component | Description | Key Props |
|-----------|-------------|----------|
| **Dialog** | Modal dialog with actions | `visible`, `title`, `message`, `actions` |
| **AndroidModalSheet** | Android-style bottom sheet | `visible`, `onClose`, `children` |
| **IosModalSheet** | iOS-style modal presentation | `visible`, `onClose`, `children` |

### Social & Authentication

| Component | Description | Key Props |
|-----------|-------------|----------|
| **SocialLogin** | Social login buttons | `google`, `apple`, `facebook`, `email` |
| **TypeDoc** | Terms agreement with checkbox | `label`, `buttonLabel`, `onAccept` |

### Social Media Stack

| Component | Description | Key Props |
|-----------|-------------|----------|
| **SocialMediaStack** | Container for social media components | `children` |
| **SocialMediaContainer** | Story/post container with navigation | `contentItems`, `duration`, `onActiveIndexChange` |
| **SocialMediaEngagement** | Like, comment, share buttons | `icons`, `onIconPress` |
| **StoryProgressBar** | Progress indicator for stories | `totalStories`, `activeStoryIndex` |

### Icons & Graphics

| Component | Description | Key Props |
|-----------|-------------|----------|
| **Iconography** | Icon component with avatars and placeholders | `type`, `iconName`, `size`, `initials` |

### Button Variants

| Component | Description | Key Props |
|-----------|-------------|----------|
| **ButtonIcon** | Button with icon support | `label`, `icon`, `iconPosition` |
| **ButtonRect** | Rectangular button variant | `label`, `variant`, `size` |
| **RectButton** | Alias for ButtonRect | `label`, `variant`, `size` |
| **ButtonTypeDoc** | Button with terms agreement | `label`, `termsText`, `onAccept` |

## 🎨 Styling Approaches

### Method 1: NativeWind Classes (Recommended)

```tsx
import { Button } from "reactnativeepictrailsds";

<Button 
  label="Styled Button"
  className="bg-blue-500 rounded-lg shadow-md"
/>
```

### Method 2: React Native Styles

```tsx
import { Button } from "reactnativeepictrailsds";

<Button 
  label="Styled Button"
  style={{
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }}
/>
```

### Method 3: Hybrid Approach

```tsx
<Button 
  label="Hybrid Button"
  className="rounded-lg shadow-md" // NativeWind classes
  style={{ backgroundColor: '#custom-color' }} // Direct styles
/>
```

## 🧪 Component States

| State | Description | Availability |
|-------|-------------|-------------|
| `default` | Default appearance | All interactive components |
| `hover` | Mouse hover effect | Web + compatible components |
| `pressed` | Active press state | Pressable components |
| `disabled` | Non-interactive state | Form + button components |
| `loading` | Loading with spinner | Async action components |
| `success` | Success state | Form validation components |
| `error` | Error state | Form validation components |

## 🛠 Development

```bash
# Clone the demo repo
git clone https://github.com/Milan-C-I/Demo-react-native-epic-trails-ds.git
cd reactnativeepictrailsds

# Install dependencies
npm install

# Build the library
npm run build
```

### Building the Library

```bash
# Build all formats (CommonJS, ESM, TypeScript declarations)
npm run build

# Development build with watch mode
npm run build:watch

# Type checking
npm run type-check
```

## 📅 Roadmap

### ✅ Completed
* Core component library (25+ components)
* Button variants with full state management
* Form and input controls with validation
* Modal and dialog primitives
* Navigation components (tabs, bottom nav)
* Layout components (grid, tiles, cards)
* Social authentication components
* Social Media Stack (Instagram-like stories)
* Iconography system with avatars and icons
* TypeScript support with full type definitions
* Dual styling system (NativeWind + React Native)
* Cross-platform compatibility (iOS, Android, Web)
* React Native 0.76.x compatibility
* Expo SDK 52 compatibility

### 🚧 In Progress
* Enhanced theme system with design tokens
* Advanced animation support
* Component documentation site
* Storybook integration
* Video support for Social Media Stack

### 🎯 Planned
* Dark mode theme variants
* Advanced accessibility features
* Performance optimizations
* Extended icon library
* Form validation utilities
* Gesture-based components

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