import React, { useState, useEffect } from "react";
import { Pressable, Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStyle } from '../utils/styleCompat';
import { TypeDocsProps } from "./Button.type";

const TypeDoc: React.FC<TypeDocsProps> = ({
  icon = "right",
  buttonLabel = "Button",
  label = "I agree to the terms and conditions.",
  size = "medium",
  state = "default",
  disabled = false,
  background = null,
  onClick = () => { },
  className,
  style,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (state === "loading" || state === "pressed") {
      setIsChecked(true);
    }
  }, [state]);

  // Size mappings for React Native styles
  const sizeMappings = {
    small: { width: '75%', minWidth: 80, padding: 10 },
    medium: { width: '100%', minWidth: 120, padding: 10 },
    large: { width: '100%', minWidth: 160, padding: 15 },
  };

  // Button state styles
  const buttonStateMappings = {
    default: { backgroundColor: "#000000" },
    pressed: { backgroundColor: "#1f2937" },
    hover: { backgroundColor: "#111827" },
    disabled: { backgroundColor: "#d1d5db" },
    loading: { backgroundColor: "#000000" },
  };

  const isButtonDisabled = disabled || !isChecked;

  const isHoverEffectEnabled = !isButtonDisabled && state !== "disabled" && state !== "loading";

  const handlePress = () => {
    if (!isButtonDisabled) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 100);
    }
  };

  // Create container styles
  const containerStyle = createStyle({
    className: `${className || ''} justify-center items-center p-5`,
    style: [{ width: 335 }, style].filter(Boolean)
  });

  const checkboxContainerStyle = createStyle({
    className: "flex-row items-center mb-5"
  });

  const labelTextStyle = createStyle({
    className: icon === "right" ? "ml-2.5" : "mr-2.5",
    style: { fontSize: 16 }
  });

  // Determine current button state for styling
  const currentButtonState = isButtonDisabled ? "disabled" : isPressed ? "pressed" : isHovered && isHoverEffectEnabled ? "hover" : state;
  const buttonStateStyle = buttonStateMappings[currentButtonState];

  const buttonStyle = createStyle({
    className: "flex items-center justify-center",
    style: [
      sizeMappings[size],
      buttonStateStyle,
      background ? { backgroundColor: background } : {}
    ].filter(Boolean)
  });

  const buttonTextStyle = createStyle({
    style: {
      color: isButtonDisabled ? "#868686" : "#ffffff",
      fontSize: 16,
      fontWeight: "500"
    }
  });

  return (
    <View style={containerStyle}>
      <Pressable
        onPress={() => setIsChecked(!isChecked)}
        style={checkboxContainerStyle}
        {...props}
      >
        {icon === "right" && (
          <>
            {isChecked ? (
              <Ionicons name="checkbox" size={24} color="black" />
            ) : (
              <Ionicons name="square-outline" size={24} color="#666666" />
            )}
            <Text style={labelTextStyle}>{label}</Text>
          </>
        )}

        {icon === "left" && (
          <>
            <Text style={labelTextStyle}>{label}</Text>
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
        onPressIn={() => isHoverEffectEnabled && setIsHovered(true)}
        onPressOut={() => isHoverEffectEnabled && setIsHovered(false)}
        style={buttonStyle}
      >
        {state === "loading" ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={buttonTextStyle}>
            {buttonLabel}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default TypeDoc;