import type { Meta, StoryObj } from '@storybook/angular';

import { TextButtonComponent } from './text-button.component';

const meta: Meta<TextButtonComponent> = {
  component: TextButtonComponent,
};

export default meta;
type Story = StoryObj<TextButtonComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {

  args: {
    text: 'click me!'
  },
 
};
