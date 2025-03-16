import { Linking, Text, View, TouchableOpacity, StyleSheet } from "react-native";

// Starter Component
const StarterComponent = () => (
  <View style={{ padding: 16 }}>
    <Text>
      Thanks for trying out Storybook, follow the{" "}
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
          )
        }
      >
        tutorial
      </Text>{" "}
      to learn how to create your own stories.
    </Text>
  </View>
);

// Button Component
const Button = ({ variant = "default", size = "default", disabled, onClick, children }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], styles[size], disabled && styles.disabled]}
      onPress={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{children}</Text>
    </TouchableOpacity>
  );
};

// Meta Configuration
const meta = {
  title: "Components/ui/Playground",
  component: StarterComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Stories
export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};

export const DefaultButton = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: () => console.log("Default button clicked"),
    children: "Default button",
  },
};

export const PrimaryButton = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    onClick: () => console.log("Primary button clicked"),
    children: "Primary button",
  },
};

// Styles
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  default: {
    backgroundColor: "#007bff",
  },
  link: {
    textDecorationLine: "underline",
    color: "blue",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
  textDisabled: {
    color: "#666666",
  },
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  lg: {
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
});
