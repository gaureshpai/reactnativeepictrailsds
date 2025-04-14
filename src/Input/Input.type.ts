import { TextInputProps } from "react-native";

export type NInputProp =TextInputProps & {
  Size?: "small" | "medium" | "large";
  Label?: string;
  Hint?: string;
  State?: "Default" | "Active" | "Correct" | "ViewOnly" | "Loading" | "Disabled" | "Incorrect";
  curved?: boolean
};

export type AInputProp = TextInputProps & {
  Size?: "small" | "medium" | "large";
  Label?: string;
  Hint?: string;
  State?: "Default" | "Error" | "Success" | "Loading";
  input?: string[]; 
  curved?: boolean
};