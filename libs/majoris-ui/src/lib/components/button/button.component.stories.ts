import { type Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Forms/Button',
  component: ButtonComponent,
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
    expanded: {
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
    theme: 'default',
    round: 'md',
    disabled: false,
    fill: 'solid',
    expanded: false,
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
      <div class="flex items-center justify-center w-screen h-screen">
        <mjs-button
        theme="${args['theme']}"
        [loading]="${args['loading']}"
        size="${args['size']}"
        [expanded]="${args['expanded']}"
        fill="${args['fill']}"
        [disabled]="${args['disabled']}"
        round="${args['rounded']}"
      >
        ${args['text'] ? args['text'] : ''}
      </mjs-button>
      </div>
    `,
    props: { ...args },
  };
};

export const ButtonOutline = ({ ...args }) => {
  return {
    template: `
    <mjs-button
      theme="${args['theme']}"
      [loading]="${args['loading']}"
      size="${args['size']}"
      [expanded]="${args['expanded']}"
      fill="outline"
      [disabled]="${args['disabled']}"
      round="${args['rounded']}"
    >
      ${args['text'] ? args['text'] : ''}
    </mjs-button>
    `,
    props: { ...args },
  };
};

export const ButtonLink = ({ ...args }) => {
  return {
    template: `
    <mjs-button
      theme="${args['theme']}"
      [loading]="${args['loading']}"
      size="${args['size']}"
      [expanded]="${args['expanded']}"
      fill="link"
      [disabled]="${args['disabled']}"
      round="${args['rounded']}"
    >
      ${args['text'] ? args['text'] : ''}
    </mjs-button>
    `,
    props: { ...args },
  };
};

export const ButtonDisabled = ({ ...args }) => {
  return {
    template: `
    <mjs-button
      theme="${args['theme']}"
      [loading]="${args['loading']}"
      size="${args['size']}"
      [expanded]="${args['expanded']}"
      fill="${args['fill']}"
      round="${args['rounded']}"
      disabled
    >
      ${args['text'] ? args['text'] : ''}
    </mjs-button>
    `,
    props: { ...args },
  };
};
