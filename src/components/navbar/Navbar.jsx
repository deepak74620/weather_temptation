// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Navbar as NextNavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import Cookies from "js-cookie";
// import Profile from "../profile/Profile";
// // import {AcmeLogo} from "./AcmeLogo.jsx";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const token = Cookies.get("accessToken") || null;
//     setAccessToken(token);
//   }, []);

//   const menuItems = [
//     "Profile",
//     "Log Out",
//   ];
//   return (
//     <NextNavbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           {/* <AcmeLogo /> */}
//           <Link color="foreground" href="/">
//           <p className="font-bold text-inherit">Temptation</p>
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="/friends">
//             Friends
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/trips" aria-current="page">
//             Trips
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/planTrip">
//             Plan a trip
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         {accessToken ? (
//           <>
//             <Profile />
//           </>
//         ) : (
//           <>
//             <NavbarItem className="hidden lg:flex">
//               <Link href="/login">Login</Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Button as={Link} color="primary" href="/signup" variant="flat">
//                 Sign Up
//               </Button>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </NextNavbar>
//   );
// };

// export default Navbar;

















// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Navbar as NextNavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import Cookies from "js-cookie";
// import Profile from "../profile/Profile";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const token = Cookies.get("accessToken") || null;
//     setAccessToken(token);
//   }, []);

//   const menuItems = ["Profile", "Log Out"];

//   return (
//     <NextNavbar
//       isBordered
//       className="bg-gradient-to-r from-green-400 via-yellow-300 to-blue-500"
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       {/* Left Content */}
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <Link color="foreground" href="/">
//             <p className="font-bold text-2xl text-white">Temptation</p>
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Center Content */}
//       <NavbarContent
//         className="hidden sm:flex gap-6"
//         justify="center"
//       >
//         <NavbarItem>
//           <Link
//             className="text-lg font-semibold text-white hover:text-yellow-500"
//             href="/friends"
//           >
//             Friends
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             className="text-lg font-semibold text-white hover:text-yellow-500"
//             href="/trips"
//             aria-current="page"
//           >
//             Trips
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             className="text-lg font-semibold text-white hover:text-yellow-500"
//             href="/planTrip"
//           >
//             Plan a Trip
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Right Content */}
//       <NavbarContent justify="end">
//         {accessToken ? (
//           <Profile />
//         ) : (
//           <>
//             <NavbarItem className="hidden lg:flex">
//               <Link className="text-lg text-white hover:text-green-300" href="/login">
//                 Login
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Button
//                 as={Link}
//                 className="bg-yellow-400 text-white hover:bg-yellow-500"
//                 href="/signup"
//                 variant="flat"
//               >
//                 Sign Up
//               </Button>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>

//       {/* Menu Items for Small Screens */}
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </NextNavbar>
//   );
// };

// export default Navbar;














"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import Profile from "../profile/Profile";
import { motion } from "framer-motion"; // For subtle animations

// Import Google Fonts for enhanced styling
import "@fontsource/poppins"; // Clean font for travel theme
import "@fontsource/nunito";  // Round font for food theme

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("accessToken") || null;
    setAccessToken(token);
  }, []);

  const menuItems = ["Profile", "Log Out"];

  // Define hover animation using framer-motion
  const hoverEffect = {
    scale: 1.1,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
  };

  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-r from-green-400 via-yellow-350 to-blue-500">
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* Brand Name with hover effect */}
          <motion.div whileHover={hoverEffect}>
            <Link href="/" className="font-bold text-inherit text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Temptation
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      {/* Main Nav Links for Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <motion.div whileHover={hoverEffect}>
            <Link
              href="/friends"
              className="font-semibold text-white"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Friends
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div whileHover={hoverEffect}>
            <Link
              href="/trips"
              className="font-semibold text-white"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Trips
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div whileHover={hoverEffect}>
            <Link
              href="/planTrip"
              className="font-semibold text-white"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Plan a trip
            </Link>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* User Profile/Sign Up Section */}
      <NavbarContent justify="end">
        {accessToken ? (
          <Profile />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <motion.div whileHover={hoverEffect}>
                <Link href="/login" className="text-white font-medium">
                  Login
                </Link>
              </motion.div>
            </NavbarItem>
            <NavbarItem>
              <motion.div whileHover={hoverEffect}>
                <Button
                  as={Link}
                  href="/signup"
                  className="bg-gradient-to-r from-yellow-400 to-green-400 text-white rounded-md shadow-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  variant="flat"
                >
                  Sign Up
                </Button>
              </motion.div>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {/* Mobile Menu for Small Screens */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-lg font-semibold text-center text-white"
              href={item === "Log Out" ? "/logout" : "/profile"}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;


















// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Navbar as NextNavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import Cookies from "js-cookie";
// import Profile from "../profile/Profile";
// import { motion } from "framer-motion"; // For subtle animations

// // Import Google Fonts for enhanced styling
// import "@fontsource/poppins"; // Clean font for travel theme
// import "@fontsource/nunito";  // Round font for food theme

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const token = Cookies.get("accessToken") || null;
//     setAccessToken(token);
//   }, []);

//   const menuItems = ["Profile", "Log Out"];

//   // Define hover animation using framer-motion
//   const hoverEffect = {
//     scale: 1.1,
//     boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
//   };

//   return (
//     <NextNavbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-r from-light-yellow-300 via-yellow-400 to-blue-500">
//       {/* Mobile Menu Toggle */}
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           {/* Brand Name with hover effect */}
//           <motion.div whileHover={hoverEffect}>
//             <Link href="/" className="font-bold text-inherit text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
//               Temptation
//             </Link>
//           </motion.div>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Main Nav Links for Desktop */}
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <motion.div whileHover={hoverEffect}>
//             <Link
//               href="/friends"
//               className="font-semibold text-white"
//               style={{ fontFamily: 'Nunito, sans-serif' }}
//             >
//               Friends
//             </Link>
//           </motion.div>
//         </NavbarItem>
//         <NavbarItem>
//           <motion.div whileHover={hoverEffect}>
//             <Link
//               href="/trips"
//               className="font-semibold text-white"
//               style={{ fontFamily: 'Nunito, sans-serif' }}
//             >
//               Trips
//             </Link>
//           </motion.div>
//         </NavbarItem>
//         <NavbarItem>
//           <motion.div whileHover={hoverEffect}>
//             <Link
//               href="/planTrip"
//               className="font-semibold text-white"
//               style={{ fontFamily: 'Nunito, sans-serif' }}
//             >
//               Plan a trip
//             </Link>
//           </motion.div>
//         </NavbarItem>
//       </NavbarContent>

//       {/* User Profile/Sign Up Section */}
//       <NavbarContent justify="end">
//         {accessToken ? (
//           <Profile />
//         ) : (
//           <>
//             <NavbarItem className="hidden lg:flex">
//               <motion.div whileHover={hoverEffect}>
//                 <Link href="/login" className="text-white font-medium">
//                   Login
//                 </Link>
//               </motion.div>
//             </NavbarItem>
//             <NavbarItem>
//               <motion.div whileHover={hoverEffect}>
//                 <Button
//                   as={Link}
//                   href="/signup"
//                   className="bg-gradient-to-r from-yellow-400 to-green-400 text-white rounded-md shadow-lg"
//                   style={{ fontFamily: 'Poppins, sans-serif' }}
//                   variant="flat"
//                 >
//                   Sign Up
//                 </Button>
//               </motion.div>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>

//       {/* Mobile Menu for Small Screens */}
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full text-lg font-semibold text-center text-white"
//               href={item === "Log Out" ? "/logout" : "/profile"}
//               style={{ fontFamily: 'Nunito, sans-serif' }}
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </NextNavbar>
//   );
// };

// export default Navbar;
