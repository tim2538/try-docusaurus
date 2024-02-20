import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    gradient: Palette['primary'];
  }
  interface PaletteOptions {
    gradient: PaletteOptions['primary'];
  }
}

// General MUI theme
const MuiTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1877f2',
          contrastText: '#ffffff'
        },
        secondary: {
          main: '#eb0014',
          contrastText: '#ffffff'
        },
        error: {
          main: '#fa3c3c',
          contrastText: '#ffffff'
        },
        success: {
          main: '#42b72a',
          contrastText: '#ffffff'
        },
        background: {
          default: '#f0f2f5'
        },
        text: {
          primary: '#1c1e21',
          disabled: '#dddddd'
        },
        gradient: {
          main: 'linear-gradient(to right, #1877f2, #0059b2)'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#007fff',
          contrastText: '#fafafa'
        },
        secondary: {
          main: '#eb0014',
          contrastText: '#fafafa'
        },
        error: {
          main: '#fa3c3c',
          contrastText: '#fafafa'
        },
        success: {
          main: '#42b72a',
          contrastText: '#fafafa'
        },
        background: {
          default: '#0d1117',
          paper: '#161b22'
        },
        text: {
          primary: '#fafafa',
          disabled: 'rgba(250, 250, 250, 0.5)'
        },
        gradient: {
          main: '#66b2ff'
        }
      }
    }
  }
});

export default MuiTheme;
