import React from "react";
import { View, Text } from "react-native";
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

export interface CardProps extends ContainerComponentProps {
  title?: string;
  subtitle?: string;
  cardTitle?: boolean;
  content?: React.ReactNode;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  cardTitle = true,
  children,
  content,
  backgroundColor = 'white',
  className,
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: "px-4 bg-white overflow-hidden border border-gray-200 shadow-sm mb-4 w-[80vw]",
    style: [{ backgroundColor }, style].filter(Boolean)
  });

  const headerStyle = createStyle({
    className: `flex ${cardTitle ? "flex-row" : "flex-row-reverse"} justify-between px-0 py-2`
  });

  const titleContainerStyle = createStyle({
    className: "px-0 py-2"
  });

  const titleTextStyle = createStyle({
    className: "font-medium text-gray-800"
  });

  const contentContainerStyle = createStyle({
    className: "relative mb-4 p-4 bg-green-50 min-h-32 flex-grow"
  });

  return (
    <View style={containerStyle} {...props}>
      <View style={headerStyle}>
        {title && (
          <View style={titleContainerStyle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>
        )}
        
        {subtitle && (
          <View style={createStyle({ className: "" })}>
            <Text style={createStyle({ className: "text-sm text-gray-600" })}>
              {subtitle}
            </Text>
          </View>
        )}
      </View>

      <View style={contentContainerStyle}>
        {children}
        {content}
      </View>
    </View>
  );
};

export default Card;
