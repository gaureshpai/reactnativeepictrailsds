import React, { useState, useEffect } from "react";
import { Pressable, PressableProps, Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TypeDocsProps } from "./Button.type";

const TypeDoc = ({
  icon = "right",
  buttonLabel = "Button",
  label = "I agree to the terms and conditions.",
  size = "medium",
  state = "default",
  disabled = false,
  background = null,
  onClick = () => { },
  ...props
}: TypeDocsProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (state === "loading" || state === "pressed") {
      setIsChecked(true);
    }
  }, [state]);

  const sizes = {
    small: "w-3/4 min-w-[80px] p-[10px]",
    medium: "w-full min-w-[120px] p-[10px]",
    large: "w-full min-w-[160px] p-[15px]",
  };

  const buttonStates = {
    default: "bg-black",
    pressed: "bg-gray-800",
    hover: "bg-gray-900",
    disabled: "bg-gray-300",
    loading: "bg-black",
  };

  const isButtonDisabled = disabled || !isChecked;

  const isHoverEffectEnabled = !isButtonDisabled && state !== "disabled" && state !== "loading";

  const handlePress = () => {
    if (!isButtonDisabled) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 100);
    }
  };

  return (
    <View className="flex justify-center items-center w-[335px] p-5">
      <Pressable
        onPress={() => setIsChecked(!isChecked)}
        className="flex-row items-center mb-5"
        {...props}
      >
        {icon === "right" && (
          <>
            {isChecked ? (
              <Ionicons name="checkbox" size={24} color="black" />
            ) : (
              <Ionicons name="square-outline" size={24} color="#666666" />
            )}
            <Text className="ml-2.5">{label}</Text>
          </>
        )}

        {icon === "left" && (
          <>
            <Text className="mr-2.5">{label}</Text>
            {isChecked ? (
              <Ionicons name="checkbox" size={24} color="black" />
            ) : (
              <Ionicons name="square-outline" size={24} color="#666666" />
            )}
          </>
        )}
      </Pressable>

      <Pressable
        onPress={onClick}
        disabled={isButtonDisabled}
        onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)}
        onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)}
        style={{ backgroundColor: background || undefined }}
        className={`${sizes[size]} ${background
            ? null
            : isButtonDisabled
              ? buttonStates.disabled
              : isPressed
                ? buttonStates.pressed
                : isHovered && isHoverEffectEnabled
                  ? buttonStates.hover
                  : buttonStates[state]
          } flex items-center justify-center`}
      >
        {state === "loading" ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text className={`${isButtonDisabled ? "text-[#868686]" : "text-white"}`}>
            {buttonLabel}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default TypeDoc;