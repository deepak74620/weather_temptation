
import Location from "@/components/location/Location";
import Weather from "@/components/weather/Weather";
import ItemsCard from "@/components/cards/Cards";
// import Navbar from "@/components/navbar/Navbar";
// import Image from "next/image";

export default function Home() {
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
