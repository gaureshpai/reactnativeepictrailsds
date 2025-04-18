type StatusType = 'information' | 'success' | 'warning' | 'error';
type ButtonType = 'primary' | 'subtle';

export interface StatusButtonProps {
  label?: string;
  type?: StatusType;
  buttonType?: ButtonType;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconOnly?: boolean;
  onPress?: () => void;
}