import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { createStyle } from '../utils/styleCompat';
import { PressableComponentProps, ComponentSize, ComponentState } from '../types/common';

export interface ButtonProps extends PressableComponentProps {
  label: string;
  variant?: "primary" | "secondary";
  size?: ComponentSize;
  icon?: "right" | "left";
  state?: ComponentState;
  background?: string | null;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  state = "default",
  size = "medium",
  disabled,
  background,
  variant = "primary",
  className,
  style,
  ...props
}) => {
  const buttonVariant = variant;

  const sizes = {
    small: "min-w-[80px] h-fit p-[10px]",
    medium: "min-w-[120px] h-fit p-[10px]",
    large: "min-w-[160px] h-fit p-[15px]",
  };

  const sizeMappings = {
    small: { minWidth: 80, padding: 10 },
    medium: { minWidth: 120, padding: 10 },
    large: { minWidth: 160, padding: 15 },
  };

  const primaryStates = {
    default: "bg-blue-600",
    pressed: "bg-blue-700",
    hover: "bg-blue-500",
    disabled: "bg-gray-300",
    loading: "bg-blue-600",
  };

  const primaryStateMappings = {
    default: { backgroundColor: "#2563eb" },
    pressed: { backgroundColor: "#1d4ed8" },
    hover: { backgroundColor: "#3b82f6" },
    disabled: { backgroundColor: "#d1d5db" },
    loading: { backgroundColor: "#2563eb" },
  };

  const secondaryStates = {
    default: 'border border-gray-300 bg-white',
    pressed: 'border border-gray-400 bg-gray-50',
    hover: 'border border-gray-400 bg-gray-50',
    disabled: 'border border-gray-200 bg-gray-100',
    loading: 'border border-gray-300 bg-white',
  };

  const secondaryStateMappings = {
    default: { borderWidth: 1, borderColor: "#d1d5db", backgroundColor: "#ffffff" },
    pressed: { borderWidth: 1, borderColor: "#9ca3af", backgroundColor: "#f9fafb" },
    hover: { borderWidth: 1, borderColor: "#9ca3af", backgroundColor: "#f9fafb" },
    disabled: { borderWidth: 1, borderColor: "#e5e7eb", backgroundColor: "#f3f4f6" },
    loading: { borderWidth: 1, borderColor: "#d1d5db", backgroundColor: "#ffffff" },
  };

  background = disabled ? null : background;

  const [isHovered, setIsHovered] = useState(false);

  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  // Determine current state for styling
  const currentState = disabled ? "disabled" : isHovered && isHoverEffectEnabled ? "hover" : state;
  const stateClassName = buttonVariant === "primary" ? primaryStates[currentState] : secondaryStates[currentState];
  const stateStyle = buttonVariant === "primary" ? primaryStateMappings[currentState] : secondaryStateMappings[currentState];

  // Create the combined container style
  const containerStyle = createStyle({
    className: `${className || ''} flex items-center justify-center ${stateClassName}`,
    style: [
      sizeMappings[size],
      stateStyle,
      background ? { backgroundColor: background } : {},
      style
    ].filter(Boolean)
  });

  // Text styles
  const getTextColor = () => {
    if (state === "disabled") return "#868686";
    if (buttonVariant === "primary") return "#ffffff";
    return "#000000";
  };

  const textStyle = createStyle({
    className: "font-medium",
    style: { 
      color: getTextColor(),
      fontSize: 16,
      fontWeight: "500"
    }
  });

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => isHoverEffectEnabled && setIsHovered(true)}
      onPressOut={() => isHoverEffectEnabled && setIsHovered(false)}
      style={containerStyle}
      {...props}
    >
      {state === "loading" ? (
        <ActivityIndicator 
          size="small" 
          color={buttonVariant === "primary" ? "#ffffff" : "#000000"} 
        />
      ) : (
        <Text style={textStyle}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
