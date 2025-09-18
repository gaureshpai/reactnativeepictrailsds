import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { createStyle } from '../utils/styleCompat';
import { PressableComponentProps } from '../types/common';

export interface TileProps extends PressableComponentProps {
  w?: number;
  h?: number;
  label: string;
  paragraph?: string;
  variant?: "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5" | "variant-6";
  icon?: "sheart" | "heart" | "box" | "label";
  enabled?: boolean;
  selected?: boolean;
}

const Tile: React.FC<TileProps> = ({
  w = 180, 
  h = 160, 
  label,
  paragraph,
  variant = "variant-1",
  icon,
  enabled = true,
  selected = false,
  className,
  style,
  ...props
}) => {
  
  const minWidth = 180; 
  const minHeight = 160; 
  const width = Math.max(w, minWidth);
  const height = Math.max(h, minHeight);

  const LARGE_ICON_SIZE = 28;
  const SMALL_ICON_SIZE = 18;
  const LABEL_FONT_SIZE = 14;
  const PARAGRAPH_FONT_SIZE = 12;
  const CHECKBOX_SIZE = 20;
  const TOGGLE_WIDTH = 28;
  const TOGGLE_HEIGHT = 12;
  const TOGGLE_KNOB_SIZE = 16;
  const CHEVRON_SIZE = 20;
  const RADIO_SIZE = 22;
  const ICON_BOX_SIZE = 40;
  const BASE_PADDING = 12;
  const ICON_MARGIN = 8;

  const getIconTopPosition = () => { 
    return BASE_PADDING + ICON_MARGIN;
  };

  const containerStyle = createStyle({
    className: `${className || ''} bg-gray-100`,
    style: [
      {
        minWidth,
        minHeight,
        width,
        height,
        padding: BASE_PADDING,
        position: 'relative',
        backgroundColor: enabled ? '#f3f4f6' : '#D1D5DB',
        borderWidth: selected ? 2 : 0,
        borderColor: selected && enabled ? '#000000' : 'transparent',
        borderStyle: 'solid',
      },
      style
    ].filter(Boolean)
  });

  const textStyle = createStyle({
    className: "font-medium text-black",
    style: {
      fontWeight: '500',
      paddingBottom: 4,
      color: enabled ? '#000000' : '#6b7280',
      fontSize: LABEL_FONT_SIZE,
    }
  });

  const paragraphStyle = createStyle({
    className: "text-gray-600",
    style: {
      fontSize: PARAGRAPH_FONT_SIZE,
      color: enabled ? '#4b5563' : '#6b7280',
    }
  });

  const iconBoxStyle = createStyle({
    style: {
      width: ICON_BOX_SIZE,
      height: ICON_BOX_SIZE,
      backgroundColor: '#9ca3af',
    }
  });

  const invisibleIconBoxStyle = createStyle({
    style: {
      width: ICON_BOX_SIZE,
      height: ICON_BOX_SIZE,
      backgroundColor: 'transparent',
    }
  });

  const variantElementStyle = createStyle({
    style: {
      position: 'absolute',
      right: BASE_PADDING,
    }
  });

  const checkboxContainerStyle = createStyle({
    className: "border-2 border-black items-center justify-center",
    style: {
      width: CHECKBOX_SIZE,
      height: CHECKBOX_SIZE,
      borderWidth: 2,
      borderColor: enabled ? '#000000' : '#9ca3af',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  const toggleContainerStyle = createStyle({
    className: "bg-gray-200 rounded-full justify-center",
    style: {
      width: TOGGLE_WIDTH,
      height: TOGGLE_HEIGHT,
      borderRadius: 999,
      backgroundColor: '#e5e7eb',
      justifyContent: 'center',
    }
  });

  const toggleKnobStyle = createStyle({
    className: "rounded-full absolute",
    style: {
      width: TOGGLE_KNOB_SIZE,
      height: TOGGLE_KNOB_SIZE,
      borderRadius: 999,
      position: 'absolute',
    }
  });

  const contentContainerStyle = createStyle({
    className: "flex-1 justify-center",
    style: {
      flex: 1,
      justifyContent: 'center',
    }
  });

  const iconContainerStyle = createStyle({
    style: {
      marginRight: ICON_MARGIN,
      marginBottom: ICON_MARGIN,
    }
  });

  const flexRowStyle = createStyle({
    className: "flex-row",
    style: {
      flexDirection: 'row',
    }
  });

  const flexColStyle = createStyle({
    className: "flex-col",
    style: {
      flexDirection: 'column',
    }
  });

  const renderIcon = () => {
    if (!icon) {   
      return <View style={invisibleIconBoxStyle} />;
    }
    
    const iconColor = enabled ? "#000000" : "#888888";
    
    switch (icon) {
      case 'heart':
        return <Ionicons name="heart" size={LARGE_ICON_SIZE} color={iconColor} />;
      case 'sheart':
        return <Ionicons name="heart" size={SMALL_ICON_SIZE} color={iconColor} />;
      case 'box':
        return <View style={iconBoxStyle} />;
      case 'label':
        return <Text style={textStyle}>{label}</Text>;
      default:
        return <View style={invisibleIconBoxStyle} />;
    }
  };
    
  const renderVariantElement = () => {
    if (!enabled) {
      return renderDisabledVariantElement();
    }
    
    const topPosition = getIconTopPosition();
    
    switch (variant) {
      case 'variant-3':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            <Ionicons name="chevron-forward" size={CHEVRON_SIZE} color="#000000" />
          </View>
        );
      case 'variant-4':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            <View style={checkboxContainerStyle}>
              {selected && <Ionicons name="checkmark" size={16} color="#000000" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            {selected ? 
              <Ionicons name="radio-button-on" size={RADIO_SIZE} color="#000000" /> : 
              <Ionicons name="radio-button-off" size={RADIO_SIZE} color="#000000" />
            }
          </View>
        );
      case 'variant-6':
        return (
          <View style={[variantElementStyle, { top: topPosition+5 }]}>
            <View style={toggleContainerStyle}>
              <View style={[
                toggleKnobStyle,
                {
                  right: selected ? 0 : undefined,
                  left: selected ? undefined : 0,
                  backgroundColor: selected ? '#000000' : '#ffffff',
                }
              ]} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  
  const renderDisabledVariantElement = () => {
    const topPosition = getIconTopPosition();
    
    switch (variant) {
      case 'variant-3':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            <Ionicons name="chevron-forward" size={CHEVRON_SIZE} color="#888888" />
          </View>
        );
      case 'variant-4':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            <View style={[checkboxContainerStyle, { borderColor: '#9ca3af' }]}>
              {selected && <Ionicons name="checkmark" size={16} color="#868686" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            {selected ? 
              <Ionicons name="radio-button-on" size={RADIO_SIZE} color="#868686" /> : 
              <Ionicons name="radio-button-off" size={RADIO_SIZE} color="#868686" />
            }
          </View>
        );
      case 'variant-6':
        return (
          <View style={[variantElementStyle, { top: topPosition }]}>
            <View style={toggleContainerStyle}>
              <View style={[
                toggleKnobStyle,
                {
                  right: selected ? 0 : undefined,
                  left: selected ? undefined : 0,
                  backgroundColor: selected ? '#6b7280' : '#ffffff',
                }
              ]} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  
  const renderContent = () => { 
    const contentPadding = Math.min(width * 0.05, 12);
    
    const contentWrapperStyle = createStyle({
      className: "flex-1 overflow-hidden",
      style: {
        flex: 1,
        overflow: 'hidden',
        margin: contentPadding
      }
    });

    const dynamicContentWrapperStyle = createStyle({
      style: {
        flexGrow: 1,
        flexShrink: 1,
      }
    });
    
    switch (variant) {
      case 'variant-2':
        const variant2TextStyle = createStyle({
          className: "absolute top-3 right-3 text-right",
          style: {
            position: 'absolute',
            top: BASE_PADDING,
            right: BASE_PADDING,
            textAlign: 'right',
            maxWidth: width * 0.4
          }
        });

        const variant2ContainerStyle = createStyle({
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            height: height,
            paddingVertical: 25
          }
        });

        return (
          <>
            <View style={variant2TextStyle}>
              <Text style={[textStyle, { textAlign: 'right' }]}>{label}</Text>
              {paragraph && (
                <Text 
                  style={[paragraphStyle, { textAlign: 'right' }]}
                  numberOfLines={3} 
                  ellipsizeMode="tail"
                >
                  {paragraph}
                </Text>
              )}
            </View>
            <View style={[contentContainerStyle, { padding: contentPadding }]}>
              <View style={variant2ContainerStyle}>
                <View style={iconContainerStyle}>
                  {renderIcon()}
                </View>
                <View style={dynamicContentWrapperStyle}>
                  <Text 
                    style={textStyle}
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                  >
                    {label}
                  </Text>
                  {paragraph && (
                    <Text 
                      style={[paragraphStyle, { marginTop: 10 }]}
                      numberOfLines={3} 
                      ellipsizeMode="tail"
                    >
                      {paragraph}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </>
        );
      default: 
        return (
          <View style={contentWrapperStyle}>
            <View style={flexColStyle}>
              <View style={iconContainerStyle}>
                {renderIcon()}
              </View>
              <View style={dynamicContentWrapperStyle}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode="tail" 
                  style={textStyle}
                >
                  {label}
                </Text>
                {paragraph && (
                  <Text 
                    numberOfLines={3} 
                    ellipsizeMode="tail" 
                    style={paragraphStyle}
                  >
                    {paragraph}
                  </Text>
                )}
              </View>
            </View>
          </View>
        );
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        containerStyle,
        { width, height }
      ]}
      disabled={!enabled}
      activeOpacity={0.7}
      {...props}
    >
      {renderContent()}
      {renderVariantElement()}
    </TouchableOpacity>
  );
};

export default Tile;

