import { getUser } from "@/app/api/utils/getUser";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Location from "../location/Location";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null);
  const userDetails = async () => {
    try {
      const user = await getUser();
      if (user) {
        console.log(user);
        setCurrentUser(user.data);
      }
    } catch (error) {
      logout()
      console.log(error);
    }
  };
  useEffect(() => {
    userDetails();
  }, []);
  const logout = () => {
    Cookies.remove("accessToken");
    window.location.reload();
  };
  return (
    <div className="">
      <Popover showArrow={true}>
        <PopoverTrigger>
          <Avatar
            className="cursor-pointer"
            src={currentUser?.imgSrc}
            fallback={currentUser?.email?.slice(0, 2).toUpperCase()}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col text-black max-w-52" onClick={()=>router.push('/profile')}>
            <User
              className="cursor-pointer"
              name={`${currentUser?.email}`}
              description={currentUser?.description}
              avatarProps={{
                src: currentUser?.imgSrc,
                fallback: currentUser?.email?.slice(0, 2).toUpperCase(),
              }}
            />
            <div>
              {/* <Location/> */}
            </div>
            <div
              className="text-black cursor-pointer p-2"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Profile;
