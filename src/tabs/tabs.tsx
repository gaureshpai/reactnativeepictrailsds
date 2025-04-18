import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabsProps } from './tabs.type';
const Tabs: React.FC<TabsProps> = ({
  label,
  placeholder = 'Placeholder',
  value = '',
  messageType = 'none',
  message = '',
  onPress = () => {},
}) => {
  // Determine if showing placeholder or value
  const hasValue = value.trim().length > 0;
  
  // Get border style based on message type
  const getBorderStyle = () => {
    switch (messageType) {
      case 'error':
        return 'border border-red-500 rounded-md';
      case 'help':
        return 'border border-black rounded-md';
      default:
        return 'border-0 rounded-md';
    }
  };

  // Get message icon based on type
  const getMessageIcon = () => {
    switch (messageType) {
      case 'error':
        return <Ionicons name="alert-circle" size={16} color="#BB032A" />;
      case 'help':
        return <Ionicons name="information-circle" size={16} color="#000000" />;
      default:
        return null;
    }
  };

  const getMessageTextColor = () => {
    return messageType === 'error' ? '#BB032A' : '#000000';
  };

  return (
    <View className="mb-4 bg-white p-2"
    style={{width:"48%"}}>
      <Text className="text-sm font-medium text-black mb-1">{label}</Text>
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.7}
        className={`w-full min-h-32 p-2 ${getBorderStyle()} bg-gray-100`}
      >
        <Text className={hasValue ? 'text-black font-medium' : 'text-gray-500'}>
          {hasValue ? value : placeholder}
        </Text>
      </TouchableOpacity>
      {messageType !== 'none' && message && (
        <View className="flex-row items-center mt-1 space-x-1">
          {getMessageIcon()}
          <Text className={`text-xs`}
          style={{color: getMessageTextColor()}}
          >{message}</Text>
        </View>
      )}
    </View>
  );
};

export default Tabs;