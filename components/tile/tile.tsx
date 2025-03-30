import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

type TileProps = {
  label: string;
  paragraph?: string;
  variant?: "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5" | "variant-6";
  icon?: "sheart" | "heart" | "box" | "label";
  enabled?: boolean;
  selected?: boolean;
};

const Tile = ({
  label,
  paragraph,
  variant = "variant-1",
  icon,
  enabled = true,
  selected = false
}: TileProps) => {
  // Determine base container classes
  const containerClasses = `
    relative w-40 h-32  px-3  border
    ${enabled ? 'bg-gray-100' : 'bg-gray-300 border-none'}
    ${selected ? 'border-black border-solid border-2' : 'border-none'}
  `;

  const textClasses = `
    font-medium pb-1
    ${enabled ? 'text-black' : 'text-gray-500'}
  `;

  const paragraphClasses = `
    text-sm
    ${enabled ? 'text-gray-600' : 'text-gray-500'}
  `;

  // Render the appropriate icon based on the icon prop
  const renderIcon = () => {
    if (!icon) return null;
    
    const iconColor = enabled ? "#000000" : "#888888";
    // const iconSize = 18;
    
    switch (icon) {
      case 'heart':
        return <Ionicons name="heart" size={28} color={iconColor} />;
      case 'sheart':
        return <Ionicons name="heart" size={18} color={iconColor} />;
      case 'box':
        return <View className={`w-10 h-10 bg-gray-400`} />;
      case 'label':
        return <Text className={textClasses}>{label}</Text>; // Just showing the label text as in the design
      default:
        return null;
    }
  };
  
  // Render variant elements (checkbox, radio, toggle, etc.)
  const renderVariantElement = () => {
    if (!enabled) {
      return renderDisabledVariantElement();
    }
    
    switch (variant) {
      case 'variant-3':
        return (
          <View className="absolute top-0 right-0 m-3 mt-6">
            <Ionicons name="chevron-forward" size={20} color="#000000" />
          </View>
        );
      case 'variant-4':
        return (
          <View className="absolute top-1 right-0 m-3 mt-6">
            <View className="w-5 h-5 border-2 border-black justify-center items-center">
              {/* {selected && <View className="w-3 h-3 bg-black" />} */}
              {selected && <Ionicons name="checkmark" size={16} color="#000000" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View className="absolute top-3 right-0 m-3">
              {selected ? <Ionicons name="radio-button-on" size={22} color="#000000" />: <Ionicons name="radio-button-off" size={22} color="#000000" />}
          </View>
        );
      case 'variant-6':
        return (
          <View className="absolute top-4 right-2 m-3">
            <View className="w-7 h-3 rounded-full bg-gray-200 justify-center">
              <View className={`
                w-4 h-4 rounded-full bg-black absolute
                ${selected ? 'right-0' : 'left-0 bg-white'}
              `} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  
  const renderDisabledVariantElement = () => {
    switch (variant) {
      case 'variant-3':
        return (
          <View className="absolute top-0 right-0 m-3 mt-6">
            <Ionicons name="chevron-forward" size={20} color="#888888" />
          </View>
        );
      case 'variant-4':
        return (
          <View className="absolute top-1 right-0 m-3 mt-6">
            <View className="w-5 h-5 border-2 border-gray-400">
              {/* {selected && <View className="w-3 h-3 bg-gray-400" />} */}
              {selected && <Ionicons name="checkmark" size={16} color="#868686" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View className="absolute top-3 right-0 m-3">
            {selected ? <Ionicons name="radio-button-on" size={22} color="#868686" />: <Ionicons name="radio-button-off" size={22} color="#868686" />}
          </View>
        );
      case 'variant-6':
        return (
          <View className="absolute top-4 right-2 m-3">
            <View className="w-7 h-3 rounded-full bg-gray-200 justify-center">
              <View className={`
                w-4 h-4 rounded-full bg-gray-500 absolute
                ${selected ? 'right-0' : 'left-0 bg-white'}
              `} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  
  // Layout variations based on variant prop
  const renderContent = () => {
    switch (variant) {
      case 'variant-2':
        return (
          <>
            <View className="absolute top-0 right-0 m-3">
              <Text className={textClasses+"text-right"}>{label}</Text>
              {paragraph && <Text className={paragraphClasses+"text-right"}>{paragraph}</Text>}
            </View>
              <View className="flex-1 justify-center">
                <View className={`flex-col ${icon == 'heart' ? 'gap-0' : 'gap-2'}`}>
                  <View className={`mr-2 ${icon != 'box' ? 'mb-2' : ''}`}>
                    {renderIcon()}
                    {!icon && <View className={`w-10 h-10 bg-transparent`} />}
                  </View>
                  <View className="flex-1">
                    <Text className={textClasses}>{label}</Text>
                    {paragraph && <Text className={paragraphClasses}>{paragraph}</Text>}
                  </View>
                </View>
              </View>
          </>
        );
      default: // variant-1 and others
        return (
          <>
            {icon ? (
              <View className="flex-1 justify-center">
                <View className={`flex-col`}>
                  <View className="mr-2 mb-2">
                    {renderIcon()}
                  </View>
                  <View className="flex-1">
                    <Text className={textClasses}>{label}</Text>
                    {paragraph && <Text className={paragraphClasses}>{paragraph}</Text>}
                  </View>
                </View>
              </View>
            ) : (
              <View className="flex-1 justify-center">
                {variant !== 'variant-1' && <View className={`w-10 h-10 bg-transparent`} />}
                <Text className={textClasses}>{label}</Text>
                {paragraph && <Text className={paragraphClasses}>{paragraph}</Text>}
              </View>
            )}
          </>
        );
    }
  };
  
  return (
    <TouchableOpacity 
      className={containerClasses}
      disabled={!enabled}
      activeOpacity={0.7}
    >
      {renderContent()}
      {renderVariantElement()}
    </TouchableOpacity>
  );
};

export default Tile;