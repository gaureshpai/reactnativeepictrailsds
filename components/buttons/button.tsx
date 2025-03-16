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
  const states = {
    default : "bg-buttons-primary-default text-white ",
    pressed : "bg-buttons-primary-pressed text-white",
    hover : "bg-buttons-primary-hover text-white",
    disabled : "bg-buttons-primary-disabled",
  }

  console.log(background)

  return (
    <TouchableOpacity
      onPress={!disabled ? onClick : undefined}
      disabled={ disabled}
      style={{backgroundColor:background}}
      className={`${sizes[size]} ${background ? null : states[state]}`}
    >
      <Text className={`${state=="disabled" ? "text-gray-500" : "text-white"} bg-buttons`}>{label}</Text>
    </TouchableOpacity>
  );
};




