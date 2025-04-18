import { ReactNode } from "react";
import { PressableProps, TextInputProps } from "react-native";
export type ButtonProps = PressableProps&{
    label: string;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    icon?: "right" | "left" ;
    state?: "default" | "pressed" | "hover" | "disabled" | "loading";
    disabled?: boolean;
    background?: string | null;

  };

  export type TypeDocsProps = PressableProps&{
    icon?: "left" | "right"; 
    buttonLabel?: string; 
    label?: string; 
    size?: "small" | "medium" | "large"; 
    state?: "default" | "pressed" | "hover" | "disabled" | "loading"; 
    disabled?: boolean; 
    background?: string | null; 
  };

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export interface GridProps {
  children: ReactNode;
  container?: boolean;
  spacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  columns?: ResponsiveValue<number>;
  rows?: ResponsiveValue<number>;
  direction?: ResponsiveValue<"row" | "column">;
  className?: string;
  size?: ResponsiveValue<number>;
}

export interface ItemProps {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  size?: number;
}

export type NInputProp = TextInputProps & {
    Size?: "small" | "medium" | "large";
    Label?: string;
    Hint?: string;
    State?: "Default" | "Active" | "Correct" | "ViewOnly" | "Loading" | "Disabled" | "Incorrect";
    curved?: boolean
};

export type AInputProp = TextInputProps & {
    Size?: "small" | "medium" | "large";
    Label?: string;
    Hint?: string;
    State?: "Default" | "Error" | "Success" | "Loading";
    input?: string[];
    curved?: boolean
};

export type TileProps = {
    w?: number;
    h?: number;
    label: string;
    paragraph?: string;
    variant?: "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5" | "variant-6";
    icon?: "sheart" | "heart" | "box" | "label";
    enabled?: boolean;
    selected?: boolean;
};

export interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  theme?: "light" | "dark";
  onPress: () => void;
}

export interface BottomNavProps {
  items: Array<{
    icon: string;
    label: string;
  }>;
  theme?: "light" | "dark";
  initialActiveIndex?: number;
  onItemPress?: (index: number) => void;
}

export interface Comment {
  id?: string | number;
  userInitials?: string;
  userName?: string;
  likes?: number;
  time?: string;
  text?: string;
}

export interface BottomSheetProps {
  showKnob?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonPress?: () => void;
  showComments?: boolean;
  comments?: Comment[];
  onAddComment?: (text: string) => void;
  onLikeComment?: (index: number) => void;
  onReplyComment?: (index: number) => void;
  children?: ReactNode;
  containerStyle?: object;
}

export interface CollapsibleProps {
  title: string;
  text?: string;
  initialCollapsed?: boolean;
  children?: React.ReactNode;
}

export interface DialogProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonPress: () => void;
  children: React.ReactNode;
}

// Map your iconography to Ionicons names
// This maps your design system icon names to actual Ionicons names
export const iconMap: Record<string, string> = {
  bell: "notifications-outline",
  calendar: "calendar-outline",
  comment: "chatbubble-outline",
  email: "mail-outline",
  grid: "grid-outline",
  phone: "call-outline",
  plus: "add-outline",
  "chevron-left": "chevron-back-outline",
  check: "checkmark-outline",
  envelope: "mail-outline",
  link: "link-outline",
  "chevron-right": "chevron-forward-outline",
  x: "close-outline",
  "info-circle": "information-circle-outline",
  at: "at-outline",
  ellipsis: "ellipsis-horizontal-outline",
  search: "search-outline",
  "phone-handset": "call-outline",
  "check-small": "checkmark-outline",
};

// Define the possible icon names from your iconography
export type IconName = keyof typeof iconMap;

// Define placeholder sizes
export type PlaceholderSize =
  | "xl"
  | "large"
  | "medium"
  | "regular"
  | "small"
  | "xs"
  | "xxs"
  | "tiny";

// Define avatar sizes
export type AvatarSize = "xl" | "large" | "medium" | "small" | "xs" | "xxs";

// Props for our IconComponent
export interface IconComponentProps {
  // Common props
  type: "icon" | "placeholder" | "avatar";
  className?: string;

  // Icon specific props
  iconName?: IconName;
  size?: number;
  theme?: "light" | "dark";

  // Placeholder specific props
  placeholderSize?: PlaceholderSize;
  filled?: boolean;

  // Avatar specific props
  avatarSize?: AvatarSize;
  initials?: string;
}

// Size mapping for both placeholder and avatar components
export const sizeMapping: Record<string, number> = {
  xl: 48,
  large: 40,
  medium: 32,
  regular: 24,
  small: 20,
  xs: 16,
  xxs: 12,
  tiny: 8,
};

export interface IOSModalSheetProps {
  title: string;
  label: string;
  action?: 1 | 2 | 3;
  compact?: boolean;
  onClose?: () => void;
  onButtonPress?: () => void;
  onClipboard?: () => void;
  onForward?: () => void;
  children?: ReactNode;
}

export interface LoadingProps {
  description?: string;
}

export type VideoContent = {
  type: "video";
  uri: string;
};

export type ImageContent = {
  type: "image";
  imageUri: string;
};

export type TextContent = {
  type: "text";
  text: string;
  backgroundColor?: string;
};

// Union type for all possible content types
export type ContentItem = VideoContent | ImageContent | TextContent;

// Component props interface
export interface SocialMediaContainerProps {
  contentItems: ContentItem[];
  duration?: number;
  onActiveIndexChange?: (index: number) => void;
}

export interface SocialMediaStackProps {
  children: React.ReactNode;
}
export interface StoryProgressBarsProps {
  totalStories: number;
  activeStoryIndex: number;
}

export interface NavigationBarProps {
  title: string;
  device?: 'ios' | 'android';
  action?: 1 | 2 | 3;
  size?: 'compact' | 'expandable';
  onClose?: () => void;
  onClipboard?: () => void;
  onForward?: () => void;
}
export interface CardProps {
  title?: string;
  label?: string;
  cardTitle?: boolean;
  button?: boolean;
  children?: ReactNode;
}
export interface CardSectionProps {
  title?: string;
  icon?: boolean;
  onPress?: () => void;
}
