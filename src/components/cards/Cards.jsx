// 'use client'
// import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

// export default function ItemsCard() {
//   const list = [
//     {
//       title: "Orange",
//       img: "/images/fruit-1.jpeg",
//       price: "$5.50",
//     },
//     {
//       title: "Tangerine",
//       img: "/images/fruit-2.jpeg",
//       price: "$3.00",
//     },
//     {
//       title: "Raspberry",
//       img: "/images/fruit-3.jpeg",
//       price: "$10.00",
//     },
//     {
//       title: "Lemon",
//       img: "/images/fruit-4.jpeg",
//       price: "$5.30",
//     },
//     {
//       title: "Avocado",
//       img: "/images/fruit-5.jpeg",
//       price: "$15.70",
//     },
//     {
//       title: "Lemon 2",
//       img: "/images/fruit-6.jpeg",
//       price: "$8.00",
//     },
//     {
//       title: "Banana",
//       img: "/images/fruit-7.jpeg",
//       price: "$7.50",
//     },
//     {
//       title: "Watermelon",
//       img: "/images/fruit-8.jpeg",
//       price: "$12.20",
//     },
//   ];

//   return (
//     <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
//       {list.map((item, index) => (
//         <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
//           <CardBody className="overflow-visible p-0">
//             <Image
//               shadow="sm"
//               radius="lg"
//               width="100%"
//               alt={item.title}
//               className="w-full object-cover h-[140px]"
//               src={item.img}
//             />
//           </CardBody>
//           <CardFooter className="text-small justify-between">
//             <b>{item.title}</b>
//             <p className="text-default-500">{item.price}</p>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }





'use client';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleToggleFav, ItemCard } from "../foods/AllFoods";

// Create a reusable SaveButton component
export const SaveButton = ({ isSaved, onClick }) => {
  console.log(isSaved)
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center w-8 h-8 rounded-md border-0 border-gray-300 transition-all duration-300 hover:scale-125 ${
        isSaved ? "bg-white text-gray-500" : "bg-white text-gray-500"
      }  `}
    >
      {isSaved ? <Bookmark fill="bg-blue-500" className=""  /> : <Bookmark className="" />}
    </div>
  );
};

// Reusable component for displaying a card
// export const ItemCard = ({ item, onToggleFavorite, isFavorite }) => (
//   <Card disableRipple  key={item.title} shadow="lg" isPressable className="rounded-lg overflow-hidden">
//     <CardBody className="p-0 relative overflow-hidden h-[180px]"> {/* Set fixed height */}
//       <Image
//         shadow="sm"
//         radius="none"
//         width="100%"
//         alt={item.title}
//         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         src={item.img}
//       />
//     </CardBody>
//     <CardFooter className="flex justify-between items-center px-4 py-2">
//       <div>
//         <b className="text-lg">{item.title}</b>
//         <p className="text-default-500">{item.price || item.description}</p>
//       </div>
//       <SaveButton isSaved={isFavorite} onClick={onToggleFavorite} />
//     </CardFooter>
//   </Card>
// );

export default function ItemsCard() {
  const [favorites, setFavorites] = useState([]);
  const [update,setUpdate] = useState(true)

  // Food items list
  const foods = [
    { name: "Orange", imageUrl: "https://vegrecipeswithvaishali.com/wp-content/uploads/2022/02/palak-dal-khichdi-w.jpg", price: "$5.50" },
    { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
    { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
    { title: "Lemon", img: "/images/fruit-4.jpeg", price: "$5.30" },
  ];

  // Travel destinations list
  const travelDestinations = [
    { title: "Paris", img: "/images/paris.jpeg", description: "City of Lights" },
    { title: "Tokyo", img: "/images/tokyo.jpeg", description: "Land of the Rising Sun" },
    { title: "New York", img: "/images/new-york.jpeg", description: "The Big Apple" },
    { title: "Sydney", img: "/images/sydney.jpeg", description: "Harbor City" },
  ];

  // Function to toggle favorite status
  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.title === item.title)
        ? prev.filter((fav) => fav.title !== item.title) // Remove if already favorite
        : [...prev, item] // Add if not favorite
    );
  };

  const isFavorite = (item) => favorites.some((fav) => fav.title === item.title);
const router=useRouter()
  return (
    <div className="p-8 space-y-8">
      {/* Foods Section */}
      <div>
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Foods</h2>
        <span onClick={()=>{router.push('/foods')}} className="text-blue-600 text-sm cursor-pointer hover:underline ">View all</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {foods.map((item) => (
            <ItemCard
              key={item.title}
              item={item}
              handleToggleFav={()=>handleToggleFav(item,setUpdate)}
            />
          ))}
        </div>
      </div>

      {/* Travel Destinations Section */}
      <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Travel Destinations</h2>
        <span onClick={()=>{router.push('/destinations')}} className="text-blue-600 text-sm cursor-pointer hover:underline ">View all</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {travelDestinations.map((item) => (
            <ItemCard
              key={item.title}
              item={item}
              onToggleFavorite={() => toggleFavorite(item)}
              isFavorite={isFavorite(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
