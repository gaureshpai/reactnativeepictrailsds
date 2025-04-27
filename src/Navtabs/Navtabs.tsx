import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavTabProps } from './Navtabs.type';

const NavTabs: React.FC<NavTabProps> = ({
  tabs,
  initialActiveIndex = 0,
  onTabChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleTabPress = (index: number) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <View className="flex-row absolute top-0 w-full bg-gray-100 rounded-lg p-1">
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          className={`flex-1 py-2 px-4 items-center justify-center ${activeIndex === index
              ? 'bg-white rounded-md shadow'
              : 'bg-transparent'
            }`}
          onPress={() => handleTabPress(index)}
        >
          <Text
            className={`text-sm font-medium ${activeIndex === index ? 'text-black' : 'text-gray-500'
              }`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavTabs;