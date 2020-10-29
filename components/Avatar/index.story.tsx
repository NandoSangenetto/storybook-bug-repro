import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { Props } from '.';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const NormalSmall = Template.bind({});
NormalSmall.args = {
  type: 'normal',
  initials: 'NS',
};

export const NormalMedium = Template.bind({});
NormalMedium.args = {
  type: 'normal',
  initials: 'NS',
  size: 'medium',
};

export const NormalBig = Template.bind({});
NormalBig.args = {
  type: 'normal',
  initials: 'NS',
  size: 'big',
};

export const AlertSmall = Template.bind({});
AlertSmall.args = {
  type: 'alert',
};

export const AlertMedium = Template.bind({});
AlertMedium.args = {
  type: 'alert',
  size: 'medium',
};

export const AlertBig = Template.bind({});
AlertBig.args = {
  type: 'alert',
  size: 'big',
};

export const ImageSmall = Template.bind({});
ImageSmall.args = {
  type: 'image',
  src: 'https://source.unsplash.com/random/50x50',
  alt: "User's avatar",
  size: 'small',
};

export const ImageMedium = Template.bind({});
ImageMedium.args = {
  type: 'image',
  src: 'https://source.unsplash.com/random/50x50',
  alt: "User's avatar",
  size: 'medium',
};

export const ImageBig = Template.bind({});
ImageBig.args = {
  type: 'image',
  src: 'https://source.unsplash.com/random/50x50',
  alt: "User's avatar",
  size: 'big',
};
