import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusButtonProps } from './statusbutton.type';
const StatusButton: React.FC<StatusButtonProps> = ({
  label = 'Label',
  type = 'information',
  buttonType = 'primary',
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
  onPress = () => {},
}) => {
  const colorStyles = {
    information: {
      primary: {
        backgroundColor: '#1F1F1F',
        color: '#FFFFFF',
      },
      subtle: {
        backgroundColor: '#DDDDDD',
        color: '#1F1F1F',
      },
    },
    success: {
      primary: {
        backgroundColor: '#0E8345',
        color: '#FFFFFF',
      },
      subtle: {
        backgroundColor: '#B1EAC2',
        color: '#166C3B',
      },
    },
    warning: {
      primary: {
        backgroundColor: '#C54600',
        color: '#FFFFFF',
      },
      subtle: {
        backgroundColor: '#FFD3BC',
        color: '#C54600',
      },
    },
    error: {
      primary: {
        backgroundColor: '#950F22',
        color: '#FFFFFF',
      },
      subtle: {
        backgroundColor: '#FFD2CD',
        color: '#950F22',
      },
    },
  };

  const currentStyle = colorStyles[type][buttonType];
  const textColor = currentStyle.color;
  const backgroundColor = currentStyle.backgroundColor;

  // Determine the content to render based on props
  const renderContent = () => {
    if (iconOnly) {
      return (
        <Ionicons
          name="chevron-forward"
          size={18}
          color={textColor}
        />
      );
    }

    return (
      <View className="flex flex-row items-center justify-center">
        {iconLeft && (
          <Ionicons
          name="heart-circle"
          size={18}
          color={textColor}
        />
        )}
        <Text style={{ color: textColor }} className="text-sm mx-2 align-baseline font-semibold">
          {label}
        </Text>
        {iconRight && (
          <Ionicons
          name="chevron-forward"
          size={18}
          color={textColor}
        />
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor }}
      className={`flex flex-row items-center justify-center p-2`}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default StatusButton;