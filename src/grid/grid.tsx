import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

import { GridProps, ItemProps } from "./Grid.type";
import { Breakpoint, ResponsiveValue } from "./Grid.type";

// Type guard to check if value is a responsive object
function isResponsiveObject<T>(value: ResponsiveValue<T>): value is Partial<Record<Breakpoint, T>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Helper to resolve responsive values
function resolveResponsiveValue<T>(value: ResponsiveValue<T> | undefined, breakpoint: Breakpoint = 'xs'): T | undefined {
  if (value === undefined) return undefined;
  
  if (isResponsiveObject(value)) {
    // First try to get value for current breakpoint
    if (value[breakpoint] !== undefined) {
      return value[breakpoint];
    }
    
    // Fallback to xs if specified breakpoint not found
    if (value.xs !== undefined) {
      return value.xs;
    }
    
    // If no valid breakpoint values found, return undefined
    return undefined;
  }
  
  // Direct value
  return value;
}

const Grid = React.forwardRef<View, GridProps>(
  (
    {
      children,
      container = false,
      spacing,
      rowSpacing,
      columnSpacing,
      columns,
      rows,
      direction = "row",
      className = "",
      size,
    },
    ref
  ) => {
    // Current breakpoint - in a real app, you would determine this based on screen size
    const currentBreakpoint: Breakpoint = 'xs';
    
    // Resolve responsive values for the current breakpoint
    const resolvedDirection = resolveResponsiveValue(direction, currentBreakpoint) || "row";
    const resolvedColumns = resolveResponsiveValue(columns, currentBreakpoint);
    const resolvedRows = resolveResponsiveValue(rows, currentBreakpoint);
    const resolvedSpacing = resolveResponsiveValue(spacing, currentBreakpoint);
    const resolvedRowSpacing = resolveResponsiveValue(rowSpacing, currentBreakpoint);
    const resolvedColumnSpacing = resolveResponsiveValue(columnSpacing, currentBreakpoint);
    const resolvedSize = resolveResponsiveValue(size, currentBreakpoint);
    
    // Calculate final spacing values with priority for specific over general
    const effectiveRowGap = resolvedRowSpacing !== undefined ? resolvedRowSpacing * 8 : 
                           resolvedSpacing !== undefined ? resolvedSpacing * 8 : 0;
    
    const effectiveColumnGap = resolvedColumnSpacing !== undefined ? resolvedColumnSpacing * 8 : 
                              resolvedSpacing !== undefined ? resolvedSpacing * 8 : 0;
    
    // Calculate grid layout styles
    let gridStyles: any = {
      display: "flex",
      flexDirection: resolvedDirection,
      flexWrap: "wrap",
      rowGap: effectiveRowGap,
      columnGap: effectiveColumnGap,
    };
    
    // If it's a container, take full width
    if (container) {
      gridStyles.width = "100%";
    }
    
    // Apply size if provided (for child grids inside a container)
    if (resolvedSize !== undefined) {
      const sizePercentage = ((resolvedSize / 12) * 100).toFixed(2) + '%';
      gridStyles.width = sizePercentage;
      gridStyles.flexBasis = sizePercentage;
      gridStyles.flexGrow = 0;
      gridStyles.flexShrink = 0;
    }
    
    // Create grid context to pass to children
    const gridContext = {
      direction: resolvedDirection,
      columns: resolvedColumns || 12,
      rows: resolvedRows,
      columnGap: effectiveColumnGap,
      rowGap: effectiveRowGap,
    };
    
    // Pass grid context to direct children
    const gridChildren = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          _gridContext: gridContext
        });
      }
      return child;
    });
    
    return (
      <View ref={ref} style={[styles.base, gridStyles]} className={className}>
        {gridChildren}
      </View>
    );
  }
);

Grid.displayName = "Grid";

// Extended ItemProps interface to include internal grid context
interface ExtendedItemProps extends ItemProps {
  _gridContext?: {
    direction: "row" | "column";
    columns: number;
    rows?: number;
    columnGap: number;
    rowGap: number;
  };
}

const GridItem = React.forwardRef<View, ExtendedItemProps>(
  ({ children, xs, sm, md, lg, xl, className = "", _gridContext, size }, ref) => {
    // Current breakpoint - in a real app, determine based on screen size
    const currentBreakpoint: Breakpoint = 'xs';
    
    // Determine which size value to use based on current breakpoint with fallback
    let span = size;
    if (span === undefined) {
      if ((currentBreakpoint as Breakpoint) === 'xl' && xl !== undefined) span = xl;
      else if ((currentBreakpoint as Breakpoint) === 'lg' && lg !== undefined) span = lg;
      else if ((currentBreakpoint as Breakpoint) === 'md' && md !== undefined) span = md;
      else if ((currentBreakpoint as Breakpoint) === 'sm' && sm !== undefined) span = sm;
      else if (xs !== undefined) span = xs;
      else span = 1; // Default to 1 if no size specified
    }
    
    let itemStyles: any = {};
    
    if (_gridContext) {
      const { direction, columns } = _gridContext;
      
      if (columns) {
        // Calculate width as percentage based on column span
        const widthPercentage = ((span / columns) * 100).toFixed(2) + '%';
        
        itemStyles.flexBasis = widthPercentage;
        itemStyles.maxWidth = widthPercentage;
        itemStyles.flexGrow = 0;
        itemStyles.flexShrink = 0;
      }
    } else {
      // No grid context, use simple flexbox approach
      itemStyles.flexGrow = span;
      itemStyles.flexShrink = 0;
      itemStyles.flexBasis = "auto";
    }
    
    return (
      <View ref={ref} style={[styles.item, itemStyles]} className={className}>
        {children}
      </View>
    );
  }
);

GridItem.displayName = "GridItem";

const styles = StyleSheet.create({
  base: {
    width: "100%",
  },
  item: {
    minWidth: 0,
  },
});

const GridRoot = Object.assign(Grid, { Item: GridItem });

export { GridRoot as Grid };
export type { GridProps, ItemProps as GridItemProps };