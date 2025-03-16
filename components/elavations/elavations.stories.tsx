import Elevation from "./elevations";

export default {
  title: "Design System/Elevation",
  component: Elevation,
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

export const Elavations = {
    args: {
      type: 'm',
      // children: <div className="w-24 h-24 flex items-center justify-center"></div>,
    },
    argTypes: {
      type: {
        options: ['xs', 's', 'm', 'l', 'xl'],
        control: { type: "select" },
        description: "Shadow elevation level"
      },
    },
    render: (args) => (
      <Elevation {...args}>
        <div className="w-24 h-24 bg-white">
        </div>
      </Elevation>
    ),
  };