import React, { useState, useEffect } from "react";
 import { Pressable, Text, View, ActivityIndicator } from "react-native";
 import CheckBoxIcon from "@mui/icons-material/CheckBox"; // Checked state
 import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"; // Unchecked state
 
 type TypeDocsProps = {
   icon?: "left" | "right"; // Define the type for the icon prop
   buttonLabel?: string; // Optional button label
   label?: string; // Optional terms and conditions label
   size?: "small" | "medium" | "large"; // Size prop for the button
   state?: "default" | "pressed" | "hover" | "disabled" | "loading"; // State prop for the button
   disabled?: boolean; // Disabled state
   onClick?: () => void; // onClick function
   background?: string | null; // Background color as a hex code
 };
 
 const TypeDoc = ({
   icon = "right",
   buttonLabel = "Button",
   label = "I agree to the terms and conditions.",
   size = "medium", // Default size is medium
   state = "default", // Default state is "default"
   disabled = false, // Default disabled state is false
   onClick, // onClick function
   background = null, // Default background color is null
 }: TypeDocsProps) => {
   const [isChecked, setIsChecked] = useState(false); // State for checkbox
   const [isHovered, setIsHovered] = useState(false); // State for hover
   const [isPressed, setIsPressed] = useState(false); // State for press
 
   // Automatically check the checkbox when the button is in a specific state
   useEffect(() => {
     if (state === "loading" || state === "pressed") {
       setIsChecked(true); // Check the checkbox
     }
   }, [state]);
 
   // Define sizes for the button using Tailwind-like classes
   const sizes = {
     small: "w-3/4 min-w-[80px] p-[10px]", // Small size (75% width, min-width 80px, padding 10px)
     medium: "w-full min-w-[120px] p-[10px]", // Medium size (100% width, min-width 120px, padding 10px)
     large: "w-full min-w-[160px] p-[15px]", // Large size (100% width, min-width 160px, padding 15px)
   };
 
   // Define states for the button
   const buttonStates = {
     default: "bg-black", // Default state: black background
     pressed: "bg-gray-800", // Pressed state: darker black background
     hover: "bg-gray-900", // Hover state: slightly lighter black background
     disabled: "bg-gray-300", // Disabled state: gray background
     loading: "bg-black", // Loading state: black background
   };
 
   // Determine if the button should be disabled
   const isButtonDisabled = disabled || !isChecked;
 
   // Determine if hover effect should be applied
   const isHoverEffectEnabled = !isButtonDisabled && state !== "disabled" && state !== "loading";
 
   // Handle button press
   const handlePress = () => {
     if (!isButtonDisabled) {
       setIsPressed(true); // Set pressed state
       setTimeout(() => setIsPressed(false), 100); // Reset pressed state after 100ms
       if (onClick) {
         onClick(); // Call the onClick function
       }
     }
   };
 
   return (
     <View className="flex justify-center items-center w-[335px] p-5">
       {/* Checkbox for Terms and Conditions */}
       <Pressable
         onPress={() => setIsChecked(!isChecked)} // Toggle checkbox state
         className="flex-row items-center mb-5"
       >
         {/* Checkbox on the Left when icon is "right" */}
         {icon === "right" && (
           <>
             {isChecked ? (
               <CheckBoxIcon className="text-black text-2xl" /> // Checked icon
             ) : (
               <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" /> // Unchecked icon
             )}
             <Text className="ml-2.5">{label}</Text>
           </>
         )}
 
         {/* Checkbox on the Right when icon is "left" */}
         {icon === "left" && (
           <>
             <Text className="mr-2.5">{label}</Text>
             {isChecked ? (
               <CheckBoxIcon className="text-black text-2xl" /> // Checked icon
             ) : (
               <CheckBoxOutlineBlankIcon className="text-gray-600 text-2xl" /> // Unchecked icon
             )}
           </>
         )}
       </Pressable>
 
       {/* Button */}
       <Pressable
         onPress={handlePress} // Handle button press
         disabled={isButtonDisabled} // Disable button if checkbox is not checked or explicitly disabled
         onHoverIn={() => isHoverEffectEnabled && setIsHovered(true)} // Handle hover in
         onHoverOut={() => isHoverEffectEnabled && setIsHovered(false)} // Handle hover out
         style={{ backgroundColor: background || undefined }} // Apply background color if provided
         className={`${sizes[size]} ${
           background
             ? null // If background is provided, ignore default styles
             : isButtonDisabled
             ? buttonStates.disabled // Apply disabled styles
             : isPressed
             ? buttonStates.pressed // Apply pressed styles
             : isHovered && isHoverEffectEnabled
             ? buttonStates.hover // Apply hover styles when hovered and hover effect is enabled
             : buttonStates[state]
         } flex items-center justify-center`}
       >
         {state === "loading" ? (
           <ActivityIndicator size="small" color="#ffffff" /> // React Native loading indicator
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