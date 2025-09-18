import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavTabProps } from './Navtabs.type';
import { createStyle } from '../utils/styleCompat';

const NavTabs: React.FC<NavTabProps> = ({
  tabs,
  initialActiveIndex = 0,
  onTabChange,
  className,
  style,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleTabPress = (index: number) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const containerStyle = createStyle({
    className: `${className || ''} flex-row absolute top-0 w-full bg-gray-100 rounded-lg p-1`,
    style: [
      {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#f3f4f6',
        borderRadius: 8,
        padding: 4
      },
      style
    ].filter(Boolean)
  });

  return (
    <View style={containerStyle} {...props}>
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        
        const tabStyle = createStyle({
          className: `flex-1 py-2 px-4 items-center justify-center ${isActive ? 'bg-white rounded-md shadow' : 'bg-transparent'}`,
          style: {
            flex: 1,
            paddingVertical: 8,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isActive ? '#ffffff' : 'transparent',
            borderRadius: isActive ? 6 : 0,
            shadowColor: isActive ? '#000' : 'transparent',
            shadowOffset: isActive ? { width: 0, height: 1 } : { width: 0, height: 0 },
            shadowOpacity: isActive ? 0.1 : 0,
            shadowRadius: isActive ? 3 : 0,
            elevation: isActive ? 2 : 0
          }
        });

        const textStyle = createStyle({
          className: `text-sm font-medium ${isActive ? 'text-black' : 'text-gray-500'}`,
          style: {
            fontSize: 14,
            fontWeight: '500',
            color: isActive ? '#000000' : '#6b7280'
          }
        });

        return (
          <TouchableOpacity
            key={index}
            style={tabStyle}
            onPress={() => handleTabPress(index)}
          >
            <Text style={textStyle}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavTabs;