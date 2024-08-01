import React from 'react';
import { AppBar as MuiAppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import NetworkIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-admin';
import UserMenu from './UserMenu';
import ResourcesMenu from './ResourcesMenu';

const AppTitle = styled(Typography)(({ theme }) => ({
  textWrap: 'balance',
  lineHeight: '1.1',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
    maxWidth: '120px',
    textAlign: 'center',
  },
  '& span': {
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.8rem',
    },
  },
})) as typeof Typography;

const AppBar = () => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Box sx={{ marginRight: { xs: 0, lg: 1 } }}>
          <Link to="/" color="inherit" underline="none">
            <Box
              height={'48px'}
              component={'img'}
              src={'/logo192.png'}
              alt="Logo"
              sx={{ paddingTop: '5px', boxSizing: 'content-box' }}
            />
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <AppTitle component="h1" variant="h6">
            <Link to="/" color="inherit" underline="none">
              Archipel Low-tech Lab
            </Link>
          </AppTitle>
        </Box>

        <Stack sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} spacing={2} direction="row">
          <Button color="inherit" size="large" startIcon={<MapIcon />} component={Link} to={'/Organization?view=map'}>
            Carte géo
          </Button>
          <Button color="inherit" size="large" target="_blank" startIcon={<NetworkIcon />} component={Link} to={'https://lowtechlab.flod.io'}>
            Carte en réseau
          </Button>
          <Button color="inherit" size="large" startIcon={<PeopleIcon />} component={Link} to={'/Person'}>
            Annuaire
          </Button>
          <Button color="inherit" size="large" startIcon={<CalendarMonthIcon />} component={Link} to={'/Event'}>
            Calendrier
          </Button>
        </Stack>

        <ResourcesMenu />

        <UserMenu />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
