import React from "react";
import { Button } from "./Button";
// import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};

const Template = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  text: "Review list",
  iconPosition: "right",
  children: "→",
};

export const Inactive = Template.bind({});
Inactive.args = {
  text: "Review list",
  disabled: true,
  iconPosition: "right",
  children: "→",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Return to Workspace",
  buttonLevel: "secondary",
  iconPosition: "left",
  children: "←",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: "Edit",
  buttonLevel: "tertiary",
};

