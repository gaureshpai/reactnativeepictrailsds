import React, { useState, useEffect } from "react";
 import { Pressable, Text, View, ActivityIndicator } from "react-native";
 import CheckBoxIcon from "@mui/icons-material/CheckBox"; 
 import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"; 
 import { TypeDocsProps } from "./Button.type";

 
 const TypeDoc = ({
   icon = "right",
   buttonLabel = "Button",
   label = "I agree to the terms and conditions.",
   size = "medium", 
   state = "default", 
   disabled = false, 
   onClick, 
   background = null, 
 }: TypeDocsProps) => {
   const [isChecked, setIsChecked] = useState(false); 
   const [isHovered, setIsHovered] = useState(false); 
   const [isPressed, setIsPressed] = useState(false); 
 
   
   useEffect(() => {
     if (state === "loading" || state === "pressed") {
       setIsChecked(true); 
     }
   }, [state]);
 
   
   const sizes = {
     small: "w-3/4 min-w-[80px] p-[10px]", 
     medium: "w-full min-w-[120px] p-[10px]", 
     large: "w-full min-w-[160px] p-[15px]", 
   };
 
   
   const buttonStates = {
     default: "bg-black", 
     pressed: "bg-gray-800", 
     hover: "bg-gray-900", 
     disabled: "bg-gray-300", 
     loading: "bg-black", 
   };
 
   
   const isButtonDisabled = disabled || !isChecked;
 
   
   const isHoverEffectEnabled = !isButtonDisabled && state !== "disabled" && state !== "loading";
 
   
   const handlePress = () => {
     if (!isButtonDisabled) {
       setIsPressed(true); 
       setTimeout(() => setIsPressed(false), 100); 
       if (onClick) {
         onClick(); 
       }
     }
   };
 
   return (
     <View className="flex justify-center items-center w-[335px] p-5">
       
       <Pressable
         onPress={() => setIsChecked(!isChecked)} 
         className="flex-row items-center mb-5"
       >
         
         {icon === "right" && (
           <>
             {isChecked ? (
               <CheckBoxIcon className="text-black text-2xl" /> 
             ) : (
               <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" /> 
             )}
             <Text className="ml-2.5">{label}</Text>
           </>
         )}
 
         
         {icon === "left" && (
           <>
             <Text className="mr-2.5">{label}</Text>
             {isChecked ? (
               <CheckBoxIcon className="text-black text-2xl" /> 
             ) : (
               <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" /> 
             )}
           </>
         )}
       </Pressable>
 
       
       <Pressable
         onPress={handlePress} 
         disabled={isButtonDisabled} 
         onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} 
         onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} 
         style={{ backgroundColor: background || undefined }} 
         className={`${sizes[size]} ${
           background
             ? null 
             : isButtonDisabled
             ? buttonStates.disabled 
             : isPressed
             ? buttonStates.pressed 
             : isHovered && isHoverEffectEnabled
             ? buttonStates.hover 
             : buttonStates[state]
         } flex items-center justify-center`}
       >
         {state === "loading" ? (
           <ActivityIndicator size="small" color="#ffffff" /> 
         ) : (
           <Text className={`${isButtonDisabled ? "text-[#868686]" : "text-white"}`}>
             {buttonLabel}
           </Text>
         )}
       </Pressable>
     </View>
   );
 };
 
 export default TypeDoc;