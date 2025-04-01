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
    icon?: "left" | "right"; // Define the type for the icon prop
    buttonLabel?: string; // Optional button label
    label?: string; // Optional terms and conditions label
    size?: "small" | "medium" | "large"; // Size prop for the button
    state?: "default" | "pressed" | "hover" | "disabled" | "loading"; // State prop for the button
    disabled?: boolean; // Disabled state
    onClick?: () => void; // onClick function
    background?: string | null; // Background color as a hex code
  };