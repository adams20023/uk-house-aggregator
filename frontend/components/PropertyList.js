import React from 'react';
import PropertyCard from './PropertyCard';
import Pagination from './Pagination';

const PropertyList = ({ properties, currentPage, totalPages }) => {
  if (properties.length === 0) {
    return <p className="text-center text-gray-600">No properties found.</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PropertyList;

