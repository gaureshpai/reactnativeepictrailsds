import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyle } from '../utils/styleCompat';
import { PressableComponentProps } from '../types/common';

export interface SelectValue {
  value: string;
  label: string;
  flagCode?: string;
}

export interface SelectProps extends PressableComponentProps {
  label: string;
  values: SelectValue[];
  placeholder?: string;
  prefix?: boolean;
  messageType?: 'none' | 'error' | 'help';
  message?: string;
  onChange?: (value: SelectValue) => void;
  disabled?: boolean;
  containerStyle?: string;
}

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
  className,
  style,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<SelectValue | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width, height } = useWindowDimensions();
  const [modalMaxHeight, setModalMaxHeight] = useState<number>(height * 0.6);

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

  const getBorderStyles = () => {
    switch (messageType) {
      case 'error':
        return {
          className: 'border-red-500',
          style: { borderColor: '#ef4444', borderWidth: 1 }
        };
      case 'help':
        return {
          className: 'border-black',
          style: { borderColor: '#000000', borderWidth: 1 }
        };
      default:
        return {
          className: 'border-0',
          style: { borderWidth: 0 }
        };
    }
  };

  const getTextColor = () => {
    if (selectedValue) {
      return { color: '#000000' };
    }
    return { color: '#6b7280' };
  };

  const getMessageTextColor = () => {
    return messageType === 'error' ? '#BB032A' : '#000000';
  };

  const getFlagImage = (flagCode?: string) => {
    if (!prefix || !flagCode) return null;

    const flagContainerStyle = createStyle({
      className: "flex-row bg-white items-center mr-2",
      style: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginRight: 8
      }
    });

    const flagStyle = createStyle({
      className: "w-12 h-8 bg-orange-500 border border-gray-300 rounded-sm items-center justify-center overflow-hidden",
      style: {
        width: 48,
        height: 32,
        backgroundColor: '#f97316',
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    });

    return (
      <View style={flagContainerStyle}>
        <View style={flagStyle} />
      </View>
    );
  };

  const getFontSize = () => {
    if (width < 375) return { fontSize: 12 };
    if (width < 768) return { fontSize: 14 };
    return { fontSize: 16 };
  };

  const borderStyles = getBorderStyles();
  const fontSize = getFontSize();

  const mainContainerStyle = createStyle({
    className: `${className || ''} mb-4 bg-white p-2 ${containerStyle || ''}`,
    style: [
      {
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 8,
        width: '70%'
      },
      style
    ].filter(Boolean)
  });

  const labelStyle = createStyle({
    className: "font-medium text-black mb-1",
    style: [
      {
        fontWeight: '500',
        color: '#000000',
        marginBottom: 4
      },
      fontSize
    ].filter(Boolean)
  });

  const touchableStyle = createStyle({
    className: `flex-row items-center justify-between bg-gray-100 border rounded-md ${borderStyles.className} ${disabled ? 'opacity-50' : ''} ${prefix ? 'p-2' : 'p-4'}`,
    style: [
      {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3f4f6',
        borderRadius: 6,
        padding: prefix ? 8 : 16
      },
      borderStyles.style,
      disabled && { opacity: 0.5 }
    ].filter(Boolean)
  });

  const textContainerStyle = createStyle({
    className: "flex-row items-center flex-1",
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    }
  });

  const textStyle = createStyle({
    className: "flex-shrink font-semibold",
    style: [
      {
        flexShrink: 1,
        fontWeight: '600'
      },
      getTextColor(),
      fontSize
    ].filter(Boolean)
  });

  const messageContainerStyle = createStyle({
    className: "flex-row items-center mt-2 px-1",
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      paddingHorizontal: 4
    }
  });

  const messageTextStyle = createStyle({
    className: "text-xs",
    style: {
      fontSize: 12,
      color: getMessageTextColor(),
      marginLeft: 4
    }
  });

  const modalContentStyle = createStyle({
    className: "bg-white rounded-md shadow-lg overflow-hidden",
    style: {
      backgroundColor: 'white',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      overflow: 'hidden',
      maxHeight: modalMaxHeight,
      minWidth: `${Math.max(70, Math.min(90, width * 0.7 / (width / 100)))}%`,
      marginTop: height * 0.15,
      alignSelf: 'center'
    }
  });

  const itemStyle = createStyle({
    className: "border-b border-gray-200 flex-row items-center p-4",
    style: {
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16
    }
  });

  const itemTextStyle = createStyle({
    style: fontSize
  });

  return (
    <View style={mainContainerStyle} {...props}>
      <Text style={labelStyle}>{label}</Text>

      <TouchableOpacity
        onPress={toggleDropdown}
        disabled={disabled}
        style={touchableStyle}
      >
        <View style={textContainerStyle}>
          {selectedValue && prefix && getFlagImage(selectedValue.flagCode)}
          <Text 
            style={textStyle}
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
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
        <View style={messageContainerStyle}>
          {getMessageIcon()}
          <Text style={messageTextStyle}>
            {message}
          </Text>
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
        >
          <View style={modalContentStyle}>
            <FlatList
              data={values}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={itemStyle}
                >
                  {prefix && getFlagImage(item.flagCode)}
                  <Text style={itemTextStyle}>{item.label}</Text>
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

