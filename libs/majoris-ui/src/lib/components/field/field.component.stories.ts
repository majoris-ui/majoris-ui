import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
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
    required: {
      control: 'boolean',
      description: 'Control the field required state',
    },
  },
  args: {
    size: 'md',
    rounded: 'sm',
    placeholder: 'type anything',
    required: false,
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
  parameters: {
    controls: { expanded: true },
  },
} as Meta<FieldComponent>;

export const Field = ({ ...args }) => ({
  template: `
  <mjs-field
    [required]="${args['required']}"
    placeholder="${args['placeholder']}"
    rounded="${args['rounded']}"
    size="${args['size']}">
  </mjs-field>`,
  props: {
    ...args,
  },
});
