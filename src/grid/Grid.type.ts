import { ReactNode } from "react";
import { ContainerComponentProps } from '../types/common';

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export interface GridProps extends ContainerComponentProps {
  children: ReactNode;
  container?: boolean;
  spacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  columns?: ResponsiveValue<number>;
  rows?: ResponsiveValue<number>;
  direction?: ResponsiveValue<"row" | "column">;
  size?: ResponsiveValue<number>;
}

export interface ItemProps extends ContainerComponentProps {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  size?: number;
}
