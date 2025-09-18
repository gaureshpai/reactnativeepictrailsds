import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStyle } from '../utils/styleCompat';
import { PressableComponentProps } from '../types/common';

export interface CollapseProps extends PressableComponentProps {
  title: string;
  text?: string;
  initialCollapsed?: boolean;
  children?: React.ReactNode;
}

const Collapsible: React.FC<CollapseProps> = ({
  title,
  text,
  initialCollapsed = false,
  children,
  className,
  style,
  ...props
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

  const containerStyle = createStyle({
    className: `${className || ''} mb-4 bg-white py-2 border-b border-gray-400`,
    style: [
      {
        marginBottom: 16,
        backgroundColor: 'white',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#9ca3af'
      },
      style
    ].filter(Boolean)
  });

  const headerStyle = createStyle({
    className: "flex-row justify-between items-center px-2 py-3 border-gray-200",
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 12,
      borderColor: '#e5e7eb'
    }
  });

  const titleStyle = createStyle({
    className: "text-lg font-medium",
    style: {
      fontSize: 18,
      fontWeight: '500',
      color: '#252A31'
    }
  });

  const contentContainerStyle = createStyle({
    className: "p-4",
    style: [
      {
        padding: 16,
        width: '90%'
      },
      !collapsed && { backgroundColor: '#f0fdf4' }
    ].filter(Boolean)
  });

  const textStyle = createStyle({
    className: "text-gray-700",
    style: {
      color: '#374151'
    }
  });

  return (
    <View style={containerStyle} {...props}>
      <TouchableOpacity 
        onPress={toggleCollapse}
        style={headerStyle}
      >
        <Text style={titleStyle}>
          {title}
        </Text>
        <Ionicons 
          name={collapsed ? 'chevron-down' : 'chevron-up'} 
          size={24} 
          color="#252A31"
        />
      </TouchableOpacity>

      <Animated.View
        style={{
          overflow: 'hidden',
          opacity: height,
          maxHeight: height.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 500]
          }),
        }}
      >
        <View style={contentContainerStyle}>
          {text && <Text style={textStyle}>{text}</Text>}
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default Collapsible;

