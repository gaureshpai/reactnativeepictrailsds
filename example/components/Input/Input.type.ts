export type NInputProp = {
    Size?: "small" | "medium" | "large";
    Label?: string;
    Hint?: string;
    State?: "Default" | "Active" | "Correct" | "ViewOnly" | "Loading" | "Disabled" | "Incorrect";
    placeholder?: string;
    inputType?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url";
    value?: any | "";
  };

  export type AInputProp = {
    Size?: "small" | "medium" | "large";
    Label?: string;
    Hint?: string;
    State?: "Default" | "Error" | "Success" | "Loading";
    placeholder?: string;
    inputType?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url";
    value?: any | "";
    input?: string[]; 
  };