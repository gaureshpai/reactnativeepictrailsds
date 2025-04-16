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
