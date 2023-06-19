import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskComplete: () => console.log("task completed"),
  onTaskChange: (value) => console.log("taskName changed:", value),
};
