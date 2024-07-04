/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Grid, Link } from "@mui/material";
import { styled } from '@mui/material/styles';

const CardTitle = styled(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'DK Burobu',
  textTransform: 'uppercase'
}));

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} href="/Organization?perPage=500&sort=pair%3Alabel&view=map&lat=47.2186353776589&lng=-1.5545654296875002&zoom=10">
            <CardMedia
              component="img"
              height="200px"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "375px", margin: "auto" }}
              image="/images/icon-carte-archipel-ltl.webp"
              alt="icone-carte"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                La carte
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} href="/Organization">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/organizations.png"
              alt="icone-annuaire"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                L'annuaire des orgas
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} href="/Event">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icons8-calendrier-160.png"
              alt="icone-agenda"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                L'agenda
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} href="/Page/https%3A%2F%2Fdata.archipel.lowtechlab.org%2Fpages%2Fapropos/show">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icon-lowtechlab.png"
              alt="icone-a-propos"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                A propos
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} href="/Person">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "245px", margin: "auto" }}
              image="/images/icons8-annuaire-200.png"
              alt="icone-cest-qui"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                C'est qui ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
