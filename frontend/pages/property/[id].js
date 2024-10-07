import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import axios from 'axios';
import { useRouter } from 'next/router';

const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPropertyDetails();
    }
  }, [id]);

  const fetchPropertyDetails = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`);
      setProperty(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching property details:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <p>Loading property details...</p>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <p>Property not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={property.imageUrl || '/images/default-property.jpg'}
            alt={property.title}
            className="w-full h-96 object-cover rounded-md"
          />
          <Map longitude={property.longitude} latitude={property.latitude} />
        </div>
        <div className="mt-6">
          <p className="text-gray-700 mb-4">{property.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Property Details</h2>
              <ul className="list-none">
                <li>
                  <span className="font-semibold">Price:</span> £{property.price.toLocaleString()}
                </li>
                <li>
                  <span className="font-semibold">Location:</span> {property.location}
                </li>
                <li>
                  <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
                </li>
                <li>
                  <span className="font-semibold">Bathrooms:</span> {property.bathrooms}
                </li>
                <li>
                  <span className="font-semibold">Property Type:</span> {property.propertyType}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside">
                {property.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Agent Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
            <form className="bg-gray-100 p-6 rounded-md">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                rows="4"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetails;

