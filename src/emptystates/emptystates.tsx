import React from "react";
import { View, Text } from "react-native";
import Button from "../Button/Button";
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

export interface EmptyStatesProps extends ContainerComponentProps {
  message: string;
  description?: string;
  label?: string;
  onPress?: () => void;
  action?: "none" | "primary" | "secondary";
  children?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStatesProps> = ({
  message,
  description,
  label = "Okay",
  onPress,
  action = "none",
  children,
  className,
  style,
  ...props
}) => {
  const renderButton = () => {
    if (action === "none") return null;

    const buttontype = action === "primary" ? "primary" : "secondary";

    return (
      <Button
        label={label}
        variant={buttontype}
        onPress={onPress}
      />
    );
  };

  const containerStyle = createStyle({
    className: `${className || ''} flex bg-white justify-center items-center`,
    style: [
      {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%'
      },
      style
    ].filter(Boolean)
  });

  const childrenContainerStyle = createStyle({
    className: "w-full min-h-32",
    style: {
      width: '100%',
      minHeight: 128
    }
  });

  const contentContainerStyle = createStyle({
    className: "flex bg-white justify-center items-center py-2 px-4",
    style: {
      display: 'flex',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16
    }
  });

  const messageStyle = createStyle({
    className: "text-center text-sm font-semibold text-black mb-2",
    style: {
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '600',
      color: '#000000',
      marginBottom: 8
    }
  });

  const descriptionStyle = createStyle({
    className: "text-center text-xs text-gray-500 mb-2 max-w-xs",
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: '#6b7280',
      marginBottom: 8,
      maxWidth: 288 // Approx equivalent to max-w-xs
    }
  });

  return (
    <View style={containerStyle} {...props}>
      {children && <View style={childrenContainerStyle}>{children}</View>}
      <View style={contentContainerStyle}>
        <Text style={messageStyle}>
          {message}
        </Text>

        {description && (
          <Text style={descriptionStyle}>
            {description}
          </Text>
        )}

        {renderButton()}
      </View>
    </View>
  );
};

export default EmptyState;

