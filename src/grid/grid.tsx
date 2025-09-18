import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { createStyle } from '../utils/styleCompat';
import { GridProps, ItemProps } from "./Grid.type";
import { Breakpoint, ResponsiveValue } from "./Grid.type";

function isResponsiveObject<T>(value: ResponsiveValue<T>): value is Partial<Record<Breakpoint, T>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function resolveResponsiveValue<T>(value: ResponsiveValue<T> | undefined, breakpoint: Breakpoint = 'xs'): T | undefined {
  if (value === undefined) return undefined;

  if (isResponsiveObject(value)) {
    if (value[breakpoint] !== undefined) {
      return value[breakpoint];
    }

    if (value.xs !== undefined) {
      return value.xs;
    }

    return undefined;
  }

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
      style,
      size,
      ...props
    },
    ref
  ) => {
    const currentBreakpoint: Breakpoint = 'xs';

    const resolvedDirection = resolveResponsiveValue(direction, currentBreakpoint) || "row";
    const resolvedColumns = resolveResponsiveValue(columns, currentBreakpoint);
    const resolvedRows = resolveResponsiveValue(rows, currentBreakpoint);
    const resolvedSpacing = resolveResponsiveValue(spacing, currentBreakpoint);
    const resolvedRowSpacing = resolveResponsiveValue(rowSpacing, currentBreakpoint);
    const resolvedColumnSpacing = resolveResponsiveValue(columnSpacing, currentBreakpoint);
    const resolvedSize = resolveResponsiveValue(size, currentBreakpoint);

    const effectiveRowGap = resolvedRowSpacing !== undefined ? resolvedRowSpacing * 8 :
      resolvedSpacing !== undefined ? resolvedSpacing * 8 : 0;

    const effectiveColumnGap = resolvedColumnSpacing !== undefined ? resolvedColumnSpacing * 8 :
      resolvedSpacing !== undefined ? resolvedSpacing * 8 : 0;

    let gridStyles: any = {
      display: "flex",
      flexDirection: resolvedDirection,
      flexWrap: "wrap",
      rowGap: effectiveRowGap,
      columnGap: effectiveColumnGap,
    };

    if (container) {
      gridStyles.width = "100%";
    }

    if (resolvedSize !== undefined) {
      const sizePercentage = ((resolvedSize / 12) * 100).toFixed(2) + '%';
      gridStyles.width = sizePercentage;
      gridStyles.flexBasis = sizePercentage;
      gridStyles.flexGrow = 0;
      gridStyles.flexShrink = 0;
    }

    const gridContext = {
      direction: resolvedDirection,
      columns: resolvedColumns || 12,
      rows: resolvedRows,
      columnGap: effectiveColumnGap,
      rowGap: effectiveRowGap,
    };

    const gridChildren = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          _gridContext: gridContext
        });
      }
      return child;
    });

    const containerStyle = createStyle({
      className: className,
      style: [styles.base, gridStyles, style].filter(Boolean)
    });

    return (
      <View ref={ref} style={containerStyle} {...props}>
        {gridChildren}
      </View>
    );
  }
);

Grid.displayName = "Grid";

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
  ({ children, xs, sm, md, lg, xl, className = "", style, _gridContext, size, ...props }, ref) => {
    const currentBreakpoint: Breakpoint = 'xs';

    let span = size;
    if (span === undefined) {
      if ((currentBreakpoint as Breakpoint) === 'xl' && xl !== undefined) span = xl;
      else if ((currentBreakpoint as Breakpoint) === 'lg' && lg !== undefined) span = lg;
      else if ((currentBreakpoint as Breakpoint) === 'md' && md !== undefined) span = md;
      else if ((currentBreakpoint as Breakpoint) === 'sm' && sm !== undefined) span = sm;
      else if (xs !== undefined) span = xs;
      else span = 1;
    }

    let itemStyles: any = {};

    if (_gridContext) {
      const { direction, columns } = _gridContext;

      if (columns) {
        const widthPercentage = ((span / columns) * 100).toFixed(2) + '%';

        itemStyles.flexBasis = widthPercentage;
        itemStyles.maxWidth = widthPercentage;
        itemStyles.flexGrow = 0;
        itemStyles.flexShrink = 0;
      }
    } else {
      itemStyles.flexGrow = span;
      itemStyles.flexShrink = 0;
      itemStyles.flexBasis = "auto";
    }

    const itemStyle = createStyle({
      className: className,
      style: [styles.item, itemStyles, style].filter(Boolean)
    });

    return (
      <View ref={ref} style={itemStyle} {...props}>
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