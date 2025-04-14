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