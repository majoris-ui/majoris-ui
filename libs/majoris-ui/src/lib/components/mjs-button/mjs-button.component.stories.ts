import { type Meta } from '@storybook/angular';
import { MjsButtonComponent } from './mjs-button.component';

export default {
  title: 'Forms/Button',
  component: MjsButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked', description: 'Click event' },
    text: {
      control: 'text',
      description: 'Control the button text content',
    },
    theme: {
      control: 'select',
      options: ['default', 'danger', 'success', 'warning', 'info'],
    },
    round: {
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Control the button height',
    },
    loading: {
      control: 'boolean',
      description: 'Control the button loading state',
    },
    expand: {
      control: 'boolean',
      description: 'Control the button expand state',
    },
  },
  args: {
    text: 'text',
    theme: 'default',
    fill: 'solid',
    round: 'md',
    size: 'md',
    disabled: false,
    expand: false,
    loading: false,
  },

  parameters: {
    controls: { expanded: true },
  },
} as Meta<MjsButtonComponent>;

export const Button = ({ ...args }) => {
  return {
    template: `
      <mjs-button
        [loading]="${args['loading']}"
        [expand]="${args['expand']}"
        [disabled]="${args['disabled']}"
        theme="${args['theme']}"
        size="${args['size']}"
        fill="${args['fill']}"
        round="${args['rounded']}"
      >
        ${args['text'] ? args['text'] : ''}
      </mjs-button>
    `,
    props: { ...args },
  };
};
