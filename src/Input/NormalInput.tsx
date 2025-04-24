import { useState, useRef, useEffect } from "react";
import { TextInput, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { NInputProp } from "./Input.type";
const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
  full: "w-full h-full",
  fit : "w-fit h-full",
}; 

export default function NormalText({
  Size = "small",
  Label = "",
  Hint = "",
  State = "Default",
  value = "",
  curved = false,
  ...props
}: NInputProp) {
  const inputRef = useRef<TextInput>(null); 

  
  useEffect(() => {
    if (State === "Active" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [State]);

  
  const getOutlineClass = () => {
    if (["Loading", "Disabled", "ViewOnly"].includes(State)) {
      return "outline-none"; 
    }
  };

  
  const getIcon = () => {
    switch (State) {
      case "Correct":
        return <Ionicons name="checkmark-circle" size={24} color="#22c55e" />; 
      case "Incorrect":
        return <Ionicons name="alert-circle" size={24} color="#ef4444" />; 
      case "Loading":
        return <ActivityIndicator size="small" color="#e65300" />; 
      default:
        return null; 
    }
  };

  return (
    <View className="flex flex-col gap-2">
      {Label ? (
        <View className="text-sm">
          <text>{Label}</text>
        </View>
      ) : null}
      <View className={`relative ${Sizes[Size]} `}>
        <TextInput 
          ref={inputRef}
          className={`bg-[#e8e8e8] p-[8px] placeholder:text-gray-600 ${getOutlineClass()} pr-[40px] ${curved && 'rounded-md'}`} 
          editable={!["Disabled", "ViewOnly"].includes(State)} 
          {...props}
        />  
        
        {["Correct", "Incorrect", "Loading"].includes(State) && (
          <View className="absolute left-full top-1/2 -translate-x-full -translate-y-1/2 pr-4">
            {getIcon()}
          </View>
        )}
      </View>
      {Hint ? (
        <View className="text-sm text-inputHint">
          <text>{Hint}</text>
        </View>
      ) : null}
    </View>
  );
}
