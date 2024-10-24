'use client';
import { getAllDestinations } from '@/app/api/utils/getAll';
import React, { useState, useEffect } from 'react';
import { handleToggleFav, ItemCard } from '../foods/AllFoods';
// import ItemCard from '../cards/Cards'; // Import the ItemCard component


// const ItemCard = ({ item }) => {
//   return (
//     <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
//       {/* Food Image */}
//       <img 
//         src={item.img} 
//         alt={item.title} 
//         className="w-full h-40 object-cover mb-4 rounded" 
//       />
      
//       {/* Food Title */}
//       <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      
//       {/* Food Description (optional) */}
//       {item.description && (
//         <p className="text-gray-600 mb-2">
//           {item.description.length > 100 
//             ? item.description.slice(0, 100) + '...' 
//             : item.description}
//         </p>
//       )}
//     </div>
//   );
// };

const AllDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [update,setUpdate] = useState(true)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationData = await getAllDestinations();
        console.log("Fetched destinations data:", destinationData);

        // Access the array inside `data` property
        if (destinationData && Array.isArray(destinationData.data)) {
          setDestinations(destinationData.data); // foodData.data contains the actual foods array
          setFilteredDestinations(destinationData.data); // Initialize with all foods
        } else {
          console.error("Unexpected data format:", destinationData);
          setDestinations([]);
          setFilteredDestinations([]);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, [update]);

  const handleFilterChange = (e) => {
    const selectedSeason = e.target.value;
    setSeasonFilter(selectedSeason);

    if (selectedSeason === 'All') {
      setFilteredDestinations(destinations); // Show all foods if 'All' is selected
    } else {
      const filtered = destinations.filter((destination) => destination.season === selectedSeason);
      setFilteredDestinations(filtered);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Destinations</h1>

      {/* Filter section */}
      <div className="flex justify-center mb-8">
        <select
          value={seasonFilter}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All Seasons</option>
          <option value="summer">Summer</option>
          <option value="spring">Spring</option>
          <option value="fall">Autumn</option>
          <option value="winter">Winter</option>
          <option value="rainy">Rainy</option>
        </select>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((item) => (
            <ItemCard
              key={item._id} // Use _id from MongoDB as the key
              item={item}
              handleToggleFav={()=>handleToggleFav(item,setUpdate)}
            />
          ))
        ) : (
          <p>No destinations available for the selected season.</p>
        )}
      </div>
    </div>
  );
};

export default AllDestinations;