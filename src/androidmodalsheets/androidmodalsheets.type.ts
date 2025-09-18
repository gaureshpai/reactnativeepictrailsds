import { ReactNode } from 'react';
import { ContainerComponentProps } from '../types/common';

export interface AndroidModalSheetProps extends ContainerComponentProps {
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
