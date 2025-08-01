import { ReactNode } from "react";
import { PressableProps, TextInputProps } from "react-native";

export type ButtonProps = PressableProps & {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: "right" | "left";
  state?: "default" | "pressed" | "hover" | "disabled" | "loading";
  disabled?: boolean;
  background?: string | null;

};

export type TypeDocsProps = PressableProps & {
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

export type IconName = keyof typeof iconMap;

export type PlaceholderSize =
  | "xl"
  | "large"
  | "medium"
  | "regular"
  | "small"
  | "xs"
  | "xxs"
  | "tiny";

export type AvatarSize = "xl" | "large" | "medium" | "small" | "xs" | "xxs";

export interface IconComponentProps {
  type: "icon" | "placeholder" | "avatar";
  className?: string;
  iconName?: IconName;
  size?: number;
  theme?: "light" | "dark";
  placeholderSize?: PlaceholderSize;
  filled?: boolean;
  avatarSize?: AvatarSize;
  initials?: string;
}

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

export type ImageContent = {
  type: 'image';
  imageUri: string;
  isLocal?: boolean;
};

export type VideoContent = {
  type: 'video';
  uri: string;
};

export type TextContent = {
  type: 'text';
  text: string;
  backgroundColor?: string;
};

export type ContentItem = VideoContent | ImageContent | TextContent;

export interface SocialMediaContainerProps {
  contentItems: ContentItem[];
  duration?: number;
  onActiveIndexChange?: (index: number) => void;
  index?: number;
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

type StatusType = 'information' | 'success' | 'warning' | 'error';
type ButtonType = 'primary' | 'subtle';

export interface StatusButtonProps {
  label?: string;
  type?: StatusType;
  buttonType?: ButtonType;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconOnly?: boolean;
  onPress?: () => void;
}

const alertStyles = {
  information: {
    backgroundColor: "#E8E8E8",
    color: "#1F1F1F",
    secondaryColor: "#DDDDDD",
    secondaryTextColor: "#1F1F1F",
    icon: "information-circle",
  },
  success: {
    backgroundColor: "#D3EFDA",
    color: "#166C3B",
    secondaryColor: "#B1EAC2",
    secondaryTextColor: "#166C3B",
    icon: "checkmark-circle",
  },
  warning: {
    backgroundColor: "#FEE2D4",
    color: "#C54600",
    secondaryColor: "#FFD3BC",
    secondaryTextColor: "#C54600",
    icon: "warning",
  },
  error: {
    backgroundColor: "#FFE1DE",
    color: "#950F22",
    secondaryColor: "#FFD2CD",
    secondaryTextColor: "#950F22",
    icon: "alert-circle",
  },
};

type AlertType = "information" | "success" | "warning" | "error";

interface AlertProps {
  message: string;
  label?: string;
  description?: string;
  icon?: boolean;
  inline?: boolean;
  suppressed?: boolean;
  type?: AlertType;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

export { alertStyles, AlertProps };

export interface SegmentedSwitchIOSProps {
  title: string;
  items: string[];
  selectedIndex?: number | null;
  messageType?: 'none' | 'help' | 'error';
  message?: string;
  onChange?: (index: number) => void;
}

export interface SkeletonProps {
  className?: string;
}

interface SocialButtonProps {
  provider: "email" | "google" | "facebook" | "apple";
  onPress: () => void;
}

const providerConfig = {
  email: {
    text: "Sign in with E-mail",
    iconName: "mail",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "black",
  },
  google: {
    text: "Sign in with Google",
    iconName: "logo-google",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "#4285F4",
  },
  facebook: {
    text: "Sign in with Facebook",
    iconName: "logo-facebook",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    iconColor: "#1877F2",
  },
  apple: {
    text: "Sign in with Apple",
    iconName: "logo-apple",
    backgroundColor: "bg-black",
    textColor: "text-white",
    iconColor: "white",
  },
};

interface SocialLoginProps {
  email?: boolean;
  google?: boolean;
  facebook?: boolean;
  apple?: boolean;
  onEmailSignIn?: () => void;
  onGoogleSignIn?: () => void;
  onFacebookSignIn?: () => void;
  onAppleSignIn?: () => void;
}

export { SocialButtonProps, providerConfig, SocialLoginProps };

export interface NavTabProps {
  tabs: string[];
  initialActiveIndex?: number;
  onTabChange?: (index: number) => void;
}

type MessageType = 'none' | 'help' | 'error';

export interface TabsProps {
  label: string;
  placeholder?: string;
  value?: string;
  messageType?: MessageType;
  message?: string;
  onPress?: () => void;
}

type ActionType = "none" | "primary" | "secondary";
export interface EmptyStateProps {
  message: string;
  description?: string;
  label?: string;
  onPress?: () => void;
  action?: ActionType;
  children?: ReactNode;
}

export type SelectValue = {
  value: string;
  label: string;
  flagCode?: string;
};

export interface SelectProps {
  label: string;
  values: SelectValue[];
  placeholder?: string;
  prefix?: boolean;
  messageType?: MessageType;
  message?: string;
  onChange?: (value: SelectValue) => void;
  disabled?: boolean;
  containerStyle?: any;
}