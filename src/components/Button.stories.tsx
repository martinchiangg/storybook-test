import React from "react";
import { Button } from "./Button";
// import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};
// const Template = (args) => <Button {...args} />;

export const Active = () => <Button>Review list → </Button>
export const Inactive = () => <Button disabled>Review list → </Button>
export const Secondary = () => <Button buttonLevel="secondary"> ← Return to Workspace</Button>
export const Tertiary = () => <Button buttonLevel="tertiary">Edit</Button>

