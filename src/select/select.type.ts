// Define types for the component props
export type SelectValue = {
  value: string;
  label: string;
  flagCode?: string;
};

type MessageType = 'none' | 'help' | 'error';

export interface SelectProps {
  label: string;
  values: SelectValue[];
  placeholder?: string;
  prefix?: boolean;
  messageType?: MessageType;
  message?: string;
  onChange?: (value: SelectValue) => void;
  disabled?: boolean;
  containerStyle?: any;
}