import type { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    text: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'highlight', 'danger'],
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full', 'none'],
    },
    disabled: {
      control: 'boolean',
    },
    fill: {
      control: 'select',
      options: ['solid', 'outline', 'link'],
    },
  },
  args: {
    text: 'text',
    color: 'primary',
    rounded: 'sm',
    disabled: false,
    fill: 'solid',
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<ButtonComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `
    <mjs-button
      fill="${args['fill']}"
      [disabled]="${args['disabled']}"
      rounded="${args['rounded']}"
      color="${args['color']}">${
      args['text'] ? args['text'] : ''
    }</mjs-button>`,
    props: { ...args },
  };
};
