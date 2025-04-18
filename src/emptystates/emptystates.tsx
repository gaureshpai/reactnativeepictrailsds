import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "../Button";
import { EmptyStateProps } from "./emptystates.type";
const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  description,
  label = "Okay",
  onPress,
  action = "none",
  children,
}) => {
  const renderButton = () => {
    if (action === "none") return null;

    const buttontype = action === "primary" ? "primary" : "secondary";

    return (
      <RectButton
        label={label}
        variant={buttontype}
        onPress={onPress}
      />
    );
  };

  return (
    <View className="flex bg-white justify-center items-center"
        style={{width:"75%"}}
    >
      {children && <View className="w-full min-h-32">{children}</View>}
        <View className="flex bg-white justify-center items-center py-2 px-4">
      <Text className="text-center text-sm font-semibold textblack mb-2">
        {message}
      </Text>

      {description && (
        <Text className="text-center text-xs text-gray-500 mb-2 max-w-xs">
          {description}
        </Text>
      )}

      {renderButton()}
      </View>
    </View>
  );
};

export default EmptyState;
