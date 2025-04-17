export interface DialogProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonPress: () => void;
  children: React.ReactNode;
}