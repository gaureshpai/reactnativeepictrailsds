<<<<<<< HEAD:.storybook/index.jsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import "../global.css"
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';
>>>>>>> 1fd7358573086d9e7fe66f04094d4d79b6dbd111:.storybook/index.ts

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
