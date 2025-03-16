import { useState } from "react";
import { Pressable, Text, Touchable, TouchableOpacity } from "react-native";
// import { Primary } from "./Button.stories";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: "right" | "left" | "none";
  loading?: boolean;
  state?: "default" | "pressed" | "hover" | "disabled";
  disabled?: boolean;
  onClick?: ()=>{}|void,
  background?:string|null
};

export const Button = ({ label, onPress, state,size, icon="none" ,loading = false, disabled,onClick,background}: ButtonProps) => {
  const sizes = {
    sm : "w-fit h-fit p-[10px]",
    md : "w-fit h-fit p-[10px]",
    lg : "w-fit h-fit p-[10px]",
  }
  const [state1, setState1] = useState(state);  
  const states = {
    default : "bg-buttons-primary-default ",
    pressed : "bg-buttons-primary-pressed ",
    hover : "bg-buttons-primary-hover ",
    disabled : "bg-buttons-primary-disabled",
  }
  background = disabled ? null : background
  return (
    <Pressable
      onPress={!disabled ? onClick : undefined}
      disabled={ disabled}
      style={{backgroundColor:background}}
      className={`${sizes[size]} ${background ? null : disabled ? states.disabled : states[state1]}  hover:bg-buttons-primary-hover active:bg-buttons-primary-pressed`}
    >
      <Text className={`${state1=="disabled" ? "text-gray-500" : "text-white"} bg-buttons`}>{label}</Text>
    </Pressable>
  );
};




