import React from 'react';
import { View, ScrollView } from 'react-native';
import { createStyle } from '../utils/styleCompat';
import { ContainerComponentProps } from '../types/common';

export interface SkeletonProps extends ContainerComponentProps {
}

const SkeletonLoader: React.FC<SkeletonProps> = ({ 
  className = "",
  style,
  ...props
}) => {
  const containerStyle = createStyle({
    className: `${className || ''} flex-1 bg-white p-4 w-full`,
    style: [
      {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
        width: '100%'
      },
      style
    ].filter(Boolean)
  });

  const avatarStyle = createStyle({
    className: "h-16 w-16 rounded-full bg-gray-100 mb-4",
    style: {
      height: 64,
      width: 64,
      borderRadius: 32,
      backgroundColor: '#f3f4f6',
      marginBottom: 16
    }
  });

  const titleStyle = createStyle({
    className: "h-4 bg-gray-100 rounded-md my-4 w-full",
    style: {
      height: 16,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      marginVertical: 16,
      width: '100%'
    }
  });

  const rowStyle = createStyle({
    className: "flex-row items-center mb-3",
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12
    }
  });

  const smallBoxStyle = createStyle({
    className: "h-4 w-4 bg-gray-100 rounded-sm mr-2",
    style: {
      height: 16,
      width: 16,
      backgroundColor: '#f3f4f6',
      borderRadius: 2,
      marginRight: 8
    }
  });

  const lineStyle = createStyle({
    className: "h-4 bg-gray-100 rounded-md flex-1",
    style: {
      height: 16,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      flex: 1
    }
  });

  const imageStyle = createStyle({
    className: "h-40 bg-gray-100 rounded-md w-full my-4",
    style: {
      height: 160,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      width: '100%',
      marginVertical: 16
    }
  });

  const cardStyle = createStyle({
    className: "h-52 bg-gray-100 rounded-md w-full mb-4",
    style: {
      height: 208,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      width: '100%',
      marginBottom: 16
    }
  });

  const buttonStyle = createStyle({
    className: "h-8 bg-gray-100 rounded-md w-full mb-4",
    style: {
      height: 32,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      width: '100%',
      marginBottom: 16
    }
  });

  const textLineStyle = createStyle({
    className: "h-4 bg-gray-100 rounded-md mb-3 w-full",
    style: {
      height: 16,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      marginBottom: 12,
      width: '100%'
    }
  });

  const shortLineStyle = createStyle({
    className: "h-4 bg-gray-100 rounded-md w-3/4",
    style: {
      height: 16,
      backgroundColor: '#f3f4f6',
      borderRadius: 6,
      width: '75%'
    }
  });

  return (
    <ScrollView style={containerStyle} {...props}>
      <View style={avatarStyle} />
      
      <View style={titleStyle} />
      
      {[1, 2, 3].map((_, index) => (
        <View key={`row-${index}`} style={rowStyle}>
          <View style={smallBoxStyle} />
          <View style={lineStyle} />
        </View>
      ))}
      
      <View style={imageStyle} />
      
      <View style={cardStyle} />
      
      <View style={buttonStyle} />
      
      {[1, 2, 3].map((_, index) => (
        <View key={`line-${index}`} style={textLineStyle} />
      ))}
      
      <View style={shortLineStyle} />
    </ScrollView>
  );
};

export default SkeletonLoader;

