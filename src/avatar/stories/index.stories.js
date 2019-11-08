import React from 'react';
import { Avatar } from '..';

export default {
  title: 'Avatar',
};

export const image = () => (
  <Avatar
    size={64}
    name="Sarah Li"
    image="https://randomuser.me/api/portraits/women/27.jpg"
  />
);

export const name = () => <Avatar size={64} name="Sarah Li" />;
