import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ActivityIndicator } from "react-native"; // Use React Native's ActivityIndicator instead of CircularProgress
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the Material-UI icon

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: "right" | "left" ;
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  onClick?: () => void;
  background?: string | null;
  varient?: string; // Fallback for typo
};

export const icon = ({
  label,
  onPress,
  state = "default",
  size = "medium",
  icon = "right",
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
    small: "min-w-[169px] h-fit p-[10px]", // Small size with minimum width
    medium: "min-w-[270px] h-fit p-[10px]", // Medium size with minimum width
    large: "min-w-[270px] h-fit p-[15px]", // Large size with minimum width
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

  // Determine icon color based on state and variant
  const iconColor =
    state === "disabled"
      ? "#868686" // Use the same color as disabled text
      : buttonVariant === "primary"
      ? "#ffffff" // White for primary
      : "#000000"; // Black for secondary

  return (
    <Pressable
      onPress={!disabled ? onClick || onPress : undefined}
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} // Handle hover in (only if hover effect is enabled)
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} // Handle hover out (only if hover effect is enabled)
      style={{ backgroundColor: background }}
      className={`${sizes[size]} ${
        background
          ? null
          : disabled
          ? states.disabled // Apply disabled styles
          : isHovered && isHoverEffectEnabled
          ? states.hover // Apply hover styles when hovered and hover effect is enabled
          : states[state]
      } flex flex-row items-center justify-between`} // Use justify-between to push text and icon to opposite ends
    >
      {state === "loading" ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} />
        </View>
      ) : (
        <>
          {/* Render icon on the left if icon prop is "left" */}
          {icon === "left" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, // Set icon color dynamically
                marginRight: 24, // Increased padding between icon and text
                fontSize: 20, // Smaller icon size
              }}
            />
          )}

          {/* Text */}
          <Text className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
            {label}
          </Text>

          {/* Render icon on the right if icon prop is "right" */}
          {icon === "right" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, // Set icon color dynamically
                marginLeft: 24, // Increased padding between text and icon
                fontSize: 20, // Smaller icon size
              }}
            />
          )}
        </>
      )}
    </Pressable>
  );
};