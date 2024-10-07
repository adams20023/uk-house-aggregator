// File: pages/properties/recommendations.js

import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import api from '../../utils/api';
import { AppContext } from '../../context/AppContext';

const Recommendations = () => {
  const { user } = useContext(AppContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchRecommendations = async () => {
        const res = await api.get(`/properties/recommendations/${user.id}`);
        setRecommendations(res.data);
      };

      fetchRecommendations();
    }
  }, [user]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Recommended Properties</Typography>
      <Grid container spacing={3}>
        {recommendations.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{property.title}</Typography>
                <Typography>{property.description}</Typography>
                <Typography>Price: £{property.price}</Typography>
                <Typography>Location: {property.location}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recommendations;

