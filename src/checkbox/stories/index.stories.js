import React from 'react';
import { Checkbox } from '..';

export default {
  title: 'Checkbox',
};

export const regular = () => <Checkbox defaultChecked>Checkbox</Checkbox>;

export const small = () => <Checkbox size={300}>Checkbox</Checkbox>;

export const indeterminate = () => (
  <Checkbox indeterminate size={500}>
    Checkbox
  </Checkbox>
);
