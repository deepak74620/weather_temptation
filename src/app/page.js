'use client'
import Location from "@/components/location/Location";
import Weather from "@/components/weather/Weather";
import ItemsCard from "@/components/cards/Cards";
import AuthContext from "./AuthContext";
import { useContext, useEffect } from "react";
import { getUser } from "./api/utils/getUser";
// import Navbar from "@/components/navbar/Navbar";
// import Image from "next/image";

export default function Home() {
  const { setUser } = useContext(AuthContext);
  const userDetails = async () => {
    try {
      const user = await getUser();
      console.log(user)
      if (user) {
        console.log(user);
        setUser(user?.data)
        // setCurrentUser(user.data);
      }
    } catch (error) {
      // logout()
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('heyt')
    userDetails();
  }, []);
  return (
    <div className="min-h-screen">
      <Weather/>
      <ItemsCard/>
    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-h-full">
      <Location/>
    </div> */}
    </div>
  );
}
