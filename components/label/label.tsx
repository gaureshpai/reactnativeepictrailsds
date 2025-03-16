import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { View, Text, TouchableOpacity } from 'react-native';

export type LabelType = 'checkbox' | 'radio' | 'toggle';

export interface LabelProps {
  type: LabelType;
  label?: string;
  checked?: boolean;
  disabledLabel?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
  labelClassName?: string;
}

const Label: React.FC<LabelProps> = ({
  type,
  label,
  disabledLabel = false,
  checked = false,
  disabled = false,
  onPress,
  className,
  labelClassName,
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'checkbox':
        return (
          <View className={`w-5 h-5 border-2 border-buttons-primary-default justify-center items-center ${checked ? 'bg-white' : ''} ${disabled ? 'opacity-50' : ''}`}>
            {checked && <CheckIcon className="text-black" fontSize='small' />}
          </View>
        );
      case 'radio':
        return (
          <View className={`w-5 h-5 rounded-full border-2 border-buttons-primary-default justify-center items-center ${checked ? 'bg-white' : ''} ${disabled ? 'opacity-50' : ''}`}>
            {checked && <View className="w-3 h-3 rounded-full bg-black" />}
          </View>
        );
      case 'toggle':
        return (
          <View className={`w-10 h-5 rounded-full bg-gray-100  ${disabled ? 'opacity-50' : ''}`}>
            <View className={`w-6 h-6 rounded-full -translate-y-0.5 ${checked ? 'bg-black translate-x-5' : 'bg-white'}`} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      className={`flex-row items-center my-2 ${className || ''}`}
      onPress={disabled ? undefined : onPress}
      activeOpacity={disabled ? 1 : 0.7}
    >
      {renderIcon()}
      {label && !disabledLabel && (
        <Text className={`ml-2 text-base ${disabled ? 'text-gray-500' : ''} ${labelClassName || ''} `}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Label;