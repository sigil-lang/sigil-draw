import { Story, Meta } from '@storybook/react';
import { DisplaySvg, DisplaySvgProps } from './display-svg';

export default {
  component: DisplaySvg,
  title: 'DisplaySvg',
} as Meta;

const Template: Story<DisplaySvgProps> = (args) => <DisplaySvg {...args} />;

export const Heart = Template.bind({});
Heart.args = {
  hem: 100,
  size: 1,
  d: `M 10,30
  A 20,20 0,0,1 50,30
  A 20,20 0,0,1 90,30
  Q 90,60 50,90
  Q 10,60 10,30 z`
};
