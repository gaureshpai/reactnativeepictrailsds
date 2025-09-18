import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

export interface LoadingProps extends ContainerComponentProps {
  description?: string;
}

const Loading: React.FC<LoadingProps> = ({
  description = "Please wait, content of the page is loading...",
  className,
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: `${className || ''} flex-1 items-center justify-center w-full h-full bg-white`,
    style: [
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
      },
      style
    ].filter(Boolean)
  });

  const indicatorContainerStyle = createStyle({
    className: "w-20 h-20",
    style: {
      width: 80,
      height: 80
    }
  });

  const indicatorWrapperStyle = createStyle({
    className: "w-full h-full items-center justify-center",
    style: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  const textStyle = createStyle({
    className: "text-gray-500 text-center px-4",
    style: {
      color: '#6b7280',
      textAlign: 'center',
      paddingHorizontal: 16
    }
  });

  return (
    <View style={containerStyle} {...props}>
      <View style={indicatorContainerStyle}>
        <View style={indicatorWrapperStyle}>
          <ActivityIndicator
            size="large"
            color="#000000"
          />
        </View>
      </View>

      <Text style={textStyle}>
        {description}
      </Text>
    </View>
  );
};

export default Loading;

