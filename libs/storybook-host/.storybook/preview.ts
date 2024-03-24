import type { Preview } from '@storybook/angular';
import afTheme  from './af-theme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Documentation', 'Components'],
      },
    },
    controls: { expanded: true },
    docs: {
      theme: afTheme
    }
  }
};

export default preview;