export interface NavigationBarProps {
  title: string;
  device?: 'ios' | 'android';
  action?: 1 | 2 | 3;
  size?: 'compact' | 'expandable';
  onClose?: () => void;
  onClipboard?: () => void;
  onForward?: () => void;
}