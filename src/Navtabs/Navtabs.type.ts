import { ContainerComponentProps } from '../types/common';

export interface NavTabProps extends ContainerComponentProps {
  tabs: string[];
  initialActiveIndex?: number;
  onTabChange?: (index: number) => void;
}
