import { createTheme } from '@mui/material/styles';
import theme from './config/theme';

const customTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#8A394E',
    }
  },
});

export default customTheme;
