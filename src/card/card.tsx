import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from "../Button";
import { CardProps } from "./card.type";

const Card: React.FC<CardProps> = ({
  title = "Card Title",
  label = "Label",
  cardTitle = true,
  button = true,
  children
}) => {
  return (
    <View className="px-4 bg-white overflow-hidden border border-gray-200 shadow-sm mb-4 w-[80vw]">
      <View className={`flex ${cardTitle ? "flex-row" : "flex-row-reverse"} justify-between px-0 py-2`}>
        {cardTitle && (
          <View className="px-0 py-2">
            <Text className="font-medium text-gray-800">{title}</Text>
          </View>
        )}
        {button && (
          <View className="">
            <RectButton
              label={label}
              onPress={() => console.log("Button clicked")}
              size="small"
              variant="secondary"
            />
          </View>
        )}
      </View>

      <View className="relative mb-4 p-4 bg-green-50 min-h-32 flex-grow">
        {children}
      </View>
    </View>
  );
};

export default Card;