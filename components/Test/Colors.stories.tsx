import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
export default {
  title: "Design System/Foundations",
  parameters: {
    layout: "centered",
  },
};
export const ColorPalette = () => {
  const colorRows = [
    [
      { color: "#5b003f", name: "magenta900" },
      { color: "#891869", name: "magenta800" },
      { color: "#a91a90", name: "magenta700" },
      { color: "#ca26a5", name: "magenta600" },
      { color: "#e142bc", name: "magenta500" },
      { color: "#f877d2", name: "magenta400" },
      { color: "#fface5", name: "magenta300" },
      { color: "#ffcef2", name: "magenta200" },
      { color: "#fedff3", name: "magenta100" },
      { color: "#feeff9", name: "magenta50" },
    ],
    [
      { color: "#341059", name: "purple900" },
      { color: "#633495", name: "purple800" },
      { color: "#7c5be5", name: "purple700" },
      { color: "#9a4bc7", name: "purple600" },
      { color: "#ac4ff7", name: "purple500" },
      { color: "#b98ff9", name: "purple400" },
      { color: "#d0b9ff", name: "purple300" },
      { color: "#e3d5ff", name: "purple200" },
      { color: "#f2e5ff", name: "purple100" },
      { color: "#f9f1ff", name: "purple50" },
    ],
    [
      { color: "#002651", name: "blue900" },
      { color: "#1948a3", name: "blue800" },
      { color: "#175ccc", name: "blue700" },
      { color: "#266ef1", name: "blue600" },
      { color: "#3b8bea", name: "blue500" },
      { color: "#60a5fd", name: "blue400" },
      { color: "#95c9ff", name: "blue300" },
      { color: "#cdeeff", name: "blue200" },
      { color: "#dee9fe", name: "blue100" },
      { color: "#f1f4fe", name: "blue50" },
    ],
    [
      { color: "#002d33", name: "teal900" },
      { color: "#1a535a", name: "teal800" },
      { color: "#016974", name: "teal700" },
      { color: "#0c77bc", name: "teal600" },
      { color: "#0095a4", name: "teal500" },
      { color: "#01dbca", name: "teal400" },
      { color: "#77d5e5", name: "teal300" },
      { color: "#a0e7ef", name: "teal200" },
      { color: "#e2f8fb", name: "teal100" },
      { color: "#f0fcfd", name: "teal50" },
    ],
    [
      { color: "#0b2f14", name: "green900" },
      { color: "#0d572d", name: "green800" },
      { color: "#16650b", name: "green700" },
      { color: "#0e8345", name: "green600" },
      { color: "#4b9a51", name: "green500" },
      { color: "#65c167", name: "green400" },
      { color: "#7fd99a", name: "green300" },
      { color: "#b1cba2", name: "green200" },
      { color: "#d3efda", name: "green100" },
      { color: "#eafead", name: "green50" },
    ],
    [
      { color: "#152000", name: "lime900" },
      { color: "#36531a", name: "lime800" },
      { color: "#3f620a", name: "lime700" },
      { color: "#4f7f0b", name: "lime600" },
      { color: "#5b950b", name: "lime500" },
      { color: "#77b71c", name: "lime400" },
      { color: "#a6db67", name: "lime300" },
      { color: "#cadca0", name: "lime200" },
      { color: "#daeec6", name: "lime100" },
      { color: "#eafe65", name: "lime50" },
    ],
    [
      { color: "#5d2c00", name: "yellow900" },
      { color: "#4b4100", name: "yellow800" },
      { color: "#9a5201", name: "yellow700" },
      { color: "#9f6402", name: "yellow600" },
      { color: "#b97502", name: "yellow500" },
      { color: "#f79d00", name: "yellow400" },
      { color: "#ffbc2f", name: "yellow300" },
      { color: "#ffdc08", name: "yellow200" },
      { color: "#fbeb5d", name: "yellow100" },
      { color: "#fff2dc", name: "yellow50" },
    ],
    [
      { color: "#562000", name: "amber900" },
      { color: "#6d4100", name: "amber800" },
      { color: "#904a07", name: "amber700" },
      { color: "#9f6402", name: "amber600" },
      { color: "#c46e00", name: "amber500" },
      { color: "#df950b", name: "amber400" },
      { color: "#ffb749", name: "amber300" },
      { color: "#ffc67c", name: "amber200" },
      { color: "#ffe4b7", name: "amber100" },
      { color: "#fff1e1", name: "amber50" },
    ],
    [
      { color: "#461a00", name: "orange900" },
      { color: "#823006", name: "orange800" },
      { color: "#a33b04", name: "orange700" },
      { color: "#cf4c00", name: "orange600" },
      { color: "#ec5100", name: "orange500" },
      { color: "#fd823a", name: "orange400" },
      { color: "#ffb48c", name: "orange300" },
      { color: "#ffc35c", name: "orange200" },
      { color: "#fee26b", name: "orange100" },
      { color: "#ffebb9", name: "orange50" },
    ],
    [
      { color: "#520810", name: "red900" },
      { color: "#950f22", name: "red800" },
      { color: "#bb032a", name: "red700" },
      { color: "#de1135", name: "red600" },
      { color: "#f83446", name: "red500" },
      { color: "#fc7f79", name: "red400" },
      { color: "#ffb2ab", name: "red300" },
      { color: "#ffd2cd", name: "red200" },
      { color: "#ffe1de", name: "red100" },
      { color: "#fff0ee", name: "red50" },
    ],
    [
      { color: "#000000", name: "black" },
      { color: "#282828", name: "gray900" },
      { color: "#404040", name: "gray800" },
      { color: "#5c5c5c", name: "gray700" },
      { color: "#727272", name: "gray600" },
      { color: "#8d8d8d", name: "gray500" },
      { color: "#a8a8a8", name: "gray400" },
      { color: "#d0d0d0", name: "gray300" },
      { color: "#e0e0e0", name: "gray200" },
      { color: "#f0f0f0", name: "gray100" },
      { color: "#f3f3f3", name: "gray50" },
      { color: "#ffffff", name: "white" },
    ],
  ];

  // Semantic/Core colors
  const semanticColors = [
    {
      id: "primaryA",
      name: "primaryA",
      color: "#000000",
      colorCode: "black",
    },
    {
      id: "primaryB",
      name: "primaryB",
      color: "#ffffff",
      colorCode: "white",
    },
    {
      id: "accent",
      name: "accent",
      color: "#266ef1",
      colorCode: "blue600",
    },
    {
      id: "negative",
      name: "negative",
      color: "#de1135",
      colorCode: "red600",
    },
    {
      id: "warning",
      name: "warning",
      color: "#ffbc2f",
      colorCode: "yellow300",
    },
    {
      id: "positive",
      name: "positive",
      color: "#0e8345",
      colorCode: "green600",
    },
  ];

  const semanticColorsContent = [
    {
      id: "contentStateDisabled",
      name: "contentStateDisabled",
      color: "#A6A6A6",
      colorCode: "gray400",
    },
    { id: "contentOnColor",
      name: "contentOnColor",
      color: "#ffffff",
      colorCode: "white" },
    {
      id: "contentOnColorInverse",
      name: "contentOnColorInverse",
      color: "#000000",
      colorCode: "black",
    },
    { 
      id: "contentAccent",
      name: "contentAccent",
      color: "#266ef1",
      colorCode: "blue600" 
    },
    { 
      id: "contentNegative",
      name: "contentNegative", 
      color: "#de1135",
      colorCode: "red600" 
    },
    { 
      id: "contentWarning",
      name: "contentWarning", 
      color: "#9f6402",
      colorCode: "yellow600" 
    },
    { 
      id: "contentPositive",
      name: "contentPositive",
      color: "#0e8345",
      colorCode: "green600" 
    },
  ];
  const semanticbackgroundContent = [
    {
      id: "backgroundStateDisabled",
      name: "backgroundStateDisabled",
      color: "#f3f3f3",
      colorCode: "gray50",
    },
    { 
      id: "backgroundOverlayArt",
      name: "backgroundOverlayArt",
      color: "0%",
      colorCode: "black" 
    },
    {
      id: "backgroundOverlayDark",
      name: "backgroundOverlayDark",
      color: "50%",
      colorCode: "black",
    },
    { 
      id: "DEPRECATED_backgroundOverlayLight",
      name: "DEPRECATED_backgroundOverlayLight",
      color: "8%",
      colorCode: "black" 
    },
    { 
      id: "backgroundOverlayElevation",
      name: "backgroundOverlayElevation", 
      color: "0%",
      colorCode: "black" 
    },
    { 
      id: "backgroundAccent",
      name: "backgroundAccent", 
      color: "#266ef1",
      colorCode: "blue600" 
    },
    { 
      id: "backgroundNegative",
      name: "backgroundNegative",
      color: "#de1135",
      colorCode: "red600" 
    },
    { 
      id: "backgroundWarning",
      name: "backgroundWarning",
      color: "#f6bc2f",
      colorCode: "yellow600" 
    },
    { 
      id: "backgroundPositive",
      name: "backgroundPositive",
      color: "#0e8345",
      colorCode: "green600" 
    },
    { 
      id: "backgroundLightAccent",
      name: "backgroundLightAccent",
      color: "#eff4fe",
      colorCode: "blue50" 
    },
    { 
      id: "backgroundLightNegative",
      name: "backgroundLightNegative",
      color: "#fff0ee",
      colorCode: "red50" 
    },
    { 
      id: "backgroundLightWarning",
      name: "backgroundLightWarning",
      color: "#fdf2dc",
      colorCode: "yellow50" 
    },
    { 
      id: "backgroundLightPositive",
      name: "backgroundLightPositive",
      color: "#eaf6ed",
      colorCode: "green50" 
    },
    { 
      id: "backgroundAlwaysDark",
      name: "backgroundAlwaysDark",
      color: "#000000",
      colorCode: "black" 
    },
    { 
      id: "backgroundAlwaysLight",
      name: "backgroundAlwaysLight",
      color: "#ffffff",
      colorCode: "white" 
    },
  ];


  // Function to determine text color based on background brightness
  const getTextColor = (bgColor) => {
    if (bgColor === "#ffffff" || bgColor === "white") return "#000000";
    if (bgColor === "#000000" || bgColor === "black") return "#ffffff";

    const r = parseInt(bgColor.substring(1, 3), 16);
    const g = parseInt(bgColor.substring(3, 5), 16);
    const b = parseInt(bgColor.substring(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 125 ? "#000000" : "#ffffff";
  };

  // Split semantic colors into two columns
  const leftColumn = semanticColors.slice(0, 3);
  const rightColumn = semanticColors.slice(3);

  const leftColumnContent = semanticColorsContent.slice(0,3);
  const rightColumnContent = semanticColorsContent.slice(3);

  const leftsemanticbackgroundContent = semanticbackgroundContent.slice(0,3);
  const rightsemanticbackgroundContent = semanticbackgroundContent.slice(3);
  return (
    <ScrollView style={styles.container}>
      {/* Full Color Palette Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Color Palette</Text>
        {colorRows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.colorRow}>
            {row.map((colorInfo) => (
              <View
                key={colorInfo.name}
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colorInfo.color },
                ]}
              >
                <Text
                  style={[
                    styles.swatchText,
                    { color: getTextColor(colorInfo.color) },
                  ]}
                >
                  {colorInfo.name}
                </Text>
                <Text
                  style={[
                    styles.swatchSubtext,
                    { color: getTextColor(colorInfo.color) },
                  ]}
                >
                  bg-{colorInfo.name}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      {/* Core/Semantic Colors Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>02 Core</Text>
        <View style={styles.columnsContainer}>
          {/* Left column */}
          <View style={styles.column}>
            {leftColumn.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Right column */}
          <View style={styles.column}>
            {rightColumn.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Core/Semantic Colors Content Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Content</Text>
        <View style={styles.columnsContainer}>
          {/* Left column */}
          <View style={styles.column}>
            {leftColumnContent.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Right column */}
          <View style={styles.column}>
            {rightColumnContent.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

       {/* Core/Semantic Colors Content Section */}
       <View style={styles.section}>
        <Text style={styles.sectionTitle}>semanticbackground</Text>
        <View style={styles.columnsContainer}>
          {/* Left column */}
          <View style={styles.column}>
            {leftsemanticbackgroundContent.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Right column */}
          <View style={styles.column}>
            {rightsemanticbackgroundContent.map((color) => (
              <View key={color.id} style={styles.colorItem}>
                <View
                  style={[styles.colorDot, { backgroundColor: color.color }]}
                />
                <View style={styles.colorTextContainer}>
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorCode}>{color.colorCode}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3", // gray50
  },
  section: {
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  colorItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  colorDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  colorTextContainer: {
    flex: 1,
  },
  colorName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  colorCode: {
    fontSize: 14,
    color: "#666666",
  },
  colorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorSwatch: {
    flex: 1,
    minWidth: 80,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  swatchText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  swatchSubtext: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 2,
  },
});
