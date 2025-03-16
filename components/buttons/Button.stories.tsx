import { Button } from "./button";

export default {
  title: "Button System/Buttons/Rect/pr",
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
        options: ["default", "pressed", "hover", "disabled"],
        description: "Variant of the button",   
        control: { type: "select" },
    },
    size: {
        options: ["sm", "md", "lg"],
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
    disabled: {
        control: { type: "boolean" },
        description: "Whether the button is disabled or not",
    },
},
};

export const ButtonDefault = {
  args: {
    label: "Button",
    size: "sm",
    state: "default",
    disabled: false,
    onClick: () => console.log("Default button clicked"),
    background : "",

  }
}

