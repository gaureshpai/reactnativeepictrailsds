import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

const alertStyles = {
  information: {
    backgroundColor: "#E8E8E8",
    color: "#1F1F1F",
    secondaryColor: "#DDDDDD",
    secondaryTextColor: "#1F1F1F",
    icon: "information-circle",
  },
  success: {
    backgroundColor: "#D3EFDA",
    color: "#166C3B",
    secondaryColor: "#B1EAC2",
    secondaryTextColor: "#166C3B",
    icon: "checkmark-circle",
  },
  warning: {
    backgroundColor: "#FEE2D4",
    color: "#C54600",
    secondaryColor: "#FFD3BC",
    secondaryTextColor: "#C54600",
    icon: "warning",
  },
  error: {
    backgroundColor: "#FFE1DE",
    color: "#950F22",
    secondaryColor: "#FFD2CD",
    secondaryTextColor: "#950F22",
    icon: "alert-circle",
  },
};

type AlertType = "information" | "success" | "warning" | "error";

export interface AlertProps extends ContainerComponentProps {
  message: string;
  label?: string;
  description?: string;
  icon?: boolean;
  inline?: boolean;
  suppressed?: boolean;
  type?: AlertType;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  label = '',
  description = '',
  icon = true,
  inline = false,
  suppressed = true,
  type = 'information',
  onPrimaryPress = () => { },
  onSecondaryPress = () => { },
  className,
  style,
  ...props
}) => {
  const { backgroundColor, color, secondaryColor, secondaryTextColor } = alertStyles[type];

  if (inline) {
    const inlineContainerStyle = createStyle({
      className: `${className || ''} flex-row items-center bg-white p-4`,
      style: [
        { 
          borderTopColor: color, 
          borderTopWidth: 2,
          width: '80%'
        },
        style
      ].filter(Boolean)
    });

    const iconStyle = createStyle({
      className: "mr-2",
      style: { marginRight: 8 }
    });

    const messageStyle = createStyle({
      className: "flex-1 text-gray-800 font-bold",
      style: { 
        flex: 1, 
        color: "#1f2937", 
        fontWeight: "bold" 
      }
    });

    const primaryButtonStyle = createStyle({
      className: "p-2 px-8 items-center",
      style: { 
        backgroundColor: color, 
        width: '25%',
        padding: 8,
        paddingHorizontal: 32,
        alignItems: "center"
      }
    });

    const buttonTextStyle = createStyle({
      className: "text-white",
      style: { color: "#ffffff" }
    });

    return (
      <View style={inlineContainerStyle} {...props}>
        {icon && (
          <Ionicons
            name={alertStyles[type].icon as any}
            size={24}
            color={color}
            style={iconStyle}
          />
        )}
        <Text style={messageStyle}>{message}</Text>
        {label && (
          <TouchableOpacity
            onPress={onPrimaryPress}
            style={primaryButtonStyle}
            activeOpacity={0.8}
          >
            <Text style={buttonTextStyle}>{label}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  const containerStyle = createStyle({
    className: `${className || ''}`,
    style: [
      { 
        borderTopWidth: 2, 
        borderTopColor: color,
        width: '80%'
      },
      style
    ].filter(Boolean)
  });

  const backgroundStyle = createStyle({
    className: `${suppressed ? '' : 'bg-white'}`,
    style: { 
      backgroundColor: suppressed ? backgroundColor : 'white' 
    }
  });

  const headerStyle = createStyle({
    className: "flex-row items-center p-4",
    style: { 
      flexDirection: "row", 
      alignItems: "center", 
      padding: 16 
    }
  });

  const iconContainerStyle = createStyle({
    className: "mr-2",
    style: { marginRight: 8 }
  });

  const messageTextStyle = createStyle({
    className: "text-gray-800 flex-1 font-bold",
    style: { 
      color: "#1f2937", 
      flex: 1, 
      fontWeight: "bold" 
    }
  });

  const descriptionContainerStyle = createStyle({
    className: "px-4 pb-2",
    style: { 
      paddingHorizontal: 16, 
      paddingBottom: 8 
    }
  });

  const descriptionTextStyle = createStyle({
    className: "text-gray-600",
    style: { color: "#4b5563" }
  });

  const buttonsContainerStyle = createStyle({
    className: "flex flex-row justify-between p-4",
    style: { 
      flexDirection: "row", 
      justifyContent: "space-between", 
      padding: 16 
    }
  });

  const primaryButtonStyle = createStyle({
    className: "p-2 px-8 items-center",
    style: { 
      backgroundColor: color, 
      width: '45%',
      padding: 8,
      paddingHorizontal: 32,
      alignItems: "center"
    }
  });

  const secondaryButtonStyle = createStyle({
    className: "p-2 px-8 items-center",
    style: { 
      backgroundColor: secondaryColor, 
      width: '45%',
      padding: 8,
      paddingHorizontal: 32,
      alignItems: "center"
    }
  });

  const primaryButtonTextStyle = createStyle({
    className: "text-white",
    style: { color: "#ffffff" }
  });

  const secondaryButtonTextStyle = createStyle({
    style: { color: secondaryTextColor }
  });

  return (
    <View style={containerStyle} {...props}>
      <View style={backgroundStyle}>
        <View style={headerStyle}>
          {icon && (
            <Ionicons
              name={alertStyles[type].icon as any}
              size={20}
              color={color}
              style={iconContainerStyle}
            />
          )}
          <Text style={messageTextStyle}>{message}</Text>
        </View>

        {description && (
          <View style={descriptionContainerStyle}>
            <Text style={descriptionTextStyle}>
              {description}
            </Text>
          </View>
        )}

        {label && (
          <View style={buttonsContainerStyle}>
            <TouchableOpacity
              onPress={onPrimaryPress}
              style={primaryButtonStyle}
              activeOpacity={0.8}
            >
              <Text style={primaryButtonTextStyle}>{label}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSecondaryPress}
              style={secondaryButtonStyle}
              activeOpacity={0.8}
            >
              <Text style={secondaryButtonTextStyle}>{label}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Alert;
