import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { StyleCompatProps } from '../utils/styleCompat';

// Re-export for convenience
export type RNStyle = ViewStyle | TextStyle | ImageStyle;
export { StyleCompatProps };

/**
 * Base props that all components should extend from
 * Provides both className (NativeWind) and style (React Native) support
 */
export interface BaseComponentProps extends StyleCompatProps {
  /**
   * Test ID for automated testing
   */
  testID?: string;
  
  /**
   * Accessibility label for screen readers
   */
  accessibilityLabel?: string;
  
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
}

/**
 * Props for components that can be pressed/tapped
 */
export interface PressableComponentProps extends BaseComponentProps {
  /**
   * Function called when the component is pressed
   */
  onPress?: () => void;
  
  /**
   * Whether the component should be disabled
   */
  disabled?: boolean;
  
  /**
   * Opacity when pressed (for TouchableOpacity-style feedback)
   */
  activeOpacity?: number;
}

/**
 * Props for text-based components
 */
export interface TextComponentProps extends BaseComponentProps {
  /**
   * The text content
   */
  children?: string | React.ReactNode;
  
  /**
   * Text color (can be used alongside className/style)
   */
  color?: string;
  
  /**
   * Font size (can be used alongside className/style)
   */
  fontSize?: number;
  
  /**
   * Font weight (can be used alongside className/style)
   */
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

/**
 * Props for container components
 */
export interface ContainerComponentProps extends BaseComponentProps {
  /**
   * Child components
   */
  children?: React.ReactNode;
  
  /**
   * Background color (can be used alongside className/style)
   */
  backgroundColor?: string;
  
  /**
   * Border radius (can be used alongside className/style)
   */
  borderRadius?: number;
  
  /**
   * Padding (can be used alongside className/style)
   */
  padding?: number;
  
  /**
   * Margin (can be used alongside className/style)
   */
  margin?: number;
}

/**
 * Common size options used across components
 */
export type ComponentSize = 'small' | 'medium' | 'large';

/**
 * Common variant options used across components
 */
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Common state options used across components
 */
export type ComponentState = 'default' | 'hover' | 'pressed' | 'disabled' | 'loading' | 'success' | 'error';

/**
 * Color theme options
 */
export type ComponentColor = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'gray' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'yellow' 
  | 'purple' 
  | 'pink';
