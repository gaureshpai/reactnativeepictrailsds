import { View } from "react-native";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        type: "code", // Enables copyable code preview
      },
    },
  },

  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D3D3D3",
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
