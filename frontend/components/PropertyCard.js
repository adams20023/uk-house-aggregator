import React from 'react';
import Link from 'next/link';
import { FaBed, FaBath, FaHeart } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.imageUrl || '/images/default-property.jpg'}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full text-red-500 hover:text-red-600">
          <FaHeart />
        </button>
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
          {property.status}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 truncate">
          {property.title}
        </h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-gray-800 font-bold mb-4">£{property.price.toLocaleString()}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaBed className="text-gray-600 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <FaBath className="text-gray-600 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div>{property.propertyType}</div>
        </div>
        <Link href={`/property/${property.id}`}>
          <a className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

