import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from "../Button";
import { DialogProps } from "./dialog.type";

const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  buttonLabel,
  onButtonPress,
  children
}) => {
  return (
    <View className="absolute inset-0 flex items-center justify-center bg-black/50">
      <View className="bg-white  shadow-lg w-80 max-w-full overflow-hidden">
        <View className="w-full h-40 flex items-center justify-center bg-gray-100">
          {children}
        </View>
        
        <View className="p-4">
          <Text className="text-base font-semibold text-gray-800 mb-2">
            {title}
          </Text>
          
          <Text className="text-xs text-gray-600 mb-4">
            {description}
          </Text>
          
          <View className="mt-2">
            <RectButton label={buttonLabel} onPress={onButtonPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dialog;