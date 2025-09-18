import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStyle } from '../utils/styleCompat';
import { PressableComponentProps } from '../types/common';

export interface TabsProps extends PressableComponentProps {
  label: string;
  placeholder?: string;
  value?: string;
  messageType?: 'none' | 'error' | 'help';
  message?: string;
  onPress?: () => void;
}

const Tabs: React.FC<TabsProps> = ({
  label,
  placeholder = 'Placeholder',
  value = '',
  messageType = 'none',
  message = '',
  onPress = () => {},
  className,
  style,
  ...props
}) => {
  const hasValue = value.trim().length > 0;
  
  const getBorderStyles = () => {
    switch (messageType) {
      case 'error':
        return {
          className: 'border border-red-500 rounded-md',
          style: { borderWidth: 1, borderColor: '#ef4444', borderRadius: 6 }
        };
      case 'help':
        return {
          className: 'border border-black rounded-md',
          style: { borderWidth: 1, borderColor: '#000000', borderRadius: 6 }
        };
      default:
        return {
          className: 'border-0 rounded-md',
          style: { borderWidth: 0, borderRadius: 6 }
        };
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

  const getMessageTextColor = () => {
    return messageType === 'error' ? '#BB032A' : '#000000';
  };

  const borderStyles = getBorderStyles();

  const containerStyle = createStyle({
    className: `${className || ''} mb-4 bg-white p-2`,
    style: [
      {
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 8,
        width: '48%'
      },
      style
    ].filter(Boolean)
  });

  const labelStyle = createStyle({
    className: "text-sm font-medium text-black mb-1",
    style: {
      fontSize: 14,
      fontWeight: '500',
      color: '#000000',
      marginBottom: 4
    }
  });

  const touchableStyle = createStyle({
    className: `w-full min-h-32 p-2 ${borderStyles.className} bg-gray-100`,
    style: [
      {
        width: '100%',
        minHeight: 128,
        padding: 8,
        backgroundColor: '#f3f4f6'
      },
      borderStyles.style
    ].filter(Boolean)
  });

  const textStyle = createStyle({
    className: hasValue ? 'text-black font-medium' : 'text-gray-500',
    style: {
      color: hasValue ? '#000000' : '#6b7280',
      fontWeight: hasValue ? '500' : 'normal'
    }
  });

  const messageContainerStyle = createStyle({
    className: "flex-row items-center mt-1 space-x-1",
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4
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

  return (
    <View style={containerStyle} {...props}>
      <Text style={labelStyle}>{label}</Text>
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.7}
        style={touchableStyle}
      >
        <Text style={textStyle}>
          {hasValue ? value : placeholder}
        </Text>
      </TouchableOpacity>
      {messageType !== 'none' && message && (
        <View style={messageContainerStyle}>
          {getMessageIcon()}
          <Text style={messageTextStyle}>
            {message}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Tabs;

