export interface SegmentedSwitchIOSProps {
  title: string;
  items: string[];
  selectedIndex?: number | null;
  messageType?: 'none' | 'help' | 'error';
  message?: string;
  onChange?: (index: number) => void;
}