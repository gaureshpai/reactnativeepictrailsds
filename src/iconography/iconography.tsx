import React from "react";
import { View, Text } from "react-native";
import { twMerge } from "tailwind-merge";
import { Ionicons } from "@expo/vector-icons";
import { iconMap, IconName, PlaceholderSize, AvatarSize, IconComponentProps, sizeMapping } from "./iconography.type";

const IconComponent: React.FC<IconComponentProps> = ({
  type,
  iconName,
  size = 24,
  theme = "light",
  placeholderSize = "medium",
  filled = false,
  avatarSize = "medium",
  initials = "AB",
  className = "",
}) => {
  if (type === "icon") {
    return renderIcon(iconName, size, theme, className);
  }

  if (type === "placeholder") {
    return renderPlaceholder(placeholderSize, filled, className);
  }

  if (type === "avatar") {
    return renderAvatar(avatarSize, initials, className);
  }

  return null;
};


const renderIcon = (
  iconName?: IconName,
  size: number = 24,
  theme: "light" | "dark" = "light",
  className = ""
) => {
  if (!iconName) return null;

  const baseIconName = iconMap[iconName];


  const ionIconName =
    theme === "dark" && baseIconName.endsWith("-outline")
      ? baseIconName.replace("-outline", "")
      : baseIconName;

  return (
    <View className={twMerge(`flex items-center justify-center`, className)}>
      <Ionicons name={ionIconName as any} size={size} color={"#000"} />
    </View>
  );
};


const renderPlaceholder = (
  size: PlaceholderSize = "medium",
  filled: boolean = false,
  className = ""
) => {
  const pixelSize = sizeMapping[size];
  const bgClass = filled ? "bg-black" : "bg-transparent";
  const borderClass = filled ? "" : "border border-black";

  return (
    <View
      className={twMerge(
        `rounded-full flex items-center justify-center ${bgClass} ${borderClass}`,
        className
      )}
      style={{ width: pixelSize, height: pixelSize }}
    />
  );
};


const renderAvatar = (
  size: AvatarSize = "medium",
  initials: string = "AB",
  className = ""
) => {
  const pixelSize = sizeMapping[size];


  const fontSize = Math.max(Math.floor(pixelSize * 0.4), 8);


  const fontWeight =
    size === "xl" || size === "large"
      ? "900"
      : size === "medium" || size === "small"
        ? "700"
        : "500";

  return (
    <View
      className={twMerge(
        `bg-black rounded-full flex items-center justify-center`,
        className
      )}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <Text
        style={{
          color: "white",
          fontWeight,
          fontSize,
          verticalAlign: "middle",
        }}
      >
        {initials}
      </Text>
    </View>
  );
};

export default IconComponent;