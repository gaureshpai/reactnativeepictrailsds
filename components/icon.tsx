import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ActivityIndicator } from "react-native"; 
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 

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
  varient?: string; 
};

 const Icon = ({
  label,
  onPress,
  state = "default",
  size = "medium",
  icon = "right",
  disabled,
  onClick,
  background,
  varient,
  variant = "primary", 
}: ButtonProps) => {
  
  const buttonVariant = varient || variant;

  
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
    default: "bg-buttons-secondary-default border border-buttons-secondary-default-border",
    pressed: "bg-buttons-secondary-pressed border border-buttons-secondary-pressed-border",
    hover: "bg-buttons-secondary-hover border border-buttons-secondary-hover-border",
    disabled: "bg-buttons-secondary-disabled", 
    loading: "bg-buttons-secondary-default border border-buttons-secondary-default-border",
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
      onPress={!disabled ? onClick || onPress : undefined}
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} 
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} 
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
          {/* Render icon on the left if icon prop is "left" */}
          {icon === "left" && (
            <ArrowForwardIcon
              style={{
                color: iconColor, 
                marginRight: 24, 
                fontSize: 20, 
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