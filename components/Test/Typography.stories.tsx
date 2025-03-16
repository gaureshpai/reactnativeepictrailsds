import React from "react";
import { Text, View } from "react-native";

export default {
    title: "Design System/Foundations",
    parameters: {
        layout: "centered",
    },
};

const TypographyExample = ({ text, className }) => (
    <View className="mb-2">
        <Text className={className}>{text}</Text>
    </View>
);

export const Typography = () => (
    <View className="p-5">
        {/* Title */}
        <TypographyExample text="Small" className="font-uber font-bold text-small leading-small" />
        {/* Metadata */}
        <View className="flex-row space-x-5 mb-5">
            <Text className="font-uber text-small text-gray-600">Family: <Text className="font-bold">Uber Move (700)</Text></Text>
            <Text className="font-uber text-small text-gray-600">Size: 44px</Text>
            <Text className="font-uber text-small text-gray-600">Line height: 52px</Text>
        </View>
        {/* Main Text */}
        <TypographyExample
            text="We ignite opportunity by setting the world in motion."
            className="font-uber font-bold text-xxlarge leading-xxlarge"
        />
        {/* Numbers */}
        <TypographyExample
            text="0123456789"
            className="font-uber font-bold text-xxlarge leading-xxlarge"
        />
    </View>
);