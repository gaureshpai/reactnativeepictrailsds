import { Linking, Text, View } from "react-native";

const StarterComponent = () => (
  <View style={{ padding: 16 }}>
    <Text>
      Thanks for trying out Storybook, follow the{" "}
      <Text
        style={{
          textDecorationLine: "underline",
          textDecorationColor: "blue",
        }}
        className="text-white p-4 bg-blue-500"
        onPress={() =>
          Linking.openURL(
            "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
          )
        }
      >
        tutorial
      </Text>{" "}
      to learn how to create your own stories
    </Text>
  </View>
);

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
