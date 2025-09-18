import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { createStyle } from '../utils/styleCompat';
import { BaseComponentProps, ComponentSize, ComponentState } from '../types/common';

export interface InputProps extends BaseComponentProps, Omit<TextInputProps, 'style'> {
  label?: string;
  hint?: string;
  size?: ComponentSize;
  state?: 'default' | 'success' | 'error';
  curved?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  hint,
  size = 'medium',
  state = 'default',
  curved = false,
  required = false,
  className,
  style,
  disabled,
  ...textInputProps
}) => {
  const sizes = {
    small: 'text-sm p-2',
    medium: 'text-base p-3',
    large: 'text-lg p-4'
  };

  const getBorderColor = () => {
    switch (state) {
      case 'success':
        return 'border-green-500';
      case 'error':
        return 'border-red-500';
      default:
        return 'border-gray-300';
    }
  };

  const getHintColor = () => {
    switch (state) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const containerStyle = createStyle({
    className: 'flex flex-col gap-2',
    style
  });

  const labelStyle = createStyle({
    className: 'text-sm font-medium text-gray-700'
  });

  const inputStyle = createStyle({
    className: `${sizes[size]} bg-white border-2 ${getBorderColor()} ${curved ? 'rounded-md' : ''} ${disabled ? 'bg-gray-100 text-gray-500' : 'text-gray-900'}`,
    style: {
      outlineWidth: 0, // Remove web outline
    }
  });

  const hintStyle = createStyle({
    className: `text-xs mt-1 ${getHintColor()}`
  });

  return (
    <View style={containerStyle}>
      {label && (
        <View>
          <Text style={labelStyle}>
            {label}
            {required && <Text style={createStyle({ className: 'text-red-500' })}>*</Text>}
          </Text>
        </View>
      )}
      
      <TextInput
        style={inputStyle}
        editable={!disabled}
        placeholderTextColor={disabled ? '#9CA3AF' : '#6B7280'}
        {...textInputProps}
      />
      
      {hint && (
        <Text style={hintStyle}>
          {hint}
        </Text>
      )}
    </View>
  );
};

export default Input;

