import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { ButtonProps } from "./Button.type";
import { createStyle, mergeStyles } from '../utils/styleCompat';

const RectButton = ({
  label = "Button",
  state = "default",
  size = "medium",
  disabled,
  background,
  variant = "primary",
  
  ...props
}: ButtonProps) => {
  const buttonVariant = variant;

  const sizes = {
    small: "min-w-[80px] h-fit p-[10px]",
    medium: "min-w-[120px] h-fit p-[10px]",
    large: "min-w-[160px] h-fit p-[15px]",
  };

  const primaryStates = {
    default: "bg-buttons-primary-default",
    pressed: "bg-buttons-primary-pressed",
    hover: "bg-buttons-primary-hover",
    disabled: "bg-buttons-primary-disabled",
    loading: "bg-buttons-primary-default",
  };

  const secondaryStates = {
    default: 'btn-secondary-default',
    pressed: 'btn-secondary-pressed',
    hover: 'btn-secondary-hover',
    disabled: 'btn-secondary-disabled',
    loading: 'btn-secondary-loading',
  };

  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;

  background = disabled ? null : background;

  const [isHovered, setIsHovered] = useState(false);

  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  // Create the style object combining className and style props
  const baseStyle = {
    backgroundColor: background ? background : undefined
  };
  
  const containerStyle = createStyle({
    className: `${sizes[size]} ${background
        ? ''
        : disabled
          ? states.disabled
          : isHovered && isHoverEffectEnabled
            ? states.hover
            : states[state]
      } flex items-center justify-center`,
    style: [baseStyle, props.style].filter(Boolean)
  });

  return (
    <Pressable
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)}
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)}
      style={containerStyle}
      {...props}
    >
      {state === "loading" ? (
        <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} />
      ) : (
        <Text style={createStyle({ 
          className: `${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}` 
        })}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default RectButton;