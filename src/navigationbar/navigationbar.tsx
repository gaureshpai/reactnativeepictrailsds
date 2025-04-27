import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationBarProps } from './navigationbar.type';

const NavigationBar: React.FC<NavigationBarProps> = ({
  title,
  device = Platform.OS as 'ios' | 'android',
  action = 1,
  size = 'compact',
  onClose,
  onClipboard,
  onForward,
}) => {
  const isIOS = device === 'ios';
  
  const renderActions = () => {
    if (action === 1) {
      return null;
    } else if (action === 2) {
      return (
        <TouchableOpacity onPress={onForward} className="p-1">
            <Ionicons name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity>
      );
    } else if (action === 3) {
      return (
        <View className="flex-row">
            <TouchableOpacity onPress={onClipboard} className="p-1 mr-2">
                <Ionicons name="clipboard" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onForward} className="p-1">
                <Ionicons name="arrow-forward" size={24} color="#000" />
            </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <View className={`absolute bg-white pb-2 ${isIOS ? 'rounded-t-3xl' : 'shadow shadow-gray-400'} top-0 left-0 right-0 z-10`}>
      <View 
        className={`px-4`}
      >
        <View className="flex-row items-center justify-between h-12 ">
           <TouchableOpacity onPress={onClose} className="p-1">
                <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          
          <Text className={`text-lg font-medium text-black ${action === 1 ? '-ml-10' : ''}`}>
            {title}
          </Text>
          
          <View className="flex-row items-center">
            {renderActions()}
          </View>
        </View>
      </View>
      
      {size === 'expandable' && (
        <View className={`px-6 py-2`}>
          <Text className={`text-xl font-semibold text-black`}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default NavigationBar;