import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import axios from 'axios';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties/featured`);
      setProperties(res.data.properties);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="my-8">
        <SearchBar />
      </div>
      <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <PropertyList properties={properties} currentPage={1} totalPages={1} />
      )}
    </Layout>
  );
};

export default HomePage;

