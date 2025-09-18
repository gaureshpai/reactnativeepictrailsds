import { PressableProps } from "react-native";
import { PressableComponentProps, ComponentSize, ComponentState } from '../types/common';

export type ButtonProps = PressableProps & PressableComponentProps & {
  label: string;
  variant?: "primary" | "secondary";
  size?: ComponentSize;
  icon?: "right" | "left";
  state?: ComponentState;
  background?: string | null;
};

export type TypeDocsProps = PressableProps & PressableComponentProps & {
  icon?: "left" | "right";
  buttonLabel?: string;
  label?: string;
  size?: ComponentSize;
  state?: ComponentState;
  background?: string | null;
  onClick?: () => void;
};
