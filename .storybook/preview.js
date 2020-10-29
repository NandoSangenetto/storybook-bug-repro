import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { GlobalStyle } from '../pages/_app';
import { theme } from '../constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1280px',
          height: '720px',
        },
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&amp;display=swap"
        rel="stylesheet"
      />
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
