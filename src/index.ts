// Main components (work with both NativeWind and plain React Native)
export { default as Alert } from './alert/alert';
export { default as AndroidModalSheet } from './androidmodalsheets/androidmodalsheets';
export { default as BottomNav } from './bottomnav/bottomnav';
export { default as Button } from './Button/Button';
export { default as ButtonIcon } from './Button/icon';
export { default as ButtonRect } from './Button/rect';
export { default as ButtonTypeDoc } from './Button/typeDoc';
export { default as Card } from './card/card';
export { default as CardSection } from './card/section';
export { default as Collapse } from './collapse/collapse';
export { default as Dialog } from './dialog/dialog';
export { default as EmptyStates } from './emptystates/emptystates';
export { Grid } from './grid/grid';
export { default as Iconography } from './iconography/iconography';
export { default as Input } from './Input/Input';
export { default as Loading } from './loading/loading';
export { default as NavTabs } from './Navtabs/Navtabs';
export { default as Select } from './select/select';
export { default as Skeleton } from './skeleton/skeleton';
export { default as Tabs } from './tabs/tabs';
export { default as Tile } from './Tile/Tile';

// Social Media Stack components
export { default as SocialMediaStack } from './socialmediastack/socialmediastack';
export { default as SocialMediaContainer } from './socialmediastack/socialmediacontainer';
export { default as SocialMediaEngagement } from './socialmediastack/socialmediaengagement';
export { default as StoryProgressBar } from './socialmediastack/storyprogressbar';

// Legacy aliases for backward compatibility
export { default as TypeDoc } from './Button/typeDoc';
export { default as NormalInput } from './Input/Input'; // Alias to main Input
export { default as SocialLogin } from './sociallogin'; // Legacy name
export { default as RectButton } from './Button/rect'; // Alias for ButtonRect

// Export prop types for TypeScript users
export type { AlertProps } from './alert/alert';
export type { AndroidModalSheetProps } from './androidmodalsheets/androidmodalsheets.type';
export type { BottomNavProps } from './bottomnav/bottomnav.type';
export type { BottomSheetProps } from './bottomsheet/bottomsheet.type';
export type { ButtonProps, TypeDocsProps } from './Button/Button.type';
export type { CardProps } from './card/card.type';
export type { CollapsibleProps as CollapseProps } from './collapse/collapse.type';
export type { DialogProps } from './dialog/dialog.type';
export type { EmptyStateProps as EmptyStatesProps } from './emptystates/emptystates.type';
export type { GridProps } from './grid/Grid.type';
export type { AInputProp, NInputProp } from './Input/Input.type';
export type { IOSModalSheetProps as IosModalSheetProps } from './iosmodalsheets/iosmodalsheets.type';
export type { LoadingProps } from './loading/loading.type';
export type { NavigationBarProps } from './navigationbar/navigationbar.type';
export type { NavTabProps } from './Navtabs/Navtabs.type';
export type { SegmentedSwitchIOSProps } from './segmentedswitchios/segmentedswitchios.type';
export type { SelectProps, SelectValue } from './select/select.type';
export type { SkeletonProps } from './skeleton/skeleton.type';
export type { SocialButtonProps as SocialButtonsProps } from './socialbuttons/socialbuttons.type';
export type { SocialMediaStackProps } from './socialmediastack/socialmediastack.type';
export type { StatusButtonProps } from './statusbutton/statusbutton.type';
export type { TabsProps } from './tabs/tabs.type';
export type { TileProps } from './Tile/Tile.type';
export type { CardSectionProps } from './card/section';

// Utility functions and types
export * from './utils/styleCompat';
export type {
  BaseComponentProps,
  PressableComponentProps,
  TextComponentProps,
  ContainerComponentProps,
  ComponentSize,
  ComponentVariant,
  ComponentState,
  ComponentColor,
} from './types/common';
