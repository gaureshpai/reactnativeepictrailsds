import { useState } from "react";
import { TextInput, View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { AInputProp } from "./Input.type";

const Sizes = {
  small: "w-[375px] h-[36px]",
  medium: "w-[375px] h-[48px]",
  large: "w-[375px] h-[56px]",
  full: "w-full h-full",
  fit : "w-fit h-full",
};

export default function AutoComplete({
  Size = "small",
  Label = "",
  Hint = "",
  State = "Default",
  value = "",
  input = [], 
  curved = false,
  ...props
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
        return "border-borderNegative"; 
      case "Success":
        return "border-borderPositive"; 
      case "Default":
        return isFocused ? "border-black" : "border-transparent"; 
      default:
        return "border-transparent"; 
    }
  };

  
  const getHintColor = () => {
    switch (State) {
      case "Error":
        return "text-contentNegative"; 
      case "Success":
        return "text-contentPositive"; 
      default:
        return "text-inputHint"; 
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
            className={`${Sizes[Size]} p-[8px] placeholder:text-inputPlaceholder bg-inputBackground border-[3px] ${getBorderColor()} pr-[40px] outline-none flex-1 ${curved && "rounded-md"}`} 
            editable={State !== "Loading"}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {setIsFocused(false)
              setInputValue( suggestions[0]? suggestions[0] : inputValue)
              
            }}
            onChangeText={handleInputChange}
            style={{ width: 375 }} 
            {...props}
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
              <ActivityIndicator size="small" color="#276ef1" />
            </View>
          )}
        </View>
        
        {suggestions.length > 0 && (
          <View className={`absolute top-0 left-0 ${Sizes[Size]}  pointer-events-none`}> 
            <TextInput
              className={`${Sizes[Size]} p-[8px] border-[3px] bg-transparent text-[] border-transparent pr-[40px] outline-none flex-1 ${curved && "rounded-md"}`}
              editable={false}
              value={inputValue + suggestions[0].slice(inputValue.length)}
              style={{ width: 375 }} 
              {...props}
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
          <Text className={`${State === "Error" && "color-contentNegative"} ${State === "Success" && "text-contentPositive"}   `}>{Hint}</Text>
        </View>
      ) : null}
    </View>
  );
}