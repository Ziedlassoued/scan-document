import React from 'react';
import Preview from './Preview';

export default {
  component: Preview,
  title: 'Pages/Preview',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Preview />;
