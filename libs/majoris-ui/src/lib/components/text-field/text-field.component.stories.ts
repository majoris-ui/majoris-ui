import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { TextFieldComponent } from './text-field.component';

export default {
  title: 'Forms/Field',
  tags: ['autodocs'],
  component: TextFieldComponent,
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
      imports: [FormsModule, ReactiveFormsModule, IconComponent],
    }),
  ],
  parameters: {
    controls: { expanded: true },
  },
} as Meta<TextFieldComponent>;

export const Field = ({ ...args }) => ({
  template: `
  <mjs-text-field
    label="${args['label']}"
    leftIcon="${args['leftIcon']}"
    rightIcon="${args['rightIcon']}"
    placeholder="${args['placeholder']}"
    rounded="${args['rounded']}"
    size="${args['size']}"
    [labelStacked]="${args['labelStacked']}"
    [readonly]="${args['readonly']}"
    [disabled]="${args['disabled']}"
    [required]="${args['required']}">
    <mjs-icon #leftIcon icon="lock" />
  </mjs-text-field>`,
  props: {
    ...args,
  },
});
