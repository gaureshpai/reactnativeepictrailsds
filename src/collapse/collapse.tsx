import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CollapsibleProps } from './collapse.type';
const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  text,
  initialCollapsed = false,
  children
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [height] = useState(new Animated.Value(initialCollapsed ? 0 : 1));

  useEffect(() => {
    Animated.timing(height, {
      toValue: collapsed ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [collapsed, height]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View className="mb-4 bg-white py-2  border-b border-gray-400">
      <TouchableOpacity 
        onPress={toggleCollapse}
        className="flex-row justify-between items-center px-2 py-3 border-gray-200"
      >
        <Text className="text-lg font-medium text-[#252A31]">
          {title}
        </Text>
        <Ionicons 
          name={collapsed ? 'chevron-down' : 'chevron-up'} 
          size={24} 
          color="#252A31"
        />
      </TouchableOpacity>

      <Animated.View
        className={`overflow-hidden ${collapsed ? 'h-0' : ''}`}
        style={{
          opacity: height,
          maxHeight: height.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 500] // Adjust max height as needed
          }),
        }}
      >
        <View className={`p-4 ${!collapsed ? 'bg-green-50' : ''} w-[90vw]`}>
          {text && <Text className="text-gray-700">{text}</Text>}
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default Collapsible;

