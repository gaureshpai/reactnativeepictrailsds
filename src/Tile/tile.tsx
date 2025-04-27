import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { TileProps } from "./Tile.type";

const Tile = ({
  w = 180, 
  h = 160, 
  label,
  paragraph,
  variant = "variant-1",
  icon,
  enabled = true,
  selected = false
}: TileProps) => {
  
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

  const styles = StyleSheet.create({
    container: {
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
    text: {
      fontWeight: '500',
      paddingBottom: 4,
      color: enabled ? '#000000' : '#6b7280',
      fontSize: LABEL_FONT_SIZE,
    },
    paragraph: {
      fontSize: PARAGRAPH_FONT_SIZE,
      color: enabled ? '#4b5563' : '#6b7280',
    },
    iconBox: {
      width: ICON_BOX_SIZE,
      height: ICON_BOX_SIZE,
      backgroundColor: '#9ca3af',
    },
    invisibleIconBox: {
      width: ICON_BOX_SIZE,
      height: ICON_BOX_SIZE,
      backgroundColor: 'transparent',
    },
    variantElement: {
      position: 'absolute',
      right: BASE_PADDING,
    },
    checkboxContainer: {
      width: CHECKBOX_SIZE,
      height: CHECKBOX_SIZE,
      borderWidth: 2,
      borderColor: enabled ? '#000000' : '#9ca3af',
      justifyContent: 'center',
      alignItems: 'center',
    },
    toggleContainer: {
      width: TOGGLE_WIDTH,
      height: TOGGLE_HEIGHT,
      borderRadius: 999,
      backgroundColor: '#e5e7eb',
      justifyContent: 'center',
    },
    toggleKnob: {
      width: TOGGLE_KNOB_SIZE,
      height: TOGGLE_KNOB_SIZE,
      borderRadius: 999,
      position: 'absolute',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    iconContainer: {
      marginRight: ICON_MARGIN,
      marginBottom: ICON_MARGIN,
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexCol: {
      flexDirection: 'column',
    },
    iconTextContainer: {
      flex: 1,
      marginTop: BASE_PADDING,
    },
    variant2Text: {
      position: 'absolute',
      top: BASE_PADDING,
      right: BASE_PADDING,
      textAlign: 'right',
    },
    contentWrapper: {
      flex: 1,
      overflow: 'hidden',
    },  
    dynamicContentWrapper: {
      flexGrow: 1,
      flexShrink: 1,
    },
  });

  const renderIcon = () => {
    if (!icon) {   
      return <View style={styles.invisibleIconBox} />;
    }
    
    const iconColor = enabled ? "#000000" : "#888888";
    
    switch (icon) {
      case 'heart':
        return <Ionicons name="heart" size={LARGE_ICON_SIZE} color={iconColor} />;
      case 'sheart':
        return <Ionicons name="heart" size={SMALL_ICON_SIZE} color={iconColor} />;
      case 'box':
        return <View style={styles.iconBox} />;
      case 'label':
        return <Text style={styles.text}>{label}</Text>;
      default:
        return <View style={styles.invisibleIconBox} />;
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
          <View style={[styles.variantElement, { top: topPosition }]}>
            <Ionicons name="chevron-forward" size={CHEVRON_SIZE} color="#000000" />
          </View>
        );
      case 'variant-4':
        return (
          <View style={[styles.variantElement, { top: topPosition }]}>
            <View style={styles.checkboxContainer}>
              {selected && <Ionicons name="checkmark" size={16} color="#000000" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View style={[styles.variantElement, { top: topPosition }]}>
            {selected ? 
              <Ionicons name="radio-button-on" size={RADIO_SIZE} color="#000000" /> : 
              <Ionicons name="radio-button-off" size={RADIO_SIZE} color="#000000" />
            }
          </View>
        );
      case 'variant-6':
        return (
          <View style={[styles.variantElement, { top: topPosition+5 }]}>
            <View style={styles.toggleContainer}>
              <View style={[
                styles.toggleKnob,
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
          <View style={[styles.variantElement, { top: topPosition }]}>
            <Ionicons name="chevron-forward" size={CHEVRON_SIZE} color="#888888" />
          </View>
        );
      case 'variant-4':
        return (
          <View style={[styles.variantElement, { top: topPosition }]}>
            <View style={[styles.checkboxContainer, { borderColor: '#9ca3af' }]}>
              {selected && <Ionicons name="checkmark" size={16} color="#868686" />}
            </View>
          </View>
        );
      case 'variant-5':
        return (
          <View style={[styles.variantElement, { top: topPosition }]}>
            {selected ? 
              <Ionicons name="radio-button-on" size={RADIO_SIZE} color="#868686" /> : 
              <Ionicons name="radio-button-off" size={RADIO_SIZE} color="#868686" />
            }
          </View>
        );
      case 'variant-6':
        return (
          <View style={[styles.variantElement, { top: topPosition }]}>
            <View style={styles.toggleContainer}>
              <View style={[
                styles.toggleKnob,
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
    
    switch (variant) {
      case 'variant-2':
        return (
          <>
            <View style={[styles.variant2Text, { maxWidth: width * 0.4 }]}>
              <Text style={[styles.text, { textAlign: 'right' }]}>{label}</Text>
              {paragraph && (
                <Text 
                  style={[styles.paragraph, { textAlign: 'right' }]}
                  numberOfLines={3} 
                  ellipsizeMode="tail"
                >
                  {paragraph}
                </Text>
              )}
            </View>
            <View style={[styles.contentContainer, { padding: contentPadding }]}>
              <View style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'flex-start',height: height,paddingBlock:25}}>
                <View style={styles.iconContainer}>
                  {renderIcon()}
                </View>
                <View style={styles.dynamicContentWrapper}>
                  <Text 
                    style={styles.text}
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                  >
                    {label}
                  </Text>
                  {paragraph && (
                    <Text 
                      style={{...styles.paragraph, marginTop: 10}}
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
          <View style={[styles.contentWrapper, { margin: contentPadding }]}>
            <View style={styles.flexCol}>
              <View style={styles.iconContainer}>
                {renderIcon()}
              </View>
              <View style={styles.dynamicContentWrapper}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode="tail" 
                  style={styles.text}
                >
                  {label}
                </Text>
                {paragraph && (
                  <Text 
                    numberOfLines={3} 
                    ellipsizeMode="tail" 
                    style={styles.paragraph}
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
    <TouchableOpacity className='bg-gray-100'
      style={[
        styles.container,
        { width, height }
      ]}
      disabled={!enabled}
      activeOpacity={0.7}
    >
      {renderContent()}
      {renderVariantElement()}
    </TouchableOpacity>
  );
};

export default Tile;