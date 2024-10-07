import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: '',
  });

  const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key]) query[key] = formData[key];
    });

    router.push({
      pathname: '/search',
      query,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price (£)"
        value={formData.minPrice}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price (£)"
        value={formData.maxPrice}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <select
        name="bedrooms"
        value={formData.bedrooms}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        <option value="">Bedrooms</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}+
          </option>
        ))}
      </select>
      <select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        <option value="">Property Type</option>
        {propertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md px-4 py-2 w-full md:col-span-3"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

