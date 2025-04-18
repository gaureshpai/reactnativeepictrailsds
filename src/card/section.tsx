import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CardSectionProps } from './card.type';
const CardSection: React.FC<CardSectionProps> = ({
  title = "Section Title",
  icon = false,
  onPress = () => console.log('Section pressed')
}) => {
  return (
    <View className="w-full bg-white">
      <TouchableOpacity
        className="flex flex-row items-center justify-between py-3 px-2 border-b border-gray-200"
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View className="flex flex-row items-center">
          {icon && (
            <View className="mr-2 flex items-center justify-center">
              <Ionicons name="close-circle" size={20} color="#000" />
            </View>
          )}
          <Text className="text-base font-medium text-gray-800">{title}</Text>
        </View>
        
        <View className="flex items-center justify-center">
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardSection;