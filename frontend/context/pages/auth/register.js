// File: pages/auth/register.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from '../../utils/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/register', formData);
      console.log(res.data);
      // Redirect or show success message
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;

