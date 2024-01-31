import type { Meta, StoryObj } from '@storybook/angular';
import { FieldComponent } from './field.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FieldComponent> = {
  component: FieldComponent,
  title: 'FieldComponent',
};
export default meta;
type Story = StoryObj<FieldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/field works!/gi)).toBeTruthy();
  },
};
