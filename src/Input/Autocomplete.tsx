import { useState } from "react";
import { TextInput, View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { AInputProp } from "./Input.type";

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
  input = [], 
}: AInputProp) {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false); 
  const [suggestions, setSuggestions] = useState<string[]>([]); 
  
  
  const handleInputChange = (text: string) => {
    setInputValue(text);
    
    if (text.length > 0) {
      const filteredSuggestions = input.filter((item) =>
        item.toLowerCase().startsWith(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  
  const clearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  
  const getBorderColor = () => {
    switch (State) {
      case "Error":
        return "border-red-500"; 
      case "Success":
        return "border-green-500"; 
      case "Default":
        return isFocused ? "border-black" : "border-transparent"; 
      default:
        return "border-transparent"; 
    }
  };

  
  const getHintColor = () => {
    switch (State) {
      case "Error":
        return "text-red-500"; 
      case "Success":
        return "text-green-500"; 
      default:
        return "text-[#5e5e5e]"; 
    }
  };

  return (
    <View className="flex flex-col gap-2 relative w-[375px]"> 
      {Label ? (
        <View className="text-sm">
          <Text>{Label}</Text>
        </View>
      ) : null}
      <View className="relative">
        
        <View className="flex-row items-center w-[375px]"> 
          <TextInput
            className={`${Sizes[Size]} p-[8px] placeholder:text-[#5e5e5e] bg-[#e8e8e8] border-[3px] ${getBorderColor()} pr-[40px] outline-none flex-1`} 
            editable={State !== "Loading"}
            inputMode={inputType}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {setIsFocused(false)
              setInputValue( suggestions[0]? suggestions[0] : inputValue)
              
            }}
            onChangeText={handleInputChange}
            placeholder={placeholder}
            style={{ width: 375 }} 
          />
          
          {State === "Default" && inputValue.length > 0 && (
            <TouchableOpacity
              onPress={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Ionicons name="close-circle" size={24} color="#5e5e5e" />
            </TouchableOpacity>
          )}
          
          {State === "Loading" && (
            <View className="absolute right-2 top-1/2 -translate-y-1/2">
              <ActivityIndicator size="small" color="#e65300" />
            </View>
          )}
        </View>
        
        {suggestions.length > 0 && (
          <View className={`absolute top-0 left-0 ${Sizes[Size]}  pointer-events-none`}> 
            <TextInput
              className={`${Sizes[Size]} p-[8px] border-[3px] bg-transparent text-[#5e5e5e] border-transparent pr-[40px] outline-none flex-1`}
              editable={false}
              value={inputValue + suggestions[0].slice(inputValue.length)}
              style={{ width: 375 }} 
            />
          </View>
        )}
      </View>
      {Hint ? (
        <View className={`text-sm ${getHintColor()} flex flex-row items-center gap-1`}>
          
          {State === "Error" && (
            <Ionicons name="alert-circle" size={16} color="#ef4444" />
          )}
          
          {State === "Success" && (
            <Ionicons name="checkmark-circle" size={16} color="#22c55e" />
          )}
          <Text>{Hint}</Text>
        </View>
      ) : null}
    </View>
  );
}