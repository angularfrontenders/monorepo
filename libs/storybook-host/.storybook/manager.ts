import { addons } from '@storybook/manager-api';

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item) => !item.tags?.includes('hidden')
    }
  }
});
