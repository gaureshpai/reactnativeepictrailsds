import React from 'react';
import { View } from 'react-native';

export type ElevationType = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ElevationProps {
  type: ElevationType;
  className?: string;
  children?: React.ReactNode;
}

const Elevation: React.FC<ElevationProps> = ({
  type = 'm',
  className,
  children,
}) => {
  const getElevationStyle = () => {
    switch (type) {
      case 'xs':
        return 'shadow-sm';
      case 's':
        return 'shadow';
      case 'm':
        return 'shadow-md';
      case 'l':
        return 'shadow-lg';
      case 'xl':
        return 'shadow-xl';
      default:
        return 'shadow-md';
    }
  };

  return (
    <View className={`bg-white ${getElevationStyle()} ${className || ''}`}>
      {children}
    </View>
  );
};

export default Elevation;