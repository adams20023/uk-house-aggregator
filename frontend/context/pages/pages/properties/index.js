// File: pages/properties/index.js

import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import api from '../../utils/api';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await api.get('/properties');
      setProperties(res.data);
    };

    fetchProperties();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Properties</Typography>
      <Grid container spacing={3}>
        {properties.map((property) => (
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

export default Properties;

