import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-admin';

const AppTitle = styled(Typography)(({ theme }) => ({
  textWrap: 'balance',
  lineHeight: '1.1',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
    maxWidth: '120px',
    textAlign: 'center',
  }
})) as typeof Typography;

const AppBarTitle = () => {
  return (
    <AppTitle component="div" variant="h6">
      <Link to="/" color="inherit" underline="none">
        Archipel des Communautés
      </Link>
    </AppTitle>
  );
};

export default AppBarTitle;
