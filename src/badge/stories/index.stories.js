import React from 'react';
import { Badge } from '..';

export default {
  title: 'Badge',
};

export const subtle = () => (
  <>
    <Badge children="Default" />
    <Badge children="Primary" intent="primary" />
    <Badge children="Success" intent="success" />
    <Badge children="Warning" intent="warning" />
    <Badge children="Danger" intent="danger" />
  </>
);

export const solid = () => (
  <>
    <Badge children="Default" appearance="solid" />
    <Badge children="Primary" appearance="solid" intent="primary" />
    <Badge children="Success" appearance="solid" intent="success" />
    <Badge children="Warning" appearance="solid" intent="warning" />
    <Badge children="Danger" appearance="solid" intent="danger" />
  </>
);
