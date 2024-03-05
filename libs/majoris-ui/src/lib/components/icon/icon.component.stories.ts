import type { Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Misc/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
    },
    fontSet: {
      control: 'select',
      options: ['outlined', 'round', 'sharp'],
    },
  },
  args: {
    icon: 'home',
    fontSet: 'round',
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<IconComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `
      <mjs-icon icon="${args['icon']}" fontSet="${args['fontSet']}" style="color: white;" />
    `,
    props: { ...args },
  };
};
