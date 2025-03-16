import { Button } from "./rect";

export default {
  title: "Button System/Buttons/Rect",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "dynamic", // Ensures the code is shown
      },
    },
  },
  argTypes: {
    state: {
        options: ["default", "pressed", "hover", "disabled" , "loading"],
        description: "Variant of the button",   
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium", "large"],
        description: "Size of the button",
        control: { type: "select" },
    },
    onClick: {
        action: "clicked",
        description: "Function to be called when the button is clicked",
    },
    label: {
        control: { type: "text" },
        description: "Content of the button",
    },
    varient : {
        options: ["primary", "secondary"],
        description: "Variant of the button",
        control: { type: "select" },
    },
},
};

export const RectButton = {
  args: {
    label: "Button",
    size: "small",
    state: "default",
    onClick: () =>alert("Default button clicked"),
    background : "",
  }
}

