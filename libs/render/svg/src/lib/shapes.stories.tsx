import { Story, Meta } from '@storybook/react';
import { DisplaySvg, DisplaySvgProps } from './display-svg/display-svg';
import { disc, square, polygon } from './shapes'

export default {
  component: DisplaySvg,
  title: 'Shapes',
} as Meta;

const Template: Story<DisplaySvgProps> = (args) => <DisplaySvg {...args} />;

export const Disc = Template.bind({});
Disc.args = {
  hem: 100,
  size: 5,
  showGrid: true,
  d: disc({hem:100, size: 1})
};


export const Square = Template.bind({});
Square.args = {
  hem: 100,
  size: 5,
  showGrid: true,
  d: square({hem:100, size: 1})
};

export const Hexagon = Template.bind({});
Hexagon.args = {
  hem: 100,
  size: 5,
  showGrid: true,
  d: polygon(50, 12)
};
