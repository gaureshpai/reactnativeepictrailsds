import { useState } from "react";
import { TextInput, View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

type InputProp = {
  Size?: "small" | "medium" | "large";
  Label?: string;
  Hint?: string;
  State?: "Default" | "Error" | "Success" | "Loading";
  placeholder?: string;
  inputType?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url";
  value?: any | "";
  input?: string[]; // Add input array for comparison
};

const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
};

export default function AutoComplete({
  Size = "small",
  Label = "",
  Hint = "",
  placeholder = "Placeholder",
  inputType = "text",
  State = "Default",
  value = "",
  input = [], // Default to empty array
}: InputProp) {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false); // Track focus state
  const [suggestions, setSuggestions] = useState<string[]>([]); // Track suggestions

  // Function to handle input change
  const handleInputChange = (text: string) => {
    setInputValue(text);
    // Filter suggestions based on input
    if (text.length > 0) {
      const filteredSuggestions = input.filter((item) =>
        item.toLowerCase().startsWith(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Function to clear input
  const clearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  // Determine border color based on state
  const getBorderColor = () => {
    switch (State) {
      case "Error":
        return "border-red-500"; // Red border for error state
      case "Success":
        return "border-green-500"; // Green border for success state
      case "Default":
        return isFocused ? "border-black" : "border-transparent"; // Black border when focused, no border otherwise
      default:
        return "border-transparent"; // No border for other states
    }
  };

  // Determine hint text color based on state
  const getHintColor = () => {
    switch (State) {
      case "Error":
        return "text-red-500"; // Red hint for error state
      case "Success":
        return "text-green-500"; // Green hint for success state
      default:
        return "text-[#5e5e5e]"; // Default hint color
    }
  };

  return (
    <View className="flex flex-col gap-2 relative w-[375px]"> {/* Constrain the container to 375px */}
      {Label ? (
        <View className="text-sm">
          <Text>{Label}</Text>
        </View>
      ) : null}
      <View className="relative">
        {/* Input Field */}
        <View className="flex-row items-center w-[375px]"> {/* Constrain the input container to 375px */}
          <TextInput
            className={`${Sizes[Size]} p-[8px] placeholder:text-[#5e5e5e] bg-[#e8e8e8] border-[3px] ${getBorderColor()} pr-[40px] outline-none flex-1`} // Add padding for icons and outline-none
            editable={State !== "Loading"}
            inputMode={inputType}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleInputChange}
            placeholder={placeholder}
            style={{ width: 375 }} // Explicitly set width to 375px
          />
          {/* Cross icon for Default state */}
          {State === "Default" && inputValue.length > 0 && (
            <TouchableOpacity
              onPress={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Ionicons name="close-circle" size={24} color="#5e5e5e" />
            </TouchableOpacity>
          )}
          {/* Loading spinner for Loading state */}
          {State === "Loading" && (
            <View className="absolute right-2 top-1/2 -translate-y-1/2">
              <ActivityIndicator size="small" color="#e65300" />
            </View>
          )}
        </View>
        {/* Suggestions inside the input field */}
        {suggestions.length > 0 && (
          <View className="absolute top-0 left-0 w-[375px] h-full pointer-events-none"> {/* Constrain suggestions to 375px */}
            <TextInput
              className={`${Sizes[Size]} p-[8px] bg-transparent text-[#5e5e5e] border-transparent pr-[40px] outline-none flex-1`}
              editable={false}
              value={inputValue + suggestions[0].slice(inputValue.length)}
              style={{ width: 375 }} // Explicitly set width to 375px
            />
          </View>
        )}
      </View>
      {Hint ? (
        <View className={`text-sm ${getHintColor()} flex flex-row items-center gap-1`}>
          {/* Error icon for Error state */}
          {State === "Error" && (
            <Ionicons name="alert-circle" size={16} color="#ef4444" />
          )}
          {/* Success icon for Success state */}
          {State === "Success" && (
            <Ionicons name="checkmark-circle" size={16} color="#22c55e" />
          )}
          <Text>{Hint}</Text>
        </View>
      ) : null}
    </View>
  );
}