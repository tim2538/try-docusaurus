import {
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript
} from '@mui/material/styles';
import MuiTheme from './MuiTheme';

interface RootProps {
  children: JSX.Element;
}

export default function Root({ children }: RootProps) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={MuiTheme}>{children}</CssVarsProvider>
    </>
  );
}
