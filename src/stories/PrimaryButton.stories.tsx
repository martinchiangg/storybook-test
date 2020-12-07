import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "../components/PrimaryButton/PrimaryButton";

storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button>😀 😎 👍 💯</Button>
  ));