import { ContainerComponentProps } from '../types/common';

export interface DialogProps extends ContainerComponentProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonPress: () => void;
  children: React.ReactNode;
}
