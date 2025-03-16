import React from "react";
import { View, Text } from "react-native";

const colors = {
    primary: "#3498db",
    secondary: "#2ecc71",
    danger: "#e74c3c",
    warning: "#f1c40f",
    success: "#2ecc71",
    background: "#ecf0f1",
};

export default {
    title: "Design System/Colors",
    parameters: {
        layout: "centered",
    },
};

const ColorBox = ({ name, hex }) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <View style={{ width: 50, height: 50, backgroundColor: hex, marginRight: 10 }} />
        <Text>{name} - {hex}</Text>
    </View>
);

export const Colors = () => (
    <View style={{ padding: 20 }}>
        {Object.entries(colors).map(([name, hex]) => (
            <ColorBox key={name} name={name} hex={hex} />
        ))}
    </View>
);
