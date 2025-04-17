import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RectButton } from "../Button";
import { AndroidModalSheetProps } from './androidmodalsheets.type';
const AndroidModalSheet: React.FC<AndroidModalSheetProps> = ({
  title,
  label,
  action = 1,
  compact = false,
  onClose,
  onButtonPress,
  onClipboard,
  onForward,
  children,
}) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-800 bg-opacity-50 w-full ">
      <View className="flex-1 justify-end">
        <View className="bg-white overflow-hidden w-full h-full">
          {/* Header */}
          <View className="flex-row justify-between items-center px-4 py-3 shadow shadow-gray-400">
            <View className="flex-row gap-4 items-center">
            <TouchableOpacity onPress={onClose} className="p-1">
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            
            <Text className="text-base font-medium">{title}</Text>
            </View>
            <View className="flex-row items-center">
              {action >= 3 && (
                <TouchableOpacity onPress={onClipboard} className="p-1 mr-2">
                  <Ionicons name="clipboard" size={24} color="#000" />
                </TouchableOpacity>
              )}
              {action >= 2 && (
                <TouchableOpacity onPress={onForward} className="p-1">
                  <Ionicons name="arrow-forward" size={24} color="#000" />
                </TouchableOpacity>
              )}
              {action === 1 && <View className="w-6" />}
            </View>
          </View>
          
          {/* Content */}
          <View className="p-2 flex-1">
            {!compact && (
              <Text className="text-xl px-1 font-semibold mb-4">{title}</Text>
            )}
            <View className="bg-green-50 p-2 flex-1">
              {children}
            </View>
          </View>
          
          {/* Bottom Button */}
          <View className="px-2 py-3">
            <RectButton label={label} onPress={onButtonPress} />
          </View>
          
          {/* Bottom Indicator */}
          <View className="items-center mb-2 pt-1">
            <View className="w-20 h-1 bg-gray-800 rounded-full" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AndroidModalSheet;