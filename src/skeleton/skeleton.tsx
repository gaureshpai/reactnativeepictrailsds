import React from 'react';
import { View, ScrollView } from 'react-native';
import { SkeletonProps } from './skeleton.type';
export const SkeletonLoader: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <ScrollView className={`flex-1 bg-white p-4 ${className} w-full`}>
      {/* Circle */}
      <View className="h-16 w-16 rounded-full bg-gray-100 mb-4" />
      
      {/* One full line */}
      <View className="h-4 bg-gray-100 rounded-md my-4 w-full" />
      
      {/* 3 rows with small square + line */}
      {[1, 2, 3].map((_, index) => (
        <View key={`row-${index}`} className="flex-row items-center mb-3">
          <View className="h-4 w-4 bg-gray-100 rounded-sm mr-2" />
          <View className="h-4 bg-gray-100 rounded-md flex-1" />
        </View>
      ))}
      
      {/* First rectangle */}
      <View className="h-40 bg-gray-100 rounded-md w-full my-4" />
      
      {/* Second rectangle (taller) */}
      <View className="h-52 bg-gray-100 rounded-md w-full mb-4" />
      
      {/* Line with bigger height */}
      <View className="h-8 bg-gray-100 rounded-md w-full mb-4" />
      
      {/* 3 normal lines */}
      {[1, 2, 3].map((_, index) => (
        <View key={`line-${index}`} className="h-4 bg-gray-100 rounded-md mb-3 w-full" />
      ))}
      
      {/* 75% width line */}
      <View className="h-4 bg-gray-100 rounded-md w-3/4" />
    </ScrollView>
  );
};

export default SkeletonLoader;