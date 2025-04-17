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
