import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PropertyList from '../components/PropertyList';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchPage = () => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      fetchProperties(currentPage);
    }
  }, [router.query]);

  const fetchProperties = async (page = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties/search`, {
        params: { ...router.query, page, limit: 9 },
      });
      setProperties(res.data.properties);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold my-6">Search Results</h2>
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <PropertyList properties={properties} currentPage={currentPage} totalPages={totalPages} />
      )}
    </Layout>
  );
};

export default SearchPage;

