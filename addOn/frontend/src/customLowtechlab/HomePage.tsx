/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { Avatar, Box, Card, CardActionArea, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled, alpha } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '23px',
  fontWeight: 'normal',
  lineHeight: 1.2,
  color: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  '& strong': {
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: theme.palette.secondary.main,
  },
  '& em': {
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.tertiary.main,
  },
})) as typeof Typography;

const MainCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 500,
  color: theme.palette.primary.main,
})) as typeof Typography;

const MainCardDescription = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'normal',
})) as typeof Typography;

type MainCardProps = {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  externalLink?: boolean;
};

const MainCard = ({ title, description, link, icon, externalLink }: MainCardProps) => {
  return (
    <Card elevation={0}>
      <CardActionArea
        component={RRLink}
        to={link}
        sx={{
          padding: 2,
          borderRadius: 2,
          '&:hover, &:focus-visible': { backgroundColor: alpha('#D6EDED', 0.5) },
          '& .MuiCardActionArea-focusHighlight': { zIndex: -1 },
        }}
        target={externalLink ? '_blank' : undefined}
        disableRipple
      >
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.main', height: 60, width: 60 }}>{icon}</Avatar>
          <Box>
            <MainCardTitle variant="h3">{title}</MainCardTitle>
            <MainCardDescription>{description}</MainCardDescription>
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: { xs: 5, md: 1 }, marginBottom: { xs: 0, md: 5 } }}
        spacing={6}
      >
        <Grid container spacing={5} justifyContent={'center'}>
          <Grid xs={12} md={8}>
            <MainTitle component="h2" variant="h2" textAlign="center">
              Bienvenu.e.s dans l&apos;archipel du Low-tech Lab !
            </MainTitle>
          </Grid>
        </Grid>

        <Grid xs={12} container spacing={2} rowSpacing={2}>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<ListIcon />}
              title="Liste des organisations"
              description="Listez toutes les îles de l'archipel"
              link="/Organization"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<MapIcon />}
              title="La carte"
              description="Naviguez d'île en ile"
              link="/Organization?view=map"
              />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<CalendarMonthIcon />}
              title="L'agenda"
              description="Tenez-vous au courant des événements low-tech"
              link="/Event"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<HubOutlinedIcon />}
              title="La carto en réseau"
              description="Explorez les liens entre les îles de l'archipel"
              link="https://lowtechlab.flod.io"
              externalLink
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<ForumIcon />}
              title="Discussions avec l'Archipel"
              description="Rejoignez le discord pour participer aux appels mensuels et partager avec les autres communautés "
              link="https://discord.com/invite/7d9kjjn6ta"
              externalLink
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MainCard
              icon={<PermContactCalendarIcon />}
              title="Annuaire"
              description="Retrouver les membres de la communauté"
              link="/person"
            />
          </Grid>
        </Grid>
        

        <Grid xs={12} textAlign="center">
          <Box
            component="img"
            src="/images/icon-carte-archipel-ltl.webp"
            alt="Illustration de l'archipel Low-tech en France"
            title="Illustration de l'archipel Low-tech en France"
            sx={{ width: { xs: '100%', md: '50%' } }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
