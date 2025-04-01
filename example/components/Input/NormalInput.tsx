import { useState, useRef, useEffect } from "react";
import { TextInput, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import { NInputProp } from "./Input.type";
const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
};

export default function NormalText({
  Size = "small",
  Label = "",
  Hint = "",
  placeholder = "Placeholder",
  inputType = "text",
  State = "Default",
  value = "",
}: NInputProp) {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<TextInput>(null); // Ref to focus the input

  // Focus the input for the "Active" state
  useEffect(() => {
    if (State === "Active" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [State]);

  // Determine if the input should have an outline
  const getOutlineClass = () => {
    if (["Loading", "Disabled", "ViewOnly"].includes(State)) {
      return "outline-none"; // Remove outline for these states
    }
    return ""; // Default outline
  };

  // Determine the icon to display based on the state
  const getIcon = () => {
    switch (State) {
      case "Correct":
        return <Ionicons name="checkmark-circle" size={24} color="#22c55e" />; // Green tick
      case "Incorrect":
        return <Ionicons name="alert-circle" size={24} color="#ef4444" />; // Red exclamation
      case "Loading":
        return <ActivityIndicator size="small" color="#e65300" />; // Loading spinner
      default:
        return null; // No icon for other states
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
          className={`bg-[#e8e8e8] p-[8px] placeholder:text-[#5e5e5e] ${getOutlineClass()} pr-[40px]`} // Add padding for icons
          editable={!["Disabled", "ViewOnly"].includes(State)} // Disable edit for "Disabled" and "ViewOnly"
          inputMode={inputType}
          value={inputValue}
          onChange={(e) => setInputValue(e.nativeEvent.text)}
          placeholder={placeholder}
        />
        {/* Icon for Correct, Incorrect, and Loading states */}
        {["Correct", "Incorrect", "Loading"].includes(State) && (
          <View className="absolute left-full top-1/2 -translate-x-full -translate-y-1/2 pr-4">
            {getIcon()}
          </View>
        )}
      </View>
      {Hint ? (
        <View className="text-sm text-[#5e5e5e]">
          <text>{Hint}</text>
        </View>
      ) : null}
    </View>
  );
}