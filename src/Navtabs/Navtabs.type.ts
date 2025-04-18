export interface NavTabProps {
  tabs: string[];
  initialActiveIndex?: number;
  onTabChange?: (index: number) => void;
}