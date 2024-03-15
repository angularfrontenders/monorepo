import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Documentation', 'Components'],
      },
    },
    controls: { expanded: true },
  },
};

export default preview;
