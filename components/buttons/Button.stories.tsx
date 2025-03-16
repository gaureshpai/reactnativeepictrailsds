import { Button } from "./button";

export default {
  title: "Button System/Small Button/Rect Primary",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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

export const ButtonPressed = {
  args: {
    label: "Button",
    size: "sm",
    state: "pressed",
    disabled: false,
    onClick: () => alert("Default button clicked"),

  }
}

export const ButtonHover = {
  args: {
    label: "Button",
    size: "sm",
    state: "hover",
    disabled: false,
    onClick: () => alert("Default button clicked"),

  }
}

export const ButtonDisabled = {
  args: {
    label: "Button",
    size: "sm",
    state: "disabled",
    disabled : true,
    onClick: () => alert("Default button clicked"),

  }
}

