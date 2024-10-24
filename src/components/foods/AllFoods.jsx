// 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ItemsCard from '../cards/Cards';

// const FoodsPage = () => {
//   const [foods, setFoods] = useState([]);
//   const [seasonFilter, setSeasonFilter] = useState('All');
//   const [filteredFoods, setFilteredFoods] = useState([]);

//   // Fetch all foods from the backend API
//   const fetchFoods = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/foods'); // Replace with your backend URL
//       setFoods(response.data);
//       setFilteredFoods(response.data); // Initialize filtered foods with all foods
//     } catch (error) {
//       console.error('Error fetching foods:', error);
//     }
//   };

//   // Fetch foods on component mount
//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   // Function to filter foods based on season
//   const handleFilterChange = (e) => {
//     const selectedSeason = e.target.value;
//     setSeasonFilter(selectedSeason);

//     if (selectedSeason === 'All') {
//       setFilteredFoods(foods); // Show all foods if no filter is applied
//     } else {
//       const filtered = foods.filter((food) => food.season === selectedSeason);
//       setFilteredFoods(filtered);
//     }
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Discover Foods</h1>

//       {/* Filter section */}
//       <div className="flex justify-center mb-8">
//         <select
//           value={seasonFilter}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="All">All Seasons</option>
//           <option value="Summer">Summer</option>
//           <option value="Spring">Spring</option>
//           <option value="Autumn">Autumn</option>
//           <option value="Winter">Winter</option>
//         </select>
//       </div>

//       {/* Display foods */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//         {filteredFoods.length > 0 ? (
//           filteredFoods.map((item) => (
//             <ItemsCard
//               key={item._id} // Assuming _id is used as a unique identifier in your database
//               item={item}
//               // Uncomment and adjust if you have logic for favorites
//               // onToggleFavorite={() => toggleFavorite(item)}
//               // isFavorite={isFavorite(item)}
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-4">No foods available for the selected season.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodsPage;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import ItemsCard from '../cards/Cards';
// import { getAllFoods } from '@/app/api/utils/getALL';

// const AllFoods = () => {
//   const [foods, setFoods] = useState([]);
//   const [filteredFoods, setFilteredFoods] = useState([]);
//   const [seasonFilter, setSeasonFilter] = useState('All');

//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         const foodData = await getAllFoods();
//         console.log("Fetched foods data:", foodData);

//         // Access the array inside `data` property
//         if (foodData && Array.isArray(foodData.data)) {
//           setFoods(foodData.data); // foodData.data contains the actual foods array
//           setFilteredFoods(foodData.data); // Initialize with all foods
//         } else {
//           console.error("Unexpected data format:", foodData);
//           setFoods([]);
//           setFilteredFoods([]);
//         }
//       } catch (error) {
//         console.error("Error fetching foods:", error);
//       }
//     };
//     fetchFoods();
//   }, []);

//   const handleFilterChange = (e) => {
//     const selectedSeason = e.target.value;
//     setSeasonFilter(selectedSeason);

//     if (selectedSeason === 'All') {
//       setFilteredFoods(foods); // Show all foods if 'All' is selected
//     } else {
//       const filtered = foods.filter((food) => food.season === selectedSeason);
//       setFilteredFoods(filtered);
//     }
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Discover Foods</h1>

//       {/* Filter section */}
//       <div className="flex justify-center mb-8">
//         <select
//           value={seasonFilter}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="All">All Seasons</option>
//           <option value="Summer">Summer</option>
//           <option value="Spring">Spring</option>
//           <option value="Autumn">Autumn</option>
//           <option value="Winter">Winter</option>
//         </select>
//       </div>

//       {/* Display foods */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//         {filteredFoods.length > 0 ? (
//           filteredFoods.map((item) => (
//             <ItemsCard
//               key={item.id}
//               item={item}
//               // Add any necessary props to handle favorites or other functionality
//             />
//           ))
//         ) : (
//           <p>No foods available for the selected season.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllFoods;








'use client';
import React, { useState, useEffect } from 'react';
// import ItemCard from '../cards/Cards'; // Import the ItemCard component
import { SaveButton } from '../cards/Cards';
import { getAllFoods, toggleFav } from '@/app/api/utils/getAll';


export const ItemCard = ({ item,handleToggleFav }) => {
  console.log(item?.title,item)
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 sm:min-w-[250px] ">
      {/* Food Image */}
      <img 
        src={item?.imageUrl} 
        alt={item?.name} 
        className="w-full h-40 object-cover mb-4 rounded" 
      />
      
      {/* Food Title */}
      <div className='flex items-start justify-between'>

      <h3 className="text-md font-semibold ">{item?.name}</h3>
      
      {/* Food Description (optional) */}
      {item.description && (
        <p className="text-gray-600 mb-2">
          {item?.description.length > 100 
            ? item?.description.slice(0, 100) + '...' 
            : item?.description}
        </p>
      )}
      <SaveButton isSaved={item?.isFav || false} onClick={handleToggleFav} />
      </div>
    </div>
  );
};
export const handleToggleFav = async(item,setUpdate)=>{
  try {
    const body ={
      item:item
    }
    const toggle = await toggleFav(body)
    setUpdate((update)=>!update)
  } catch (error) {
    
  }
}
const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [seasonFilter, setSeasonFilter] = useState('All');
  const [update,setUpdate] = useState(true)

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foodData = await getAllFoods();
        console.log("Fetched foods data:", foodData);

        // Access the array inside `data` property
        if (foodData && Array.isArray(foodData.data)) {
          setFoods(foodData.data); // foodData.data contains the actual foods array
          setFilteredFoods(foodData.data); // Initialize with all foods
        } else {
          console.error("Unexpected data format:", foodData);
          setFoods([]);
          setFilteredFoods([]);
        }
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    fetchFoods();
  }, [update]);

  const handleFilterChange = (e) => {
    const selectedSeason = e.target.value;
    setSeasonFilter(selectedSeason);

    if (selectedSeason === 'All') {
      setFilteredFoods(foods); // Show all foods if 'All' is selected
    } else {
      const filtered = foods.filter((food) => food.season === selectedSeason);
      setFilteredFoods(filtered);
    }
  };

 
  

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Foods</h1>

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
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <ItemCard
              key={item._id} // Use _id from MongoDB as the key
              item={item}
              handleToggleFav={()=>handleToggleFav(item,setUpdate)}
            />
          ))
        ) : (
          <p>No foods available for the selected season.</p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;