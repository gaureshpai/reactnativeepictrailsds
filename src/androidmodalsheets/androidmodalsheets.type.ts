import { ReactNode } from 'react';

export interface AndroidModalSheetProps {
  title: string;
  label: string;
  action?: 1 | 2 | 3;
  compact?: boolean;
  onClose?: () => void;
  onButtonPress?: () => void;
  onClipboard?: () => void;
  onForward?: () => void;
  children?: ReactNode;
}