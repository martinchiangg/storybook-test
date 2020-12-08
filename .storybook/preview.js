import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from './Layout';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);

addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Layout]
}));

// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}