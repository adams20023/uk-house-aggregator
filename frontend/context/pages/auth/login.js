// File: pages/auth/login.js

import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from '../../utils/api';
import { AppContext } from '../../context/AppContext';

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', formData);
      console.log(res.data);
      // Save token and set user
      setUser(res.data.user);
      // Redirect or show success message
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={onSubmit}>
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
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

