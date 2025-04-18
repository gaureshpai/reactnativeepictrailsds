import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { alertStyles, AlertProps } from './alert.type';
const Alert: React.FC<AlertProps> = ({
  message,
  label = '',
  description = '',
  icon = true,
  inline = false,
  suppressed = true,
  type = 'information',
  onPrimaryPress = () => {},
  onSecondaryPress = () => {}
}) => {
  const { backgroundColor, color, secondaryColor, secondaryTextColor } = alertStyles[type];
  
  // Render inline alert
  if (inline) {
    return (
      <View 
        className="flex-row items-center bg-white p-4 w-[80vw]" 
        style={{ borderTopColor: color, borderTopWidth: 2 }}
      >
        {icon && (
          <Ionicons 
            name={alertStyles[type].icon as any} 
            size={24} 
            color={color} 
            className="mr-2"
          />
        )}
        <Text className="flex-1 text-gray-800 font-bold">{message}</Text>
        {label && (
          <TouchableOpacity
          onPress={onPrimaryPress}
          style={{ backgroundColor: color, width: '25%' }}
          className="p-2 px-8 items-center"
          activeOpacity={0.8}
        >
          <Text className="text-white">{label}</Text>
        </TouchableOpacity>
        )}
      </View>
    );
  }

  // Render standard alert
  return (
    <View className={`w-[80vw]`} style={{borderTopWidth: 2, borderTopColor: color }}>
      <View className={`${suppressed ? '' : 'bg-white'}`} style={{ backgroundColor: suppressed ? backgroundColor : 'white' }}>
        {/* Alert Header */}
        <View className="flex-row items-center p-4">
          {icon && (
            <Ionicons 
              name={alertStyles[type].icon as any} 
              size={20} 
              color={color} 
              className="mr-2"
            />
          )}
          <Text className="text-gray-800 flex-1 font-bold">{message}</Text>
        </View>

        {/* Alert Description */}
        {description && (
          <View className="px-4 pb-2">
            <Text className="text-gray-600">
              {description}
            </Text>
          </View>
        )}

        {/* Alert Buttons */}
        {label && (
          <View className="flex flex-row justify-between p-4">
          <TouchableOpacity
            onPress={onPrimaryPress}
            style={{ backgroundColor: color, width: '45%' }}
            className="p-2 px-8 items-center"
            activeOpacity={0.8}
          >
            <Text className="text-white">{label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSecondaryPress}
            style={{ backgroundColor: secondaryColor, width: '45%' }}
            className="p-2 px-8 items-center"
            activeOpacity={0.8}
          >
            <Text style={{ color: secondaryTextColor }}>{label}</Text>
          </TouchableOpacity>
        </View>    
        )}
      </View>
    </View>
  );
};

export default Alert;