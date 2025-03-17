import { Icon } from "@mui/material";
import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ActivityIndicator } from "react-native"; // Use React Native's ActivityIndicator instead of CircularProgress

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: "right" | "left" | "none";
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  onClick?: () => void;
  background?: string | null;
  varient?: string; // Fallback for typo
};

const Rect = ({
  label,
  onPress,
  state = "default",
  size = "medium",
  disabled,
  onClick,
  background,
  varient,
  variant = "primary", // Default to "primary" if not provided
}: ButtonProps) => {
  // Use either varient or variant (in case of typo), defaulting to "primary" if neither is provided
  const buttonVariant = varient || variant;

  // Define sizes
  const sizes = {
    small: "min-w-[80px] h-fit p-[10px]", // Small size with minimum width
    medium: "min-w-[120px] h-fit p-[10px]", // Medium size with minimum width
    large: "min-w-[160px] h-fit p-[15px]", // Large size with minimum width
  };

  // Define states for primary and secondary variants
  const primaryStates = {
    default: "bg-buttons-primary-default",
    pressed: "bg-buttons-primary-pressed",
    hover: "bg-buttons-primary-hover",
    disabled: "bg-buttons-primary-disabled",
    loading: "bg-buttons-primary-default",
  };

  const secondaryStates = {
    default: "bg-buttons-secondary-default border border-buttons-secondary-default-border",
    pressed: "bg-buttons-secondary-pressed border border-buttons-secondary-pressed-border",
    hover: "bg-buttons-secondary-hover border border-buttons-secondary-hover-border",
    disabled: "bg-buttons-secondary-disabled", // No border for disabled state
    loading: "bg-buttons-secondary-default border border-buttons-secondary-default-border",
  };

  // Select the appropriate states based on the variant
  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;

  // Determine background color
  background = disabled ? null : background;

  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Determine if hover effect should be applied
  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  return (
    <Pressable
      onPress={!disabled ? onClick || onPress : undefined}
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} // Handle hover in (only if hover effect is enabled)
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} // Handle hover out (only if hover effect is enabled)
      style={{ backgroundColor:background? background : undefined }}
      className={`${sizes[size]} ${
        background
          ? null
          : disabled
          ? states.disabled // Apply disabled styles
          : isHovered && isHoverEffectEnabled
          ? states.hover // Apply hover styles when hovered and hover effect is enabled
          : states[state]
      } flex items-center justify-center`}
    >
      {state === "loading" ? (
        <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} /> // React Native loading indicator
      ) : (
        <Text className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};  

export default Rect;