import Label from "./label";

export default {
  title: "Design System/Foundations",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
};
export const label = {
  args: {
    type: "checkbox",
    label: "Label",
    checked: false,
    disabled: false,
    onPress: () => console.log("Component pressed"),
  },
  argTypes: {
    type: {
      options: ["checkbox", "radio", "toggle"],
      control: { type: "select" },
    },
    checked: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
      if: { arg: "type", neq: "toggle" }, // Hide label only when type is 'toggle'
    },
    disabledLabel: {
      control: { type: "boolean" },
      if: { arg: "checkbox", neq: "toggle" }, // Hide disabledLabel only when type is 'toggle'
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
