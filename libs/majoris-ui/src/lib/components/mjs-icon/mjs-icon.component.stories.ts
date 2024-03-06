import type { Meta } from '@storybook/angular';
import { MjsIconComponent } from './mjs-icon.component';

export default {
  title: 'Misc/Icon',
  component: MjsIconComponent,
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
} as Meta<MjsIconComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `
      <mjs-icon icon="${args['icon']}" fontSet="${args['fontSet']}" style="color: white;" />
    `,
    props: { ...args },
  };
};
