import type { Meta } from '@storybook/angular';
import { MjsRadioComponent } from './mjs-radio.component';

export default {
  title: 'Forms/Radio',
  component: MjsRadioComponent,
  tags: ['autodocs'],
  argTypes: {
    onClickEvent: { action: 'clicked', description: 'Click event' },
    onChangeEvent: { action: 'changed', description: 'Change event' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    round: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full', 'none'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: ['left', 'right'],
    },
    required: {
      control: 'boolean',
    },
  },
  args: {
    size: 'md',
    round: 'md',
    disabled: false,
    checked: false,
    label: 'Checkbox',
    name: 'checkbox',
    id: 'checkbox',
    placement: 'right',
    required: false,
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<MjsRadioComponent>;

export const Checkbox = ({ ...args }) => {
  return {
    template: `
      <mjs-radio
        size="${args['size']}"
        round="${args['round']}"
        label="${args['label']}"
        name="${args['name']}"
        id="${args['id']}"
        placement="${args['placement']}"
         [disabled]="${args['disabled']}"
        [checked]="${args['checked']}"
        [required]="${args['required']}"
      ></mjs-radio>
    `,
    props: { ...args },
  };
};
