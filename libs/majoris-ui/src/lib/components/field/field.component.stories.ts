import { Meta } from '@storybook/angular';
import { FieldComponent } from './field.component';

export default {
  title: 'Forms/Field',
  tags: ['autodocs'],
  component: FieldComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Control the field height',
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full', 'none'],
      description: 'Control the field border radius',
    },
    placeholder: {
      control: 'text',
      description: 'Control the field placeholder',
    },
    theme: {
      control: 'select',
      options: ['main', 'danger', 'success', 'warning', 'info'],
      description: 'Control the field theme',
    },
  },
  args: {
    size: 'md',
    rounded: 'sm',
    placeholder: 'Text',
    theme: 'main',
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<FieldComponent>;

export const Field = ({ ...args }) => ({
  template: `
  <mjs-field
    theme="${args['theme']}"
    placeholder="${args['placeholder']}"
    rounded="${args['rounded']}"
    size="${args['size']}">
  </mjs-field>`,
  props: { ...args },
});
