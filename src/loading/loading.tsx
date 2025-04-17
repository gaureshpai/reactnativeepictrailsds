import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { LoadingProps } from './loading.type';
const Loading: React.FC<LoadingProps> = ({
  description = "Please wait, content of the page is loading..."
}) => {
  return (
    <View className="flex-1 items-center justify-center w-full h-full bg-white">
      {/* Custom Loading Indicator */}
      <View className="w-20 h-20">
        <View className="w-full h-full items-center justify-center">
          <ActivityIndicator
            size="large"
            color="#000000"
          />
        </View>
      </View>
      
      {/* Loading Text */}
      <Text className="text-gray-500 text-center px-4">
        {description}
      </Text>
    </View>
  );
};

export default Loading;