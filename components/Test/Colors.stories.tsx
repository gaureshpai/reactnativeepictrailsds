import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
export default {
    title: "Design System/Colors",
    parameters: {
    },
};

export const ColorPalette = () => {
  // Color data organized by rows and columns to match the image
  const colorRows = [
    // Magenta row
    [
      { color: '#5b003f', name: 'magenta900' },
      { color: '#891869', name: 'magenta800' },
      { color: '#a91a90', name: 'magenta700' },
      { color: '#ca26a5', name: 'magenta600' },
      { color: '#e142bc', name: 'magenta500' },
      { color: '#f877d2', name: 'magenta400' },
      { color: '#fface5', name: 'magenta300' },
      { color: '#ffcef2', name: 'magenta200' },
      { color: '#fedff3', name: 'magenta100' },
      { color: '#feeff9', name: 'magenta50' },
    ],
    // Purple row
    [
      { color: '#341059', name: 'purple900' },
      { color: '#633495', name: 'purple800' },
      { color: '#7c5be5', name: 'purple700' },
      { color: '#9a4bc7', name: 'purple600' },
      { color: '#ac4ff7', name: 'purple500' },
      { color: '#b98ff9', name: 'purple400' },
      { color: '#d0b9ff', name: 'purple300' },
      { color: '#e3d5ff', name: 'purple200' },
      { color: '#f2e5ff', name: 'purple100' },
      { color: '#f9f1ff', name: 'purple50' },
    ],
    // Blue row
    [
      { color: '#002651', name: 'blue900' },
      { color: '#1948a3', name: 'blue800' },
      { color: '#175ccc', name: 'blue700' },
      { color: '#266ef1', name: 'blue600' },
      { color: '#3b8bea', name: 'blue500' },
      { color: '#60a5fd', name: 'blue400' },
      { color: '#95c9ff', name: 'blue300' },
      { color: '#cdeeff', name: 'blue200' },
      { color: '#dee9fe', name: 'blue100' },
      { color: '#f1f4fe', name: 'blue50' },
    ],
    // Teal row
    [
      { color: '#002d33', name: 'teal900' },
      { color: '#1a535a', name: 'teal800' },
      { color: '#016974', name: 'teal700' },
      { color: '#0c77bc', name: 'teal600' },
      { color: '#0095a4', name: 'teal500' },
      { color: '#01dbca', name: 'teal400' },
      { color: '#77d5e5', name: 'teal300' },
      { color: '#a0e7ef', name: 'teal200' },
      { color: '#e2f8fb', name: 'teal100' },
      { color: '#f0fcfd', name: 'teal50' },
    ],
    // Green row
    [
      { color: '#0b2f14', name: 'green900' },
      { color: '#0d572d', name: 'green800' },
      { color: '#16650b', name: 'green700' },
      { color: '#0e8345', name: 'green600' },
      { color: '#4b9a51', name: 'green500' },
      { color: '#65c167', name: 'green400' },
      { color: '#7fd99a', name: 'green300' },
      { color: '#b1cba2', name: 'green200' },
      { color: '#d3efda', name: 'green100' },
      { color: '#eafead', name: 'green50' },
    ],
    // Lime row
    [
      { color: '#152000', name: 'lime900' },
      { color: '#36531a', name: 'lime800' },
      { color: '#3f620a', name: 'lime700' },
      { color: '#4f7f0b', name: 'lime600' },
      { color: '#5b950b', name: 'lime500' },
      { color: '#77b71c', name: 'lime400' },
      { color: '#a6db67', name: 'lime300' },
      { color: '#cadca0', name: 'lime200' },
      { color: '#daeec6', name: 'lime100' },
      { color: '#eafe65', name: 'lime50' },
    ],
    // Yellow row
    [
      { color: '#5d2c00', name: 'yellow900' },
      { color: '#4b4100', name: 'yellow800' },
      { color: '#9a5201', name: 'yellow700' },
      { color: '#9f6402', name: 'yellow600' },
      { color: '#b97502', name: 'yellow500' },
      { color: '#f79d00', name: 'yellow400' },
      { color: '#ffbc2f', name: 'yellow300' },
      { color: '#ffdc08', name: 'yellow200' },
      { color: '#fbeb5d', name: 'yellow100' },
      { color: '#fff2dc', name: 'yellow50' },
    ],
    // Amber row
    [
      { color: '#562000', name: 'amber900' },
      { color: '#6d4100', name: 'amber800' },
      { color: '#904a07', name: 'amber700' },
      { color: '#9f6402', name: 'amber600' },
      { color: '#c46e00', name: 'amber500' },
      { color: '#df950b', name: 'amber400' },
      { color: '#ffb749', name: 'amber300' },
      { color: '#ffc67c', name: 'amber200' },
      { color: '#ffe4b7', name: 'amber100' },
      { color: '#fff1e1', name: 'amber50' },
    ],
    // Orange row
    [
      { color: '#461a00', name: 'orange900' },
      { color: '#823006', name: 'orange800' },
      { color: '#a33b04', name: 'orange700' },
      { color: '#cf4c00', name: 'orange600' },
      { color: '#ec5100', name: 'orange500' },
      { color: '#fd823a', name: 'orange400' },
      { color: '#ffb48c', name: 'orange300' },
      { color: '#ffc35c', name: 'orange200' },
      { color: '#fee26b', name: 'orange100' },
      { color: '#ffebb9', name: 'orange50' },
    ],
    // Red row
    [
      { color: '#520810', name: 'red900' },
      { color: '#950f22', name: 'red800' },
      { color: '#bb032a', name: 'red700' },
      { color: '#de1135', name: 'red600' },
      { color: '#f83446', name: 'red500' },
      { color: '#fc7f79', name: 'red400' },
      { color: '#ffb2ab', name: 'red300' },
      { color: '#ffd2cd', name: 'red200' },
      { color: '#ffe1de', name: 'red100' },
      { color: '#fff0ee', name: 'red50' },
    ],
    // Grayscale row
    [
      { color: '#000000', name: 'black' },
      { color: '#282828', name: 'gray900' },
      { color: '#404040', name: 'gray800' },
      { color: '#5c5c5c', name: 'gray700' },
      { color: '#727272', name: 'gray600' },
      { color: '#8d8d8d', name: 'gray500' },
      { color: '#a8a8a8', name: 'gray400' },
      { color: '#d0d0d0', name: 'gray300' },
      { color: '#e0e0e0', name: 'gray200' },
      { color: '#f0f0f0', name: 'gray100' },
      { color: '#f3f3f3', name: 'gray50' },
      { color: '#ffffff', name: 'white' },
    ],
  ];

  const renderColorCell = (colorInfo) => {
    const { color, name } = colorInfo;
    // Calculate text color based on background brightness
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = brightness > 125 ? 'black' : 'white';

    return (
      <View key={name} style={[styles.colorCell, { backgroundColor: color }]}>
        <Text style={[styles.colorName, { color: textColor }]}>{name}</Text>
        <Text style={[styles.colorHex, { color: textColor }]}>{color}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.paletteContainer}>
          {colorRows.map((row, index) => (
            <View key={`row-${index}`} style={styles.colorRow}>
              {row.map(renderColorCell)}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  paletteContainer: {
    padding: 4,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorCell: {
    height: 70,
    flex: 1,
    minWidth: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  colorName: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  colorHex: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },
});
