import React from 'react';
import { Tooltip } from '..';
import { Button } from '../..';

export default {
  title: 'Tooltip',
};

export const standard = () => (
  <>
    <Tooltip label="Calendar">
      <Button>afdfs</Button>
    </Tooltip>
  </>
);
