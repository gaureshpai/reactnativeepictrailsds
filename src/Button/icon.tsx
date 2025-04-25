import React, { useState } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ButtonProps } from "./Button.type";

const Icon = ({
  label = "Button",
  state = "default",
  size = "medium",
  icon = "right",
  disabled,
  background,
  variant = "primary",
  ...props
}: ButtonProps) => {

  const buttonVariant = variant;

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
      disabled={disabled}
      onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)}
      onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)}
      style={{ backgroundColor: background ? background : undefined }}
      className={`${sizes[size]} ${background
          ? null
          : disabled
            ? states.disabled
            : isHovered && isHoverEffectEnabled
              ? states.hover
              : states[state]
        } flex flex-row items-center justify-between`}
      {...props}
    >
      {state === "loading" ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="small" color={buttonVariant === "primary" ? "#ffffff" : "#000000"} />
        </View>
      ) : (
        <>
          {/* Left icon */}
          {icon === "left" && (
            <Ionicons
              name="arrow-forward"
              size={20}
              color={iconColor}
              style={{ marginRight: 24 }}
            />
          )}

          {/* Button text */}
          <Text className={`${state === "disabled" ? "text-[#868686]" : buttonVariant === "primary" ? "text-white" : "text-black"}`}>
            {label}
          </Text>

          {/* Right icon */}
          {icon === "right" && (
            <Ionicons
              name="arrow-forward"
              size={20}
              color={iconColor}
              style={{ marginLeft: 24 }}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

export default Icon;