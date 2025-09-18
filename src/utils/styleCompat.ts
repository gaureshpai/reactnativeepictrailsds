import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

// Type for any React Native style
export type RNStyle = ViewStyle | TextStyle | ImageStyle;

// Enhanced props that accept both className and style
export interface StyleCompatProps {
  className?: string;
  style?: any;
}

// Type for the className mappings
export type ClassNameMappings = typeof styleMap;

// Common NativeWind to React Native style mappings
const styleMap: Record<string, RNStyle> = {
  // Flexbox
  'flex': { flex: 1 },
  'flex-1': { flex: 1 },
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-nowrap': { flexWrap: 'nowrap' },
  
  // Justify Content
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-center': { justifyContent: 'center' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },
  
  // Align Items
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'items-center': { alignItems: 'center' },
  'items-baseline': { alignItems: 'baseline' },
  'items-stretch': { alignItems: 'stretch' },
  
  // Align Self
  'self-start': { alignSelf: 'flex-start' },
  'self-end': { alignSelf: 'flex-end' },
  'self-center': { alignSelf: 'center' },
  'self-stretch': { alignSelf: 'stretch' },
  
  // Positioning
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  
  // Display
  'hidden': { display: 'none' },
  
  // Background Colors
  'bg-white': { backgroundColor: '#ffffff' },
  'bg-black': { backgroundColor: '#000000' },
  'bg-transparent': { backgroundColor: 'transparent' },
  'bg-red-50': { backgroundColor: '#fef2f2' },
  'bg-red-500': { backgroundColor: '#ef4444' },
  'bg-blue-50': { backgroundColor: '#eff6ff' },
  'bg-blue-500': { backgroundColor: '#3b82f6' },
  'bg-green-50': { backgroundColor: '#f0fdf4' },
  'bg-green-500': { backgroundColor: '#22c55e' },
  'bg-gray-50': { backgroundColor: '#f9fafb' },
  'bg-gray-100': { backgroundColor: '#f3f4f6' },
  'bg-gray-200': { backgroundColor: '#e5e7eb' },
  'bg-gray-300': { backgroundColor: '#d1d5db' },
  'bg-gray-400': { backgroundColor: '#9ca3af' },
  'bg-gray-500': { backgroundColor: '#6b7280' },
  'bg-gray-600': { backgroundColor: '#4b5563' },
  'bg-gray-700': { backgroundColor: '#374151' },
  'bg-gray-800': { backgroundColor: '#1f2937' },
  'bg-gray-900': { backgroundColor: '#111827' },
  
  // Text Colors
  'text-white': { color: '#ffffff' },
  'text-black': { color: '#000000' },
  'text-gray-50': { color: '#f9fafb' },
  'text-gray-100': { color: '#f3f4f6' },
  'text-gray-200': { color: '#e5e7eb' },
  'text-gray-300': { color: '#d1d5db' },
  'text-gray-400': { color: '#9ca3af' },
  'text-gray-500': { color: '#6b7280' },
  'text-gray-600': { color: '#4b5563' },
  'text-gray-700': { color: '#374151' },
  'text-gray-800': { color: '#1f2937' },
  'text-gray-900': { color: '#111827' },
  'text-red-500': { color: '#ef4444' },
  'text-blue-500': { color: '#3b82f6' },
  'text-green-500': { color: '#22c55e' },
  
  // Font Weight
  'font-normal': { fontWeight: 'normal' },
  'font-medium': { fontWeight: '500' },
  'font-semibold': { fontWeight: '600' },
  'font-bold': { fontWeight: 'bold' },
  
  // Font Size
  'text-xs': { fontSize: 12 },
  'text-sm': { fontSize: 14 },
  'text-base': { fontSize: 16 },
  'text-lg': { fontSize: 18 },
  'text-xl': { fontSize: 20 },
  'text-2xl': { fontSize: 24 },
  
  // Text Alignment
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  
  // Padding
  'p-0': { padding: 0 },
  'p-1': { padding: 4 },
  'p-2': { padding: 8 },
  'p-3': { padding: 12 },
  'p-4': { padding: 16 },
  'p-5': { padding: 20 },
  'p-6': { padding: 24 },
  'p-8': { padding: 32 },
  'px-0': { paddingHorizontal: 0 },
  'px-1': { paddingHorizontal: 4 },
  'px-2': { paddingHorizontal: 8 },
  'px-3': { paddingHorizontal: 12 },
  'px-4': { paddingHorizontal: 16 },
  'px-6': { paddingHorizontal: 24 },
  'px-8': { paddingHorizontal: 32 },
  'py-0': { paddingVertical: 0 },
  'py-1': { paddingVertical: 4 },
  'py-2': { paddingVertical: 8 },
  'py-3': { paddingVertical: 12 },
  'py-4': { paddingVertical: 16 },
  'py-6': { paddingVertical: 24 },
  
  // Margin
  'm-0': { margin: 0 },
  'm-1': { margin: 4 },
  'm-2': { margin: 8 },
  'm-3': { margin: 12 },
  'm-4': { margin: 16 },
  'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },
  'mb-0': { marginBottom: 0 },
  'mb-1': { marginBottom: 4 },
  'mb-2': { marginBottom: 8 },
  'mb-3': { marginBottom: 12 },
  'mb-4': { marginBottom: 16 },
  'mb-5': { marginBottom: 20 },
  'mb-6': { marginBottom: 24 },
  'mt-0': { marginTop: 0 },
  'mt-1': { marginTop: 4 },
  'mt-2': { marginTop: 8 },
  'mt-3': { marginTop: 12 },
  'mt-4': { marginTop: 16 },
  'mr-1': { marginRight: 4 },
  'mr-2': { marginRight: 8 },
  'mr-3': { marginRight: 12 },
  'mr-4': { marginRight: 16 },
  'ml-1': { marginLeft: 4 },
  'ml-2': { marginLeft: 8 },
  
  // Border
  'border': { borderWidth: 1 },
  'border-0': { borderWidth: 0 },
  'border-2': { borderWidth: 2 },
  'border-gray-200': { borderColor: '#e5e7eb' },
  'border-gray-300': { borderColor: '#d1d5db' },
  'border-gray-400': { borderColor: '#9ca3af' },
  'border-b': { borderBottomWidth: 1 },
  'border-t': { borderTopWidth: 1 },
  
  // Border Radius
  'rounded': { borderRadius: 4 },
  'rounded-sm': { borderRadius: 2 },
  'rounded-md': { borderRadius: 6 },
  'rounded-lg': { borderRadius: 8 },
  'rounded-xl': { borderRadius: 12 },
  'rounded-full': { borderRadius: 9999 },
  
  // Width & Height
  'w-full': { width: '100%' },
  'w-1/2': { width: '50%' },
  'w-1/3': { width: '33.333333%' },
  'w-2/3': { width: '66.666667%' },
  'w-1/4': { width: '25%' },
  'w-3/4': { width: '75%' },
  'h-full': { height: '100%' },
  'h-screen': { height: '100%' },
  
  // Min/Max Width & Height
  'min-w-0': { minWidth: 0 },
  'min-h-0': { minHeight: 0 },
  'max-w-full': { maxWidth: '100%' },
  'max-h-full': { maxHeight: '100%' },
  
  // Overflow
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },
  
  // Opacity
  'opacity-0': { opacity: 0 },
  'opacity-25': { opacity: 0.25 },
  'opacity-50': { opacity: 0.5 },
  'opacity-75': { opacity: 0.75 },
  'opacity-100': { opacity: 1 },
  
  // Shadow (basic approximation for React Native)
  'shadow': { 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  'shadow-sm': { 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  'shadow-lg': { 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
};

/**
 * Parses a className string and converts recognized NativeWind classes to React Native styles
 */
export function parseClassName(className: string): RNStyle {
  const classes = className.split(/\s+/).filter(Boolean);
  const styles: RNStyle = {};
  
  for (const cls of classes) {
    // Handle dynamic width/height values like w-[80px], h-[200px], etc.
    const dynamicMatch = cls.match(/^(w|h|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|top|bottom|left|right|min-w|min-h|max-w|max-h)-\[(.+)\]$/);
    if (dynamicMatch) {
      const [, property, value] = dynamicMatch;
      const numericValue = parseFloat(value);
      
      switch (property) {
        case 'w':
          if (value.includes('vw')) {
            // For viewport widths, we'll use percentage approximation
            styles.width = `${Math.min(100, numericValue)}%`;
          } else if (value.includes('px') || !isNaN(numericValue)) {
            styles.width = numericValue;
          }
          break;
        case 'h':
          if (value.includes('vh')) {
            styles.height = `${Math.min(100, numericValue)}%`;
          } else if (value.includes('px') || !isNaN(numericValue)) {
            styles.height = numericValue;
          }
          break;
        case 'p':
          if (!isNaN(numericValue)) {
            styles.padding = numericValue;
          }
          break;
        case 'px':
          if (!isNaN(numericValue)) {
            styles.paddingHorizontal = numericValue;
          }
          break;
        case 'py':
          if (!isNaN(numericValue)) {
            styles.paddingVertical = numericValue;
          }
          break;
        // Add more dynamic property handlers as needed
      }
      continue;
    }
    
    // Handle hex colors like bg-[#ff0000], text-[#ffffff]
    const colorMatch = cls.match(/^(bg|text|border)(-[a-z]+)?-\[(#[0-9a-fA-F]{3,8}|rgb\(.+\)|rgba\(.+\))\]$/);
    if (colorMatch) {
      const [, property, , color] = colorMatch;
      switch (property) {
        case 'bg':
          styles.backgroundColor = color;
          break;
        case 'text':
          (styles as TextStyle).color = color;
          break;
        case 'border':
          styles.borderColor = color;
          break;
      }
      continue;
    }
    
    // Check for direct mapping
    if (styleMap[cls]) {
      Object.assign(styles, styleMap[cls]);
    }
  }
  
  return styles;
}

/**
 * Main utility function that merges className and style props into a single style object
 * 
 * @param props - Object containing optional className and style properties
 * @returns Combined style object ready for React Native components
 */
export function createStyle(props: StyleCompatProps): any {
  const { className, style } = props;
  
  let combinedStyle: any = {};
  
  // First apply className styles (if any)
  if (className) {
    const classStyle = parseClassName(className);
    combinedStyle = { ...combinedStyle, ...classStyle };
  }
  
  // Then apply explicit style prop (this takes precedence)
  if (style) {
    if (Array.isArray(style)) {
      // Merge all styles in the array
      for (const s of style) {
        if (s) {
          combinedStyle = { ...combinedStyle, ...s };
        }
      }
    } else {
      combinedStyle = { ...combinedStyle, ...style };
    }
  }
  
  return combinedStyle;
}

/**
 * Hook version for components that prefer hooks
 */
export function useStyle(props: StyleCompatProps): any {
  return createStyle(props);
}

/**
 * Utility to merge multiple style objects with className support
 */
export function mergeStyles(...styleObjects: (StyleCompatProps | RNStyle | undefined)[]): any {
  let result: any = {};
  
  for (const obj of styleObjects) {
    if (!obj) continue;
    
    // If object has className or style properties, use createStyle
    if (typeof obj === 'object' && ('className' in obj || 'style' in obj)) {
      const style = createStyle(obj as StyleCompatProps);
      result = { ...result, ...style };
    } else {
      // Direct style object
      result = { ...result, ...obj };
    }
  }
  
  return result;
}

/**
 * For debugging: check if NativeWind is available
 */
export function isNativeWindAvailable(): boolean {
  // This is a simple check - in a real implementation you might check for nativewind globals
  // For now, we assume if className gets processed properly, NativeWind is available
  try {
    // If nativewind is properly set up, className should be processed by metro
    return false; // We'll always fall back to our converter for maximum compatibility
  } catch {
    return false;
  }
}

export default createStyle;
