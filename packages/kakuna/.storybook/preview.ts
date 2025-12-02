import type { Decorator, StoryFn } from '@storybook/angular';
import '@design-system/colors/tokens.light.css';
import '@design-system/colors/tokens.dark.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
    },
  },
};

const themeDecorator: Decorator = (story: StoryFn, context) => {
  const theme = context.globals['theme'];
  document.documentElement.classList.toggle('dark', theme === 'dark');

  return story(context.args, context);
};

export const decorators = [themeDecorator];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'var(--ds-surface-base)' },
      { name: 'dark', value: '#111' },
    ],
  },
};
