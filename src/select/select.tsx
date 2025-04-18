import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SelectProps, SelectValue } from './select.type';
const Select: React.FC<SelectProps> = ({
  label,
  values,
  placeholder,
  prefix = false,
  messageType = 'none',
  message,
  onChange,
  disabled = false,
  containerStyle,
}) => {
  const [selectedValue, setSelectedValue] = useState<SelectValue | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width, height } = useWindowDimensions();
  const [modalMaxHeight, setModalMaxHeight] = useState<number>(height * 0.6);

  // Recalculate modal height when orientation changes
  useEffect(() => {
    setModalMaxHeight(height * 0.6);
  }, [height]);

  const handleSelect = (value: SelectValue) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

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

  const getBorderColor = () => {
    switch (messageType) {
      case 'error':
        return 'border-red-500';
      case 'help':
        return 'border-black';
      default:
        return 'border-0';
    }
  };

  const getTextColor = () => {
    if (selectedValue) {
      return 'text-black';
    }
    return 'text-gray-500';
  };

  const getMessageTextColor = () => {
    return messageType === 'error' ? '#BB032A' : '#000000';
  };

  const getFlagImage = (flagCode?: string) => {
    if (!prefix || !flagCode) return null;
    
    return (
      <View className="flex-row bg-white items-center mr-2">
        <View className="w-12 h-8 bg-orange-500 border border-gray-300 rounded-sm items-center justify-center overflow-hidden">

        </View>
      </View>
    );
  };

  // Calculate adaptive font size based on screen width
  const getFontSize = () => {
    if (width < 375) return 'text-xs'; // Small phones
    if (width < 768) return 'text-sm'; // Regular phones
    return 'text-base'; // Tablets and larger
  };

  return (
    <View className={`mb-4 bg-white p-2 ${containerStyle || ''}`}
        style={{ width: '70%' }}
    >
      <Text className={`font-medium text-black mb-1 ${getFontSize()}`}>{label}</Text>
      
      <TouchableOpacity 
        onPress={toggleDropdown}
        disabled={disabled}
        className={`flex-row items-center justify-between bg-gray-100 border rounded-md ${getBorderColor()} ${disabled ? 'opacity-50' : ''} ${prefix ? 'p-2' : 'p-4'}`}
      >
        <View className="flex-row items-center flex-1">
          {selectedValue && prefix && getFlagImage(selectedValue.flagCode)}
          <Text className={`${getTextColor()} ${getFontSize()} flex-shrink font-semibold`} numberOfLines={1} ellipsizeMode="tail">
            {selectedValue ? selectedValue.label : placeholder || 'Select an option'}
          </Text>
        </View>
        <Ionicons 
          name={isOpen ? "chevron-up" : "chevron-down"} 
          size={width < 375 ? 14 : 16} 
          color="#6B7280" 
          style={{ marginLeft: 8 }} 
        />
      </TouchableOpacity>
      
      {message && (
        <View className="flex-row items-center mt-2 px-1">
          {getMessageIcon()}
          <Text className={`text-xs`}
                style={{color: getMessageTextColor()}}
            >{message}</Text>
        </View>
      )}

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity 
          style={StyleSheet.absoluteFill}
          onPress={() => setIsOpen(false)}
          activeOpacity={1}
          className="bg-white bg-opacity-30"
        >
          <View 
            style={{ 
              maxHeight: modalMaxHeight,
              minWidth: `${Math.max(70, Math.min(90, width * 0.7 / (width / 100)))}%`, // Min width 70vw, max 90%
              marginHorizontal: 'auto',
              marginTop: height * 0.15,
              alignSelf: 'center'
            }}
            className="bg-white rounded-md shadow-lg overflow-hidden"
          >
            <FlatList
              data={values}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  className={`border-b border-gray-200 flex-row items-center p-4`}
                >
                  {prefix && getFlagImage(item.flagCode)}
                  <Text className={getFontSize()}>{item.label}</Text>
                </TouchableOpacity>
              )}
              initialNumToRender={10}
              maxToRenderPerBatch={15}
              windowSize={10}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Select;