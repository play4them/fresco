import React from 'react';
import { Tabs } from '..';

export default {
  title: 'Tabs',
};

export const standard = () => (
  <Tabs
    data={[
      {
        label: 'Tab 1',
        content: 'tab 1 dfsdfsdf',
      },
      {
        label: 'Tab 2',
        content: 'tab 2 sdfsdf',
      },
    ]}
  />
);
