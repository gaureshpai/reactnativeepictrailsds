import Label from "./label";

export default {
  title: "Design System/Labels",
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

export const checkbox = {
  args: {
    type: "checkbox",
    label: "Label",
    checked: false,
    disabled: false,
    onPress: () => console.log("Component pressed"),
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    disabledLabel: {
        control: {type: "boolean"},
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export const radio = {
  args: {
    type: "radio",
    label: "Label",
    checked: false,
    disabled: false,
    onPress: () => console.log("Component pressed"),
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    disabledLabel: {
        control: {type: "boolean"},
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export const toggle = {
  args: {
    type: "toggle",
    checked: false,
    disabled: false,
    onPress: () => console.log("Component pressed"),
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
