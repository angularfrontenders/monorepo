import type { Meta, StoryObj } from '@storybook/angular';

import { StorybookHostComponent } from './storybook-host.component';

const meta: Meta<StorybookHostComponent> = {
  component: StorybookHostComponent,
};

export default meta;
type Story = StoryObj<StorybookHostComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    props: {
      label: 'StorybookHostComponent',
      primary: true,
    },
  }),
};