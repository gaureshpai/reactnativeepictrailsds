import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

export interface CardSectionProps extends ContainerComponentProps {
  title?: string;
  icon?: boolean;
  onPress?: () => void;
}

const CardSection: React.FC<CardSectionProps> = ({
  title = "Section Title",
  icon = false,
  onPress = () => console.log('Section pressed'),
  className,
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: `${className || ''} w-full bg-white`,
    style
  });

  const touchableStyle = createStyle({
    className: "flex flex-row items-center justify-between py-3 px-2 border-b border-gray-200"
  });

  const leftContentStyle = createStyle({
    className: "flex flex-row items-center"
  });

  const iconContainerStyle = createStyle({
    className: "mr-2 flex items-center justify-center"
  });

  const titleTextStyle = createStyle({
    className: "text-base font-medium text-gray-800",
    style: {
      fontSize: 16,
      fontWeight: "500",
      color: "#1f2937"
    }
  });

  const rightIconStyle = createStyle({
    className: "flex items-center justify-center"
  });

  return (
    <View style={containerStyle} {...props}>
      <TouchableOpacity
        style={touchableStyle}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={leftContentStyle}>
          {icon && (
            <View style={iconContainerStyle}>
              <Ionicons name="close-circle" size={20} color="#000" />
            </View>
          )}
          <Text style={titleTextStyle}>{title}</Text>
        </View>

        <View style={rightIconStyle}>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardSection;