import React, { ReactNode } from "react";


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
