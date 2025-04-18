import { ReactNode } from "react";
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
