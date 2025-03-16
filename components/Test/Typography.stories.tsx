import React from "react";
import { Text, View } from "react-native";

export default {
    title: "Design System/Typography",
    parameters: {
        layout: "centered",
    },
};

const TypographyExample = ({ text, style }) => (
    <View style={{ marginBottom: 10 }}>
        <Text style={style}>{text}</Text>
    </View>
);

export const Typography = () => (
    <View style={{ padding: 20 }}>
        <TypographyExample text="Heading 1" style={{ fontSize: 32, fontWeight: "bold" }} />
        <TypographyExample text="Heading 2" style={{ fontSize: 24, fontWeight: "bold" }} />
        <TypographyExample text="Body Text" style={{ fontSize: 16 }} />
        <TypographyExample text="Caption Text" style={{ fontSize: 12, color: "gray" }} />
    </View>
);
