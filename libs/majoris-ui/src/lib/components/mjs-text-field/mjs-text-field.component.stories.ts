import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
import { MjsIconComponent } from '../mjs-icon/mjs-icon.component';
import { MjsTextFieldComponent } from './mjs-text-field.component';

export default {
  title: 'Forms/Field',
  tags: ['autodocs'],
  component: MjsTextFieldComponent,
  argTypes: {
    label: {
      control: 'text',
      description: 'Control the field label',
    },
    placeholder: {
      control: 'text',
      description: 'Control the field placeholder',
    },
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
    disabled: {
      control: 'boolean',
      description: 'Control the field disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Control the field required state',
    },
    readonly: {
      control: 'boolean',
      description: 'Control the field readonly state',
    },
  },
  args: {
    label: 'name',
    placeholder: 'digite o nome de usuario',
    size: 'md',
    rounded: 'md',
    required: false,
    readonly: false,
    disabled: false,
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, MjsIconComponent],
    }),
  ],
  parameters: {
    controls: { expanded: true },
  },
} as Meta<MjsTextFieldComponent>;

export const Field = ({ ...args }) => ({
  template: `
  <mjs-text-field
    label="${args['label']}"
    leftIcon="${args['leftIcon']}"
    rightIcon="${args['rightIcon']}"
    placeholder="${args['placeholder']}"
    rounded="${args['rounded']}"
    size="${args['size']}"
    [readonly]="${args['readonly']}"
    [disabled]="${args['disabled']}"
    [required]="${args['required']}">
  </mjs-text-field>`,
  props: {
    ...args,
  },
});
