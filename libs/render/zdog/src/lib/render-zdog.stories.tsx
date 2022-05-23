import { Story, Meta } from '@storybook/react';
import { RenderZdog, RenderZdogProps } from './render-zdog';

export default {
  component: RenderZdog,
  title: 'RenderZdog',
} as Meta;

const Template: Story<RenderZdogProps> = (args) => <RenderZdog {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
