import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SegmentedSwitchIOSProps } from './segmentedswitchios.type';

const SegmentedSwitchIOS: React.FC<SegmentedSwitchIOSProps> = ({
  title,
  items,
  selectedIndex = null,
  messageType = 'none',
  message = '',
  onChange
}) => {
  const [selected, setSelected] = useState<number | null>(selectedIndex);
  const { width } = useWindowDimensions();
  
  // Calculate responsive sizes based on screen width
  const fontSize = width < 360 ? 'text-sm' : 'text-base';
  const padding = width < 360 ? 'py-2' : 'py-3';

  const handleSelect = (index: number) => {
    setSelected(index);
    if (onChange) {
      onChange(index);
    }
  };  

  const getIconName = () => {
    if (messageType === 'error') return 'alert-circle';
    return 'information-circle';
  };

  return (
    <View className="mb-4 w-full bg-white p-4 max-w-lg">
      <Text className={`${fontSize} font-medium text-black mb-1`}>{title}</Text>
      <View className={`flex-row ${selected === null ? 'border-2 border-gray-300' : messageType === 'error' ? 'border-2 p-1 border-red-500' : 'p-1 bg-gray-100'}  rounded-lg w-full`}
        style={{ borderColor: `${messageType === 'error' ? '#BB032A' : 'gray'}`, }}
      >
        {items.map((item, index) => (
          <View
            key={index}
            className={`flex-1 ${padding} items-center justify-center
              ${index === 0 ? 'rounded-l-lg' : ''}
              ${index === items.length - 1 ? 'rounded-r-lg' : ''}
              ${index < items.length - 1 ? selected === null ? 'border-r-2 border-gray-400' : 'border-r-0':''}
              ${index === selected ? 'bg-white z-10 shadow-md shadow-gray-400 rounded-lg' : ''} 
            `}
            style={{ borderColor: `${messageType === 'error' ? '#BB032A' : 'gray'}` }}
          >
            <TouchableOpacity 
            onPress={() => handleSelect(index)}>
            <Text className={`${fontSize} font-medium ${index === selected ? 'text-black' : selected === null ? 'text-black' : 'text-gray-600'}`}>
              {item}
            </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      
      {messageType !== 'none' && message && (
        <View className="flex-row items-center mt-1">
          <Ionicons name={getIconName()} size={width < 360 ? 14 : 16} color={messageType === 'error' ? '#BB032A' : 'black'} />
          <Text className={`ml-1 ${width < 360 ? 'text-xs' : 'text-sm'}`}
            style={{ color: `${messageType === 'error' ? '#BB032A' : 'black'}` }}
          >{message}</Text>
        </View>
      )}
    </View>
  );
};

export default SegmentedSwitchIOS;