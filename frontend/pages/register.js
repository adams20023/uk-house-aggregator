import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../context/AppContext';
import Layout from '../components/Layout';

const RegisterPage = () => {
  const { register } = useContext(AppContext);
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
  const [error, setError] = useState('');

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }
    const res = await register(name, email, password);
    if (res.success) {
      router.push('/');
    } else {
      setError(res.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;

