/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link } from 'react-admin';

const CardTitle = styled(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'DK Burobu',
  textTransform: 'uppercase'
}));

const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ marginY: 2 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Organization?view=map">
            <CardMedia
              component="img"
              height="200px"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "375px", margin: "auto" }}
              image="/images/icon-carte-archipel-ltl.webp"
              alt="icone-carte"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Où ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Organization">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/organizations.png"
              alt="icone-annuaire"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Organisations
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Event">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icons8-calendrier-160.png"
              alt="icone-agenda"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Quand ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Page/https%3A%2F%2Fdata.archipel.lowtechlab.org%2Fpages%2Fapropos/show">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "200px", margin: "auto" }}
              image="/images/icon-lowtechlab.png"
              alt="icone-cest-quoi"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Quoi ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea component={Link} to="/Person">
            <CardMedia
              component="img"
              sx={{ paddingTop: 2, maxHeight: "200px", maxWidth: "245px", margin: "auto" }}
              image="/images/icons8-annuaire-200.png"
              alt="icone-cest-qui"
            />
            <CardContent>
              <CardTitle color="primary" variant="h4">
                Qui ?
              </CardTitle>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
