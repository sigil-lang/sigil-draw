import { Story, Meta } from '@storybook/react';
import { ComponentReact, ComponentReactProps } from './component-react';

export default {
  component: ComponentReact,
  title: 'ComponentReact',
} as Meta;

const Template: Story<ComponentReactProps> = (args) => (
  <ComponentReact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
