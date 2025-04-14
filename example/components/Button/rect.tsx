import { Icon } from "@mui/material";
import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { ActivityIndicator } from "react-native"; 
import { ButtonProps } from "./Button.type";


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

  return (
    <Pressable 
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} 
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} 
      style={{ backgroundColor:background? background : undefined }}
      className={`${sizes[size]} ${
        background
          ? null
          : disabled
          ? states.disabled 
          : isHovered && isHoverEffectEnabled
          ? states.hover 
          : states[state]
      } flex items-center justify-center`}
      {...props}
    >
      {state === "loading" ? (
        <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} /> 
      ) : (
        <Text className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};  

export default RectButton;