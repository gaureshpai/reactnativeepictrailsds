export type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    icon?: "right" | "left" ;
    state?: "default" | "pressed" | "hover" | "disabled" | "loading";
    disabled?: boolean;
    onClick?: (() => void)  | (()=>{});
    background?: string | null;
  };

export type TypeDocsProps = {
    icon?: "left" | "right"; 
    buttonLabel?: string; 
    label?: string; 
    size?: "small" | "medium" | "large"; 
    state?: "default" | "pressed" | "hover" | "disabled" | "loading"; 
    disabled?: boolean; 
    onClick?: () => void; 
    background?: string | null; 
  };