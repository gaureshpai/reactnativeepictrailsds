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