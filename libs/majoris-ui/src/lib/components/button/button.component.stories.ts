import type { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked', description: 'Click event' },
    text: {
      control: 'text',
      description: 'Control the button text content',
    },
    textColor: {
      control: 'select',
      options: [
        'default',
        'alternative',
        'highlight',
        'danger',
        'success',
        'warning',
        'info',
        'light',
        'dark',
        'gray',
      ],
      description: 'Control the button text color theme',
    },
    backgroundColor: {
      control: 'select',
      options: [
        'default',
        'alternative',
        'highlight',
        'danger',
        'success',
        'warning',
        'info',
        'light',
        'dark',
        'gray',
      ],
      description: 'Control the button color theme',
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full', 'none'],
      description: 'Control the button roundedness',
    },
    disabled: {
      control: 'boolean',
      description: 'Control the button disabled state',
    },
    fill: {
      control: 'select',
      options: ['solid', 'outline', 'link'],
      description: 'Control the button style',
    },
    expand: {
      control: 'boolean',
      description: 'Control the button width between [100%] or [fit]',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Control the button height',
    },
    loading: {
      control: 'boolean',
      description: 'Control the button loading state',
    },
  },
  args: {
    text: 'text',
    textColor: 'light',
    backgroundColor: 'default',
    rounded: 'sm',
    disabled: false,
    fill: 'solid',
    expand: false,
    size: 'md',
    loading: false,
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<ButtonComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `
    <mjs-button
      textColor="${args['textColor']}"
      [loading]="${args['loading']}"
      size="${args['size']}"
      [expand]="${args['expand']}"
      fill="${args['fill']}"
      [disabled]="${args['disabled']}"
      rounded="${args['rounded']}"
      backgroundColor="${args['backgroundColor']}">${
      args['text'] ? args['text'] : ''
    }</mjs-button>`,
    props: { ...args },
  };
};
