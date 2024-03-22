import { addons } from '@storybook/manager-api';
import afTheme  from './theme';

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item) => !item.tags?.includes('hidden')
    }
  },
  theme: afTheme
});
