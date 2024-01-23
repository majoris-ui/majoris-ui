import type { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    text: {
      control: 'text',
    },
    theme: {
      control: 'select',
      options: ['primary', 'accent', 'highlight', 'danger'],
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'none'],
    },
  },
  args: {
    text: 'text',
    theme: 'primary',
    rounded: 'sm',
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<ButtonComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `<mjs-button rounded="${args['rounded']}" theme="${
      args['theme']
    }">${args['text'] ? args['text'] : ''}</mjs-button>`,
    props: { ...args },
  };
};
