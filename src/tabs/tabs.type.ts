type MessageType = 'none' | 'help' | 'error';

export interface TabsProps {
  label: string;
  placeholder?: string;
  value?: string;
  messageType?: MessageType;
  message?: string;
  onPress?: () => void;
}