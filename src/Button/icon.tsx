import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ActivityIndicator } from "react-native"; 
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import { ButtonProps } from "./Button.type";


 const Icon = ({
  label = "Button",
  state = "default",
  size = "medium",
  icon = "right",
  disabled,
  onClick,
  background,
  variant = "primary", 
}: ButtonProps) => {
  
  const buttonVariant =  variant;

  
  const sizes = {
    small: "min-w-[169px] h-fit p-[10px]", 
    medium: "min-w-[270px] h-fit p-[10px]", 
    large: "min-w-[270px] h-fit p-[15px]", 
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
    loading: '.btn-secondary-loading',
  };

  
  const states = buttonVariant === "primary" ? primaryStates : secondaryStates;

  
  background = disabled ? null : background;

  
  const [isHovered, setIsHovered] = useState(false);

  
  const isHoverEffectEnabled = !disabled && state !== "disabled" && state !== "loading";

  
  const iconColor =
    state === "disabled"
      ? "#868686" 
      : buttonVariant === "primary"
      ? "#ffffff" 
      : "#000000"; 

  return (
    <Pressable
      onPress={!disabled ? onClick : undefined}
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} 
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)}
      style={{ backgroundColor: background? background : undefined }}
      className={`${sizes[size]} ${
        background
          ? null
          : disabled
          ? states.disabled 
          : isHovered && isHoverEffectEnabled
          ? states.hover 
          : states[state]
      } flex flex-row items-center justify-between`} 
    >
      {state === "loading" ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} />
        </View>
      ) : (
        <>
          
          {icon === "left" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, 
                marginRight: 24, 
                fontSize: 20, 
              }}
            />
          )}

          
          <Text className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
            {label}
          </Text>

          
          {icon === "right" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, 
                marginLeft: 24, 
                fontSize: 20, 
              }}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

export default Icon;