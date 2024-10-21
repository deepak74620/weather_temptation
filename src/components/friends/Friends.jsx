"use client";
import { getFriends } from "@/app/api/utils/friends";
import React, { useEffect, useState } from "react";
import Users from "../users/Users";
import UserComp from "../users/UserComp";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const getFriendsList = async () => {
    try {
      const friends = await getFriends();
      if (friends) {
        console.log(friends);
        setFriends(friends.data.ref);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFriendsList();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 p-4">
        {friends?.map((friend, _) => {
          return (
            <>
              <UserComp user={friend?.friendDetails} friend={true} />
            </>
          );
        })}
      </div>
      <Users />
    </div>
  );
};

export default Friends;
