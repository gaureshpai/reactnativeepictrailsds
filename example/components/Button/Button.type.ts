import { PressableProps } from "react-native";
export type ButtonProps = PressableProps&{
    label: string;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    icon?: "right" | "left" ;
    state?: "default" | "pressed" | "hover" | "disabled" | "loading";
    disabled?: boolean;
    background?: string | null;

  };

export type TypeDocsProps = PressableProps&{
    icon?: "left" | "right"; 
    buttonLabel?: string; 
    label?: string; 
    size?: "small" | "medium" | "large"; 
    state?: "default" | "pressed" | "hover" | "disabled" | "loading"; 
    disabled?: boolean; 
    background?: string | null; 
  };