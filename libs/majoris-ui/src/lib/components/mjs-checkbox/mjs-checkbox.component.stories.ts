import type { Meta } from '@storybook/angular';
import { MjsCheckboxComponent } from './mjs-checkbox.component';
export default {
  title: 'Forms/Checkbox',
  component: MjsCheckboxComponent,
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
} as Meta<MjsCheckboxComponent>;

export const Checkbox = ({ ...args }) => {
  return {
    template: `
      <mjs-checkbox
        size="${args['size']}"
        round="${args['round']}"
        [disabled]="${args['disabled']}"
        [checked]="${args['checked']}"
        label="${args['label']}"
        name="${args['name']}"
        id="${args['id']}"
        placement="${args['placement']}"
        [required]="${args['required']}"
      ></mjs-checkbox>
    `,
    props: { ...args },
  };
};
