import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

export const parameters = { //pertence ao próprio storeybook aqui eu configuro os padrões
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
      {
        name: 'light',
        value: theme.colors.white,
      },
    ]
  }
}
export const decorators = [ // decorators para leitura do Theme
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];

// Configuração storybook do componente
